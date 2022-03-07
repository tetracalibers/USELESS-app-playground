<?php
declare(strict_types=1);

namespace App\Http\Actions\Tpusg;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Domain\Tpusg\Song as Domain;
use App\Http\Responders\Tpusg\SongIndexResponder as Responder;

class SongIndexAction extends Controller
{
    protected $Domain;
    protected $Responder;

    public function __construct(Domain $Domain, Responder $Responder)
    {
        $this->Domain = $Domain;
        $this->Responder = $Responder;
    }

    public function __invoke(Request $request)
    {
        return $this->Responder->response(
            $this->Domain->getAll()
        );
    }
}
