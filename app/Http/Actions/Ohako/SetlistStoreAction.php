<?php
declare(strict_types=1);

namespace App\Http\Actions\Ohako;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Domain\Ohako\Service\SetlistStoreUsecase as Usecase;
use App\Http\Responders\Ohako\SetlistStoreResponder as Responder;

class SetlistStoreAction extends Controller
{
  protected $Usecase;
  protected $Responder;
  
  public function __construct(Usecase $usecase, Responder $responder)
  {
    $this->Responder = $responder;
    $this->Usecase = $usecase;
  }
  
  public function __invoke(Request $request)
  {
    return $this->Responder->response(
      $this->Usecase->store($request)
    );
  }
}