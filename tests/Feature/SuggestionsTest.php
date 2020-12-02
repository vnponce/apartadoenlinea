<?php

namespace Tests\Feature;

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
    function it_can_store_suggestions()
    {
        $this->withoutExceptionHandling();

        $response = $this->suggestion($this->validFields());
        $response->assertStatus(200);

        $this->assertDatabaseHas('suggestions', $this->validFields());
    }

    /** @test */
    function it_has_created_status_when_was_created()
    {
        $this->withoutExceptionHandling();

        $response = $this->suggestion($this->validFields());
        $response->assertStatus(200);

        $this->assertEquals('created', Suggestion::first()->status);
    }

    /** @test */
    function name_field_is_required()
    {
        $this->suggestion($this->validFields(['name' => '']))
            ->assertSessionHasErrors('name');
    }

    /** @test */
    function email_field_is_required()
    {
        $this->suggestion($this->validFields(['email' => '']))
            ->assertSessionHasErrors('email');
    }

    /** @test */
    function email_field_is_valid_email()
    {
        $this->suggestion($this->validFields(['email' => 'not-valid-email']))
            ->assertSessionHasErrors('email');
    }

    /** @test */
    function suggestion_field_is_valid_email()
    {
        $this->suggestion($this->validFields(['suggestion' => '']))
            ->assertSessionHasErrors('suggestion');
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

    protected function suggestion($attributes = [])
    {
        $this->withExceptionHandling();
        return $this->post('/suggestions', $attributes);
    }

    protected function validFields($ovrrides = []) {
        return array_merge([
            'name' => 'Abel',
            'email' => 'abel@ponce.com',
            'suggestion' => 'Hola es un excelente Pan gracias por el esfuerzo',
        ], $ovrrides);
    }
}
