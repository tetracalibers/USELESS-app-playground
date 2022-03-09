<?php
declare(strict_types=1);

namespace App\Domain\Ohako\Entity;

use App\Models\OhakoProblem;

class ProblemEntity
{
  public function getAll()
  {
    return OhakoProblem::get();
  }
}