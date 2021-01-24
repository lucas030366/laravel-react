<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Route::get('/{any}', function () {
    return view('layouts.app');
})->where('any', '.*');


Auth::routes();
