<?php

namespace Tests\Feature\Admin;

use App\Suggestion;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SuggestionsTest extends TestCase
{
    use RefreshDatabase;

    protected $isPaginated = true;

    /** @test */
    function it_can_show_suggestions_list()
    {
//        $this->withoutExceptionHandling();
        factory(Suggestion::class, 4)->create();
        $user = factory(User::class)->create();

        $response = $this->actingAs($user)->get("/admin/suggestions");
        $response->assertStatus(200)
            ->assertPropCount('suggestions', 4, $this->isPaginated);
//            ->assertPropValue('suggestions', function($orders) use ($orderToDeliverTomorrow){
//                $filteredOrder = collect($orders)->first();
//                $this->assertEquals($orderToDeliverTomorrow->uuid, collect($filteredOrder)->get('uuid'));
//            });
    }

    /** @test */
    function logged_user_can_update_status_to_viewed()
    {
        $this->updateStatus(['status' => 'viewed']);
        $this->assertEquals('viewed', Suggestion::first()->status);
    }

    /** @test */
    function logged_user_can_comment_how_it_was_solved()
    {
        $this->withoutExceptionHandling();

        $suggestion = factory(Suggestion::class)->create();
        $user = factory(User::class)->create();

        $this->actingAs($user)->put("/admin/suggestions/{$suggestion->id}/update", $this->validFields(['comment' => 'This was solved with a pan']));
        $comment = Suggestion::first()->comments->first();
        $this->assertEquals('This was solved with a pan', $comment->comment);
        $this->assertEquals($user->id, $comment->commenter->id);
        $this->assertEquals('solved', Suggestion::first()->status);
    }

    /** @test */
    function it_only_accept_viewed_solved_as_status_values()
    {
        $this->withExceptionHandling();

        $suggestion = factory(Suggestion::class)->create();
        $user = factory(User::class)->create();

        $this->actingAs($user)
            ->put("/admin/suggestions/{$suggestion->id}/updateStatus",
                $this->validFields(['status' => 'viewed'])
            );
        $this->assertEquals('viewed', Suggestion::first()->status);

        $this->actingAs($user)->put("/admin/suggestions/{$suggestion->id}/updateStatus",
            $this->validFields(['status' => 'solved'])
        );
        $this->assertEquals('solved', Suggestion::first()->status);

        $this->actingAs($user)->put("/admin/suggestions/{$suggestion->id}/updateStatus",
            $this->validFields(['status' => 'not-solved'])
        );
        $this->assertEquals('not-solved', Suggestion::first()->status);

        $this->actingAs($user)->put("/admin/suggestions/{$suggestion->id}/updateStatus",
            $this->validFields(['status' => 'not-allowed-status'])
        )->assertSessionHasErrors('status');
    }

    /** @test */
    function it_only_accept_viewed_solved_notSolved_as_status_values_when_logged_user_add_solve_comment()
    {
        $this->withExceptionHandling();

        $suggestion = factory(Suggestion::class)->create();
        $user = factory(User::class)->create();

        $this->actingAs($user)
            ->put("/admin/suggestions/{$suggestion->id}/update",
                $this->validFields(['status' => 'viewed'])
            );
        $this->assertEquals('viewed', Suggestion::first()->status);

        $this->actingAs($user)->put("/admin/suggestions/{$suggestion->id}/update",
            $this->validFields(['status' => 'solved'])
        );
        $this->assertEquals('solved', Suggestion::first()->status);

        $this->actingAs($user)->put("/admin/suggestions/{$suggestion->id}/update",
            $this->validFields(['status' => 'not-solved'])
        );
        $this->assertEquals('not-solved', Suggestion::first()->status);

        $this->actingAs($user)->put("/admin/suggestions/{$suggestion->id}/update",
            $this->validFields(['status' => 'not-allowed-status'])
        )->assertSessionHasErrors('status');
    }

    /** @test */
    function solved_message_field_is_required()
    {
        $this->solveComment($this->validFields(['comment' => '']))
            ->assertSessionHasErrors('comment');
    }

    /** @test */
    function solved_status_field_is_required()
    {
        $this->withExceptionHandling();
        $suggestion = factory(Suggestion::class)->create();
        $user = factory(User::class)->create();

        $this->actingAs($user)->put("/admin/suggestions/{$suggestion->id}/update",[
            'status' => '',
            'comment' => 'test',
        ])->assertSessionHasErrors('status');
    }

    /** @test */
    function it_search_suggestions_by_name()
    {
        $expectedById = factory(Suggestion::class)->create([
            'name' => 'Abel Ponce',
            'suggestion' => 'Es un gran pan',
        ]);
        $notExpectedById = factory(Suggestion::class)->create();
        $user = factory(User::class)->create();

        $response = $this->actingAs($user)->get("/admin/suggestions?name=Abel");
        $response->assertStatus(200)
            ->assertPropCount('suggestions', 1, $this->isPaginated) // is 2 becuase suggestions is paginated so has [ data => [...suggestions]
            ->assertPropValue('suggestions', function($suggestion) use ($expectedById){
                $filteredSuggestion = collect($suggestion)->first();
                $this->assertEquals($expectedById->id, collect($filteredSuggestion)->get('id'));
            }, $this->isPaginated);
    }

    /** @test */
    function it_search_suggestions_by_exact_date()
    {
        $this->withoutExceptionHandling();
        $today = now();
        $expectedByDate = factory(Suggestion::class)->create([
            'created_at' => $today,
        ]);
        $notExpectedByDate = factory(Suggestion::class)->create([
            'created_at' => now()->addDay()
        ]);
        $user = factory(User::class)->create();

        //Sun Nov 01 2020 12:00:00 GMT-0600
        $response = $this->actingAs($user)->get("/admin/suggestions?date=$today");
        $response->assertStatus(200)
            ->assertPropCount('suggestions', 1, $this->isPaginated)
            ->assertPropValue('suggestions', function($suggestion) use ($expectedByDate){
                $filteredOrder = collect($suggestion)->first();
                $this->assertEquals($expectedByDate->id, collect($filteredOrder)->get('id'));
            }, $this->isPaginated);
    }

    /** @test */
    function it_search_by_user_that_solve_suggestion()
    {
        factory(User::class, 2)->create();
        factory(Suggestion::class, 2)->create();

        $suggestion = factory(Suggestion::class)->create();
        $solverUser = factory(User::class)->create();
        // solver user solved suggestion
        $this->solveComment($this->validFields(), $suggestion, $solverUser);

        $user = factory(User::class)->create();

//        dd($suggestion->comments->first()->commenter->id);

        //Sun Nov 01 2020 12:00:00 GMT-0600
        $response = $this->actingAs($user)->get("/admin/suggestions?solver=$solverUser->id");
        $response->assertStatus(200)
            ->assertPropCount('suggestions', 1, $this->isPaginated)
            ->assertPropValue('suggestions', function($suggestion) use ($solverUser){
                $filteredSuggestion = collect($suggestion)->first();
                $this->assertEquals($solverUser->id, $filteredSuggestion['comments'][0]['commenter_id']);
            }, $this->isPaginated);
    }

    /** @test */
    function it_search_suggestions_by_solved_status()
    {
        $this->withoutExceptionHandling();
        $expectedByStatus = factory(Suggestion::class)->create([
            'name' => 'Abel Ponce',
        ]);
        $this->updateStatus(['status' => 'solved'], $expectedByStatus);

        $notExpectedByStatus = factory(Suggestion::class)->create();
        $user = factory(User::class)->create();

        //Sun Nov 01 2020 12:00:00 GMT-0600
        $response = $this->actingAs($user)->get("/admin/suggestions?status=solved");

        $response->assertStatus(200)
            ->assertPropCount('suggestions', 1, $this->isPaginated)
            ->assertPropValue('suggestions', function($suggestion) use ($expectedByStatus){
                $filteredOrder = collect($suggestion)->first();
                $this->assertEquals($expectedByStatus->id, collect($filteredOrder)->get('id'));
            }, $this->isPaginated);
    }

    /** @test */
    function it_should_add_user_that_change_status()
    {
        $this->withoutExceptionHandling();
        $userCauser = factory(User::class)->create([
            'name' => 'Abel Ponce'
        ]);
        $expectedByStatus = factory(Suggestion::class)->create([
            'name' => 'Antonio Rosado',
        ]);
        $this->updateStatus(['status' => 'solved'], $expectedByStatus, $userCauser);

//        dd($expectedByStatus->activities->last()->get()->toArray());
//        dd($expectedByStatus->activities()->with('causer')->get()->last()->toArray());
//        dd($expectedByStatus->activities()->with('causer', 'subject')->get()->last()->toArray());
        $this->assertEquals('Abel Ponce', $expectedByStatus->activities()->with('causer')->get()->last()->causer->name);
    }
    protected function updateStatus($attributes = [], $suggestionToUse = false, $user = false)
    {
        $this->withExceptionHandling();
        $suggestion = $suggestionToUse ? $suggestionToUse : factory(Suggestion::class)->create();
        $user = $user ? $user :  factory(User::class)->create();
        return $this->actingAs($user)->put("/admin/suggestions/{$suggestion->id}/updateStatus", $attributes);
    }

    protected function solveComment($attributes = [], $suggestion = false, $user = false)
    {
        $this->withExceptionHandling();
        $suggestion = $suggestion ? $suggestion : factory(Suggestion::class)->create();
        $user = $user ? $user :  factory(User::class)->create();
        return $this->actingAs($user)->put("/admin/suggestions/{$suggestion->id}/update", $attributes);
    }

    protected function validFields($overrides = []) {
        return array_merge([
            'status' => 'solved',
            'comment' => 'It was solved by pan',
        ], $overrides);
    }
}
