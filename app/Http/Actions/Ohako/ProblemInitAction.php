<?php
declare(strict_types=1);

namespace App\Http\Actions\Ohako;

use App\Http\Controllers\Controller;
use App\Domain\Ohako\Service\ProblemInitUsecase as Usecase;
use App\Http\Responders\Ohako\ProblemInitResponder as Responder;

class ProblemInitAction extends Controller
{
  protected $Usecase;
  protected $Responder;
  
  public function __construct(Usecase $usecase, Responder $responder)
  {
    $this->Usecase = $usecase;
    $this->Responder = $responder;
  }
  
  public function __invoke()
  {
    return $this->Responder->response(
      $this->Usecase->init()
    );
  }
}