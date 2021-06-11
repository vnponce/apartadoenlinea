<?php

namespace Tests\Feature;

use App\Product;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;


class ProductsTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    function it_creates_product()
    {
        Storage::fake('photos');

        $this->withoutExceptionHandling();
        $category = factory(\App\Category::class)->create();
//        dd($category->toArray());
        $user = factory(User::class)->create();
//        dd($user->toArray())


        $this->actingAs($user)
            ->post('/admin/products/', [
            "name" => "Hojaldra de jamón y queso",
            "description" => "1 pieza",
            "ingredients" => "jamón",
//            "file" => "public/products/plZXSjboICXf9sUaR888t4kK8ln7dWwZmYOXr9N8.jpeg",
            "file" => UploadedFile::fake()->image('avatar.jpg'),
            "price" => 8,
            "available" => 1,
            "available_time" => null,
            "favorite" => 1,
            "customizable" => 1,
            "category_id" => $category->id,
        ]);

        $this->assertDatabaseHas('products', [
            "name" => "Hojaldra de jamón y queso",
            "description" => "1 pieza",
            "ingredients" => "jamón",
//            "image" => "public/products/plZXSjboICXf9sUaR888t4kK8ln7dWwZmYOXr9N8.jpeg",
            "price" => 800,
            "available" => 1,
            "available_time" => null,
            "customizable" => 1,
            "favorite" => 1,
        ]);
    }

    /** @test */
    function it_search_by_name()
    {
        $isPaginated = true;

        $expectedById = factory(Product::class)->create([
            'name' => 'rico pan',
        ]);
        $notExpectedById = factory(Product::class)->create();
        $user = factory(User::class)->create();

        $response = $this->actingAs($user)->get("/admin/products?name={$expectedById->name}");
        $response->assertStatus(200)
            ->assertPropCount('products', 1, $isPaginated)
            ->assertPropValue('products', function($products) use ($expectedById){
                $filteredOrder = collect($products)->first();
                $this->assertEquals('rico pan', collect($filteredOrder)->get('name'));
                $this->assertEquals($expectedById->id, collect($filteredOrder)->get('id'));
            }, $isPaginated);
    }

}
