<?php
declare(strict_types=1);
// ディレクトリ名変更反映用のコメントです

namespace App\Domain\Ohako\Service;

use Illuminate\Http\Request;
use App\Domain\Ohako\Entity\SetlistEntity;

class SetlistUpdateUsecase
{
  protected $setlist;
  
  public function __construct(SetlistEntity $setlist)
  {
    $this->setlist = $setlist;
  }
  
  public function update(Request $request)
  {
    $newRecord = $this->setlist->update($request);
    return [
      'created_at' => $newRecord->created_at,
      'id' => $newRecord->id
    ];
  }
}