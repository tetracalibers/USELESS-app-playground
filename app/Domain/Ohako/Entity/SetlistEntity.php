<?php
declare(strict_types=1);

namespace App\Domain\Ohako\Entity;

use Illuminate\Http\Request;
use App\Models\OhakoSetlist;

class SetlistEntity
{
  public function create(Request $request)
  {
    $setlist = OhakoSetlist::create([
      'user_id' => $request->userId,
      'sing_date' => $request->singDate,
      'artist_itunes_id' => $request->artistId,
      'artist_name' => is_null($request->artistName) ? '' : $request->artistName,
      'song_name' => is_null($request->songName) ? '' : $request->songName,
      'jacket_image' => is_null($request->jacketImage) ? '' : $request->jacketImage,
      'sing_key' => $request->singKey,
      'rating' => $request->rating,
      'score' => is_null($request->score) ? '' : $request->score,
      'memo' => is_null($request->memo) ? '' : $request->memo
    ]);
        
    $problems = $request->problems;
    
    foreach ($problems as $problem) {
      $setlist->problems()->attach($problem);
    }
        
    return $setlist;
  }
  
  public function update(Request $request) 
  {
    OhakoSetlist::where('id', $request->id)->update([
      'sing_date' => $request->singDate,
      'artist_itunes_id' => $request->artistId,
      'artist_name' => is_null($request->artistName) ? '' : $request->artistName,
      'song_name' => is_null($request->songName) ? '' : $request->songName,
      'jacket_image' => is_null($request->jacketImage) ? '' : $request->jacketImage,
      'sing_key' => $request->singKey,
      'rating' => $request->rating,
      'score' => is_null($request->score) ? '' : $request->score,
      'memo' => is_null($request->memo) ? '' : $request->memo
    ]);
    
    $setlist = OhakoSetlist::find($request->id);
    $setlist->problems()->sync(request()->problems);
    
    return $setlist;
  }
  
  public function getAllByUser(Request $request)
  {
    return OhakoSetlist::with('problems')
      ->where('user_id', $request->userId)
      ->orderBy('sing_date', 'desc')
      ->get();
  }
  
  public function getBySelectCondition(Request $request) 
  {
    return OhakoSetlist::with('problems')
      ->where('user_id', $request->userId)
      ->where($request->target, $request->value)
      ->orderBy('sing_date', 'desc')
      ->get();
  }
  
  public function getByRangeCondition(Request $request)
  {
    return OhakoSetlist::with('problems')
      ->where('user_id', $request->userId)
      ->whereBetween($request->target, $request->range)
      ->orderBy('sing_date', 'desc')
      ->get();
  }
  
  public function getUniqueList(Request $request)
  {
    return OhakoSetlist::where('user_id', $request->userId)
      ->only([$request->target])
      ->unique()
      ->sort()
      ->get();
  }
  
  public function getSongByArtist(Request $request)
  {
    return OhakoSetlist::where('user_id', $request->userId)
      ->where('artist_itunes_id', $request->artistId)
      ->only(['song_name', 'sing_key', 'sing_date', 'jacket_image', 'created_at'])
      ->orderBy('created_at', 'desc')
      ->orderBy('sing_date', 'desc')
      ->unique('song_name')
      ->get();
  }
  
  public function delete(Request $request)
  {
    $targetRecord = OhakoSetlist::find($request->id);
    $targetRecord->delete();
    return $targetRecord->id;
  }
}