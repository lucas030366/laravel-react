<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Variaveis extends Model
{

    protected $fillable = ['id'];

    protected $hidden = ["created_at", "updated_at"];

    public function usuario(){
        return $this->belongsTo(Usuarios::class);
    }
}
