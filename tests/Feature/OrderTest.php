<?php

namespace Tests\Features;

use App\Category;
use App\Mail\OrderDetails;
use App\Order;
use App\Product;
use App\Store;
use App\User;
use Carbon\Carbon;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Support\Facades\Mail;
use Jenssegers\Date\Date;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class OrderTest extends TestCase
{
    use RefreshDatabase;
    // [remove when open to public]
    protected $user;

    public function setUp() :void
    {
        parent::setUp();
        $this->user = factory(User::class)
            ->create();
        $this->actingAs($this->user);
    }

    /** @test */
    function it_send_email_to_user_with_data()
    {
        // before test clear cart
        $this->withoutExceptionHandling();
        Cart::destroy();
        Mail::fake();
        $user = factory(User::class)->create();
        $this->actingAs($user);
        $product = factory(Product::class)->create();
        $store = factory(Store::class)->create();

        // Create Cart
        Cart::add($product, 1, ['comment' => 'test'])->associate(Product::class);
        Cart::add('orderDetailsId', 'OrderDetails', 1, 0, [
            'store' => $store->id,
            'date' => '2019-11-23T18:00:00.000Z',
            'hour' => '1:00',
            'name' => 'Abel',
            'lastname' => 'Ponce',
            'phone' => '2299017147',
            'email' => 'vnpoce8@gmail.com',
            'employeeName' => 'employeeNameName',
        ]);
        // Assert that no mailables were sent...
        Mail::assertNothingSent();
        $response = $this->post("pedido");
        $response->assertStatus(200);
        $order = Order::first();

        Mail::assertSent(OrderDetails::class, function ($mail) use ($order) {
            return $mail->order->id === $order->id;
        });

        // Assert a message was sent to the given users...
        Mail::assertSent(OrderDetails::class, function ($mail) use ($user) {
            return $mail->hasTo($mail->order->email);
        });
    }

    /** @test */
    function it_have_comment_products()
    {
        $this->withoutExceptionHandling();
        Cart::destroy();
        Mail::fake();
        $user = factory(User::class)->create();
        $this->actingAs($user);
        $product = factory(Product::class)->create();
        $store = factory(Store::class)->create();

        // Create Cart
        Cart::add($product, 1, ['comment' => 'test message'])->associate(Product::class);
        Cart::add('orderDetailsId', 'OrderDetails', 1, 0, [
            'store' => $store->id,
            'date' => '2019-11-23T18:00:00.000Z',
            'hour' => '1:00',
            'name' => 'Abel',
            'lastname' => 'Ponce',
            'phone' => '2299017147',
            'email' => 'vnpoce8@gmail.com',
            'employeeName' => 'employeeNameName',
        ]);
        $this->post("pedido");
        $this->assertDatabaseHas('order_product', [
            'product_id' => $product->id,
            'comment' => 'test message',
        ]);
    }

    /** @test */
    function it_have_customized_products()
    {
        $this->withoutExceptionHandling();
        Cart::destroy();
        Mail::fake();
        $user = factory(User::class)->create();
        $this->actingAs($user);
        $product = factory(Product::class)->create();
        $store = factory(Store::class)->create();

        // Create Cart
        Cart::add($product, 1, ['custom_message' => 'test message'])->associate(Product::class);
        Cart::add('orderDetailsId', 'OrderDetails', 1, 0, [
            'store' => $store->id,
            'date' => '2019-11-23T18:00:00.000Z',
            'hour' => '1:00',
            'name' => 'Abel',
            'lastname' => 'Ponce',
            'phone' => '2299017147',
            'email' => 'vnpoce8@gmail.com',
            'employeeName' => 'employeeNameName',
        ]);
        $this->post("pedido");
        $this->assertDatabaseHas('order_product', [
            'product_id' => $product->id,
            'custom_message' => 'test message',
        ]);
    }

    /** @test */
    function it_should_have_at_least_one_product_in_the_cart()
    {
        $this->withoutExceptionHandling();
        $this->addOrderDetails();

        $this->post("pedido");

        $this->assertEquals(0, Order::all()->count());
    }

    /** @test */
    function it_should_have_order_details_id_in_the_cart()
    {
        $this->withoutExceptionHandling();

        $this->addItemToCart();

        $this->post("pedido");

        $this->assertEquals(0, Order::all()->count());
    }


    /** @test */
    function set_details_must_return_to_home_when_is_not_content_in_cart()
    {
        Cart::destroy();

        $this->setDetails($this->validFields(), $withItem = false);

        $this->assertEquals(0, Cart::content()->count());
    }

    /** @test */
    function store_id_must_be_required_when_set_details()
    {
        $this->setDetails($this->validFields(['store' => '']))
            ->assertSessionHasErrors('store');
    }

    /** @test */
    function date_must_be_required_when_set_details()
    {
        $this->setDetails($this->validFields(['date' => '']))
            ->assertSessionHasErrors('date');
    }

    /** @test */
    function hour_must_be_required_when_set_details()
    {
        $this->setDetails($this->validFields(['hour' => '']))
            ->assertSessionHasErrors('hour');
    }

    /** @test */
    function customer_name_must_be_required_when_set_details()
    {
        $this->setDetails($this->validFields(['name' => '']))
            ->assertSessionHasErrors('name');
    }

    /** @test */
    function customer_lastname_must_be_required_when_set_details()
    {
        $this->setDetails($this->validFields(['lastname' => '']))
            ->assertSessionHasErrors('lastname');
    }

    /** @test */
    function customer_phone_must_be_required_when_set_details()
    {
        $this->setDetails($this->validFields(['phone' => '']))
            ->assertSessionHasErrors('phone');
    }

    /** @test */
    function customer_email_must_be_required_when_set_details()
    {
        $this->setDetails($this->validFields(['email' => '']))
            ->assertSessionHasErrors('email');
    }

    /** @test */
    function employee_name_must_be_required_when_is_logged_user_adding_set_details()
    {
        $user = factory(User::class)->create();
        $this->actingAs($user);

        $this->setDetails($this->validFields(['employeeName' => '']))
            ->assertSessionHasErrors('employeeName');
    }

    // [remove when open to public]
    // Este es skipped porque en estos momentos Sí esta loggeado el usuario y lo va a pedir a fuerza
    /** @test */
    function employee_name_must_not_be_required_when_guest_user_adding_set_details()
    {
        $this->markTestSkipped();
        $this->setDetails($this->validFields(['employeeName' => '']))
            ->assertSessionHasNoErrors('employeeName');
    }

    protected function setDetails($attributes = [], $withItem = true)
    {
        if($withItem) {
            // validar que la ruta de pedido/details debe tener algo en el carrito siempre
            Cart::destroy();
            $product = factory(Product::class)->create();
            Cart::add($product, 1, ['custom_message' => 'test message'])->associate(Product::class);
        }
        $this->withExceptionHandling();
        return $this->post('/pedido/detalles', $attributes);
    }

    protected function validFields($overrides = []) {
        return array_merge([
            'store' => factory(Store::class)->create()->id,
            'date' => '2019-11-23T18:00:00.000Z',
            'hour' => '7:00',
            'name' => 'Abel',
            'lastname' => 'Ponce',
            'phone' => '2299017147',
            'email' => 'valid@email.com',
            'employeeName' => 'Empleado',
        ], $overrides);
    }
}
