<?php
declare(strict_types=1);

namespace App\Http\Responders\Ohako;

class SetlistStoreResponder
{
  public function response($dataArray)
  {
    if (count($dataArray) === 0) {
      $result = ['status' => false, 'message' => 'データ保存時にエラーが発生しました。'];
    } else {
      $result = ['status' => true, 'created_at' => $dataArray['created_at'], 'id' => $dataArray['id']];
    }
    
    return response()->json($result);
  }
}