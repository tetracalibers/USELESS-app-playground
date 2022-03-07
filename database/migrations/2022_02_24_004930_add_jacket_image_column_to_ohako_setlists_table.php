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
        Schema::table('ohako_setlists', function (Blueprint $table) {
            $table->string('jacket_image')->default('')->after('song_name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('ohako_setlists', function (Blueprint $table) {
            $table->dropColumn('jacket_image');
        });
    }
};
