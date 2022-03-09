<?php
declare(strict_types=1);

namespace App\Domain\Tpusg\Entity;

use App\Models\USGsong;

class SongEntity
{
    public function getAll()
    {
        $songs = USGsong::select([
            'kind.name AS category',
            'cd.name AS cd',
            'song.name AS song',
            'song.slug AS slug'
        ])
        ->from('usg_songs AS song')
        ->join('usg_cds AS cd', function($join) {
            $join->on('song.cd_id', '=', 'cd.id');
        })
        ->join('cd_kinds AS kind', function($join) {
            $join->on('cd.kind_id', '=', 'kind.id');
        })
        ->orderBy('kind.id')
        ->orderBy('cd.release_date')
        ->orderBy('song.position_in_cd')
        ->get();

        return $songs;
    }
}
