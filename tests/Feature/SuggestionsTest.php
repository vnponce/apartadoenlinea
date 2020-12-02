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
