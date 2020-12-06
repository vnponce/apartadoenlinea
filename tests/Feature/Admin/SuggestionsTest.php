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

    /** @test */
    function it_can_show_suggestions_list()
    {
//        $this->withoutExceptionHandling();
        factory(Suggestion::class, 4)->create();
        $user = factory(User::class)->create();

        $response = $this->actingAs($user)->get("/admin/suggestions");
        $response->assertStatus(200)
            ->assertPropCount('suggestions', 4);
//            ->assertPropValue('suggestions', function($orders) use ($orderToDeliverTomorrow){
//                $filteredOrder = collect($orders)->first();
//                $this->assertEquals($orderToDeliverTomorrow->uuid, collect($filteredOrder)->get('uuid'));
//            });
    }

    /** @test */
    function logged_user_can_update_status_to_viewed()
    {
        $this->updateStatus($this->validFields(['status' => 'viewed']));
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

    protected function updateStatus($attributes = [])
    {
        $this->withExceptionHandling();
        $suggestion = factory(Suggestion::class)->create();
        $user = factory(User::class)->create();
        return $this->actingAs($user)->put("/admin/suggestions/{$suggestion->id}/updateStatus", $attributes);
    }

    protected function solveComment($attributes = [])
    {
        $this->withExceptionHandling();
        $suggestion = factory(Suggestion::class)->create();
        $user = factory(User::class)->create();
        return $this->actingAs($user)->put("/admin/suggestions/{$suggestion->id}/update", $attributes);
    }

    protected function validFields($overrides = []) {
        return array_merge([
            'status' => 'solved',
            'comment' => 'It was solved by pan',
        ], $overrides);
    }
}
