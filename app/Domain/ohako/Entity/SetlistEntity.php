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
  
  public function getAllByUser(Request $request)
  {
    return OhakoSetlist::with('problems')
      ->where('user_id', $request->userId)
      ->latest()
      ->orderBy('sing_date', 'desc')
      ->get();
  }
  
  public function delete(Request $request)
  {
    $targetRecord = OhakoSetlist::find($request->id);
    $targetRecord->delete();
    return $targetRecord->id;
  }
}