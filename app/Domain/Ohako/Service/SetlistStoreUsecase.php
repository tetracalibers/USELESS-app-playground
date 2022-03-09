<?php
declare(strict_types=1);

namespace App\Domain\Ohako\Service;

use Illuminate\Http\Request;
use App\Domain\Ohako\Entity\SetlistEntity;

class SetlistStoreUsecase
{
  protected $setlist;
  
  public function __construct(SetlistEntity $setlist)
  {
    $this->setlist = $setlist;
  }
  
  public function store(Request $request)
  {
    $newRecord = $this->setlist->create($request);
    return [
      'created_at' => $newRecord->created_at,
      'id' => $newRecord->id
    ];
  }
}