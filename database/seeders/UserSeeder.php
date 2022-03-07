<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'tomixy',
            'password' => Hash::make('satsuki1234'),
            'thumbnail' => 'tomixy.jpg',
            'authority_id' => 1
        ]);
        
        DB::table('users')->insert([
            'name' => 'fukasawa',
            'password' => Hash::make('yuki1234'),
            'authority_id' => 20
        ]);
        
        DB::table('users')->insert([
            'name' => 'higashi',
            'password' => Hash::make('azusa1234'),
            'authority_id' => 21
        ]);
        
        //DB::table('users')->insert([
        //    'name' => 'yasu',
        //    'password' => 'emma1234',
        //]);
        
        //DB::table('users')->insert([
        //    'name' => 'nagahara',
        //    'password' => 'kyoto1234',
        //]);
    }
}
