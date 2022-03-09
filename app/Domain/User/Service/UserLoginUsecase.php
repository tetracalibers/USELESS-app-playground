<?php
declare(strict_types=1);

namespace App\Domain\User\Service;

use App\Domain\User\Entity\UserEntity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserLoginUsecase
{
  protected $User;
  
  public function __construct(UserEntity $UserEntity)
  {
    $this->User = $UserEntity;
  }
  
  public function login(Request $request)
  {
    if (Auth::attempt($request->all())) {
      $request->session()->regenerate();
      return Auth::user();
    }
    
    return false;
  }
}