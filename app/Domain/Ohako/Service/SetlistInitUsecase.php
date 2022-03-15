<?php
declare(strict_types=1);

namespace App\Domain\Ohako\Service;

use Illuminate\Http\Request;
use App\Domain\Ohako\Entity\SetlistEntity;

class SetlistInitUsecase
{
  protected $setlist;
  
  public function __construct(SetlistEntity $setlist)
  {
    $this->setlist = $setlist;
  }
  
  public function init(Request $request)
  {
    return $this->setlist->getInitialSelect($request);
  }
}