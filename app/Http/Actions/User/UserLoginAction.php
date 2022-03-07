<?php
declare(strict_types=1);

namespace App\Http\Actions\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Domain\User\Service\UserLoginUsecase as Usecase;
use App\Http\Responders\User\UserLoginResponder as Responder;

class UserLoginAction extends Controller
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
      $this->Usecase->login($request)
    );
  }
}