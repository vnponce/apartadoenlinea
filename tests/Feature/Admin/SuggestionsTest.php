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
        $this->withoutExceptionHandling();

        $suggestion = factory(Suggestion::class)->create();
        $user = factory(User::class)->create();

        $this->actingAs($user)->put("/admin/suggestions/{$suggestion->id}/updateStatus", [
            'status' => 'viewed',
        ]);

        $this->assertEquals('viewed', Suggestion::first()->status);
    }

    /** @test */
    function logged_user_can_comment_how_it_was_solved()
    {
        $this->withoutExceptionHandling();

        $suggestion = factory(Suggestion::class)->create();
        $user = factory(User::class)->create();

        $this->actingAs($user)->put("/admin/suggestions/{$suggestion->id}/update", [
            'solved_comment' => 'This was solved with a pan',
        ]);
        $comment = Suggestion::first()->comments->first();
        $this->assertEquals('This was solved with a pan', $comment->comment);
        $this->assertEquals($user->id, $comment->commenter->id);
    }

    /** @test */
    function when_logged_user_solves_suggestion_solved_comment_is_required()
    {
        $this->withoutExceptionHandling();

        $suggestion = factory(Suggestion::class)->create();
        $user = factory(User::class)->create();

        $this->actingAs($user)->put("/admin/suggestions/{$suggestion->id}/update", [
            'solved_comment' => 'This was solved with a pan',
        ]);
        $comment = Suggestion::first()->comments->first();
        $this->assertEquals('This was solved with a pan', $comment->comment);
        $this->assertEquals($user->id, $comment->commenter->id);
    }

    /** @test */
    function it_only_accept_viewed_solved_as_status_values()
    {
        $this->withExceptionHandling();

        $suggestion = factory(Suggestion::class)->create();
        $user = factory(User::class)->create();

        $this->actingAs($user)->put("/admin/suggestions/{$suggestion->id}/updateStatus", [
            'status' => 'viewed',
        ]);
        $this->assertEquals('viewed', Suggestion::first()->status);

        $this->actingAs($user)->put("/admin/suggestions/{$suggestion->id}/updateStatus", [
            'status' => 'solved',
        ]);
        $this->assertEquals('solved', Suggestion::first()->status);

        $this->actingAs($user)->put("/admin/suggestions/{$suggestion->id}/updateStatus", [
            'status' => 'not-allowed-status',
        ])->assertSessionHasErrors('status');
    }
}
