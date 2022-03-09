<?php

declare(strict_types=1);

namespace App\Http\Responders\Tpusg;

use Illuminate\Http\Response;

class SonglistInitResponder
{
    protected $response;

    public function __construct(Response $response)
    {
        $this->response = $response;
    }

    public function response($data)
    {
        $data = ['status' => 'true', 'songList' => $data];
        return response()->json($data);
    }
}
