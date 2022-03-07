<?php

use Illuminate\Support\Facades\Route;

Route::get('/api/tpusg/songlist', \App\Http\Actions\Tpusg\SongIndexAction::class);

Route::post('/api/auth/login', \App\Http\Actions\User\UserLoginAction::class);
Route::post('/api/auth/regist', \App\Http\Actions\User\UserRegistAction::class);

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::post('/api/auth/gate', \App\Http\Actions\User\UserGateCheckAction::class);
    
    Route::get('/api/ohako/problem/init', \App\Http\Actions\Ohako\ProblemInitAction::class);
    Route::post('/api/ohako/setlist/store', \App\Http\Actions\Ohako\SetlistStoreAction::class);
    Route::post('/api/ohako/setlist/init', \App\Http\Actions\Ohako\SetlistInitAction::class);
    Route::post('/api/ohako/setlist/destroy', \App\Http\Actions\Ohako\SetlistDestroyAction::class);
});

Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');
