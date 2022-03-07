<?php
declare(strict_types=1);

namespace App\Domain\User\Service;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Domain\User\Entity\UserEntity;

class UserRegistUsecase
{
  protected $User;
  protected $LoginUsecase;
  
  public function __construct(UserEntity $UserEntity, UserLoginUsecase $UserLoginUsecase)
  {
    $this->User = $UserEntity;
    $this->LoginUsecase = $UserLoginUsecase;
  }
  
  public function regist(Request $request)
  {
    if (Auth::attempt($request->all())) {
      return false;
    }
    
    $this->User->create($request);
    return $this->LoginUsecase->login($request);
  }
}