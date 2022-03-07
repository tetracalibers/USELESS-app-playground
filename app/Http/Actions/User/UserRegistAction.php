<?php
declare(strict_types=1);

namespace App\Http\Actions\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Domain\User\Service\UserRegistUsecase as Usecase;
use App\Http\Responders\User\UserRegistResponder as Responder;

class UserRegistAction extends Controller 
{
  protected $Usecase;
  protected $Responder;
  
  public function __construct(Usecase $Usecase, Responder $Responder)
  {
    $this->Usecase = $Usecase;
    $this->Responder = $Responder;
  }
  
  public function __invoke(Request $request)
  {
    return $this->Responder->response(
      $this->Usecase-> regist($request)
    );
  }
}