<?php
declare(strict_types=1);

namespace App\Domain\User\Entity;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserEntity
{
  public function getById($id) 
  {
    return User::find($id);
  }
  
  public function create(Request $request)
  {
    User::create([
      'name' => $request->name,
      'password' => Hash::make($request->password),
    ]);
  }
}