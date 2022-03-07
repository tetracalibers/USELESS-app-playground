<?php
declare(strict_types=1);

namespace App\Http\Responders\Ohako;

class SetlistDestroyResponder
{
  public function response($id)
  {
    if (!$id) {
      $result = ['status' => false];
    } else {
      $result = ['status' => true, 'id' => $id];
    }
    
    return response()->json($result);
  }
}