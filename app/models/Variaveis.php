<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Variaveis extends Model
{
    public function usuario(){
        return $this->belongsTo(Usuarios::class);
    }
}
