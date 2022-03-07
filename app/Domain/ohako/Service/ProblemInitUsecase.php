<?php
declare(strict_types=1);

namespace App\Domain\Ohako\Service;

use App\Domain\Ohako\Entity\ProblemEntity;

class ProblemInitUsecase
{
  protected $problem;
  
  public function __construct(ProblemEntity $problem)
  {
    $this->problem = $problem;
  }
  
  public function init()
  {
    return $this->problem->getAll();
  }
}