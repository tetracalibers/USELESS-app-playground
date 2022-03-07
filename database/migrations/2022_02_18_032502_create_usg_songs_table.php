<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usg_songs', function (Blueprint $table) {
            $table->id();
            $table->string('name', '100');
            $table->string('slug', '100');
            $table->integer('cd_id');
            $table->integer('position_in_cd');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usg_songs');
    }
};
