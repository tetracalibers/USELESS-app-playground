<?php
declare(strict_types=1);

namespace App\Domain\Tpusg\Service;

use App\Domain\Tpusg\Entity\SongEntity;

class SonglistInitUsecase
{
  protected $song;
  
  public function __construct(SongEntity $song)
  {
    $this->song = $song;
  }
  
  public function init()
  {
    return $this->song->getAll();
  }
}