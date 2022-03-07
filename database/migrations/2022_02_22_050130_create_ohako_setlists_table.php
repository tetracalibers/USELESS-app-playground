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
        Schema::create('ohako_setlists', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->date('sing_date');
            $table->integer('artist_itunes_id')->default(-1);
            $table->string('artist_name')->default('');
            $table->string('song_name')->default('');
            $table->integer('sing_key')->default(0);
            $table->integer('rating')->default(0);
            $table->string('score', 10)->default('');
            $table->string('memo', 1000)->default('');
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
        Schema::dropIfExists('ohako_setlists');
    }
};
