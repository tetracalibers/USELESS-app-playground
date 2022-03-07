<?php
declare(strict_types=1);

namespace App\Domain\User\Service;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Domain\User\Entity\UserEntity;

class UserGateCheckUsecase
{
  protected $user;
  
  public function __construct(UserEntity $userEntity)
  {
    $this->user = $userEntity;
  }
  
  public function gateCheck(Request $request)
  {
    if ($request->get('id') == Auth::id()) {
      return Auth::user();
    }
    
    return false;
  }
}