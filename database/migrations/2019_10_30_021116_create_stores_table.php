<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stores', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('name');
            $table->string('address');
            $table->string('friendly_address');
            $table->string('delivery_time');
            $table->string('lat')->nullable();
            $table->string('lon')->nullable();
            $table->string('monday_saturday');
            $table->string('sunday');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stores');
    }
}
