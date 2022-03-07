<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OhakoProblem extends Model
{
    use HasFactory;
    
    public function setlists()
    {
        return $this->belongsToMany('\App\Models\OhakoSetlist', 'ohako_problem_ohako_setlist', 'problem_id', 'setlist_id');
    }
}
