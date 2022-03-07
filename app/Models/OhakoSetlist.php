<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OhakoSetlist extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'user_id',
        'sing_date',
        'artist_itunes_id',
        'artist_name',
        'song_name',
        'jacket_image',
        'sing_key',
        'rating',
        'score',
        'memo'
    ];
    
    public function problems()
    {
        return $this->belongsToMany('App\Models\OhakoProblem', 'ohako_problem_ohako_setlist', 'setlist_id', 'problem_id');
    }
}
