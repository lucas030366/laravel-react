<?php

namespace App\Models;

use App\Models\Variaveis;
use Illuminate\Database\Eloquent\Model;

class Usuarios extends Model
{

    protected $hidden = ["password"];

    public function variaves(){
        return $this->belongsTo(Variaveis::class);
    }
}
