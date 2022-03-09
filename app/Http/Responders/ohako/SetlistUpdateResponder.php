<?php
declare(strict_types=1);
// ディレクトリ名変更反映用のコメントです

namespace App\Http\Responders\Ohako;

class SetlistUpdateResponder
{
  public function response($dataArray)
  {
    if (count($dataArray) === 0) {
      $result = ['status' => false, 'message' => 'データ更新時にエラーが発生しました。'];
    } else {
      $result = ['status' => true, 'created_at' => $dataArray['created_at'], 'id' => $dataArray['id']];
    }
    
    return response()->json($result);
  }
}