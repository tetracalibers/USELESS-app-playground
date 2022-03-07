<?php
declare(strict_types=1);

namespace App\Http\Actions\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Domain\User\Service\UserGateCheckUsecase as UseCase;
use App\Http\Responders\User\UserGateCheckResponder as Responder;

class UserGateCheckAction extends Controller 
{
  protected $Usecase;
  protected $Responder;
  
  public function __construct(Usecase $Usecase, Responder $Responder)
  {
    $this->Responder = $Responder;
    $this->Usecase = $Usecase;
  }
  
  public function __invoke(Request $request)
  {
    return $this->Responder->response(
      $this->Usecase->gateCheck($request)
    );
  }
}