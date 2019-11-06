<?php

namespace Tests\Browser;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class ExampleTest extends DuskTestCase
{
    /**
     * A basic browser test example.
     *
     * @return void
     */
    public function testBasicExample()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/pedido')
                    ->assertSee('PEDIDOS')
                    ->click('.stores-selector__value-container')
                    ->click('.stores-selector__option:first-child')
                    ->assertSee('Bernal');
        });
    }
}
