<?php
declare(strict_types=1);

namespace App\Http\Responders\Ohako;

class SetlistInitResponder
{
  public function response($model)
  {
    if (!$model) {
      $result = ['status' => false, 'message' => 'データ取得に失敗しました。'];
    } else {
      $array = $model->toArray();
      $result = ['status' => true, 'setlist' => $array];
    }
    
    return response()->json($result);
  }
}