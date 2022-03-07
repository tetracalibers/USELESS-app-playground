<?php
declare(strict_types=1);

namespace App\Http\Actions\Ohako;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Domain\Ohako\Service\SetlistInitUsecase as Usecase;
use App\Http\Responders\Ohako\SetlistInitResponder as Responder;

class SetlistInitAction extends Controller
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
      $this->Usecase->init($request)
    );
  }
}