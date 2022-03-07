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
        Schema::create('ohako_problem_ohako_setlist', function (Blueprint $table) {
            $table->integer('setlist_id');
            $table->integer('problem_id');
            $table->primary(['setlist_id', 'problem_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ohako_problem_ohako_setlist');
    }
};
