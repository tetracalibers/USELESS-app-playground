<?php
declare(strict_types=1);

namespace App\Http\Responders\User;

use Illuminate\Http\Response;

class UserLoginResponder
{
  protected $response;
  
  public function __construct(Response $response)
  {
    $this->response = $response;
  }
  
  public function response($model)
  {
    if (!$model) {
      $result = ['status' => false, 'message' => config('userException.notFound')];
    } else {
      $array = $model->toArray();
      if (count($array) === 0) {
        $result = ['status' => false, 'message' => config('userException.failure')];
      } else {
        $result = ['status' => true, 'userInfo' => $array];
      }
    }
    
    return response()->json($result);
  }
}