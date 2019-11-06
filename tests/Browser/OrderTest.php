<?php

namespace Tests\Browser;

use Carbon\Carbon;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Throwable;

class OrderTest extends DuskTestCase
{
    /**
     * @return void
     * @throws Throwable
     */
    public function test_store_selector_is_required()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/pedido')
                ->assertSee('PEDIDOS')
                ->click('button.next')
                ->waitFor('.error.store')
                ->assertSeeIn('.error.store', 'The store field is required.');
        });
    }

    /**
     *
     * @return void
     * @throws Throwable
     */
    public function test_date_selector_is_required()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/pedido')
                // set store on store selector
                ->click('.stores-selector__value-container')
                ->click('.stores-selector__option:first-child')
                ->click('button.next')
                ->waitFor('.error.date')
                ->assertSeeIn('.error.date', 'The date field is required.');
        });
    }

    /**
     *
     * @return void
     * @throws Throwable
     */
    public function test_hour_selector_is_required()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/pedido')
                // set store on store selector
                ->click('.stores-selector__value-container')
                ->click('.stores-selector__option:first-child')
                // set date on date picker
                ->type('.DateInput_input', '7 noviembre 19')
                ->click('button.next')
                ->waitFor('.error.hour')
                ->assertSeeIn('.error.hour', 'The hour field is required.');
        });
    }

    /**
     *
     * @return void
     * @throws Throwable
     */
    public function test_name_input_is_required()
    {
//        $tomorrow = Carbon::tomorrow();
//        dd($tomorrow->toDateString())
        $this->browse(function (Browser $browser) {
            $browser->visit('/pedido')
                // set store on store selector
                ->click('.stores-selector__value-container')
                ->click('.stores-selector__option:first-child')
                // set date on date picker
                ->type('.DateInput_input', '7 noviembre 19')
                // set hour on hour selector
                ->click('.hour-selector__value-container')
                ->click('.hour-selector__option:first-child')
                ->click('button.next')
                ->waitFor('.error.name')
                ->assertSeeIn('.error.name', 'The name field is required.');
        });
    }

    /**
     *
     * @return void
     * @throws Throwable
     */
    public function test_lastname_input_is_required()
    {
//        $tomorrow = Carbon::tomorrow();
//        dd($tomorrow->toDateString())
        $this->browse(function (Browser $browser) {
            $browser->visit('/pedido')
                // set store on store selector
                ->click('.stores-selector__value-container')
                ->click('.stores-selector__option:first-child')
                // set date on date picker
                ->type('.DateInput_input', '7 noviembre 19')
                // set hour on hour selector
                ->click('.hour-selector__value-container')
                ->click('.hour-selector__option:first-child')
                // type name
                ->type('[name="name"]', 'Abel')
                ->click('button.next')
                ->waitFor('.error.name')
                ->assertSeeIn('.error.name', 'The name field is required.');
        });
    }

    /**
     *
     * @return void
     * @throws Throwable
     */
    public function test_phone_input_is_required()
    {
//        $tomorrow = Carbon::tomorrow();
//        dd($tomorrow->toDateString())
        $this->browse(function (Browser $browser) {
            $browser->visit('/pedido')
                // set store on store selector
                ->click('.stores-selector__value-container')
                ->click('.stores-selector__option:first-child')
                // set date on date picker
                ->type('.DateInput_input', '7 noviembre 19')
                // set hour on hour selector
                ->click('.hour-selector__value-container')
                ->click('.hour-selector__option:first-child')
                // type name
                ->type('[name="name"]', 'Abel')
                // type lastname
                ->type('[name="lastname"]', 'Ponce')
                // submit
                ->click('button.next')
                ->waitFor('.error.phone')
                ->assertSeeIn('.error.phone', 'The phone field is required.');
        });
    }

    /**
     *
     * @return void
     * @throws Throwable
     */
    public function test_email_input_is_required()
    {
//        $tomorrow = Carbon::tomorrow();
//        dd($tomorrow->toDateString())
        $this->browse(function (Browser $browser) {
            $browser->visit('/pedido')
                // set store on store selector
                ->click('.stores-selector__value-container')
                ->click('.stores-selector__option:first-child')
                // set date on date picker
                ->type('.DateInput_input', '7 noviembre 19')
                // set hour on hour selector
                ->click('.hour-selector__value-container')
                ->click('.hour-selector__option:first-child')
                // type name
                ->type('[name="name"]', 'Abel')
                // type lastname
                ->type('[name="lastname"]', 'Ponce')
                // type lastname
                ->type('[name="phone"]', '2299017147')
                // submit
                ->click('button.next')
                ->waitFor('.error.email')
                ->assertSeeIn('.error.email', 'The email field is required.');
        });
    }
}
