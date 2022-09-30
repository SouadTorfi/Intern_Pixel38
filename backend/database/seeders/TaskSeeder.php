<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tasks')->insert([
            'title' => 'data page',
            'in_progress' => '0',
            'user_id' => 1,

        ]);
        DB::table('tasks')->insert([
            'title' => 'home page',
            'in_progress' => '1',
            'user_id' => 1,

        ]);
        DB::table('tasks')->insert([
            'title' => 'dashboard page',
            'in_progress' => '0',
            'user_id' => 1,

        ]);
    }
}
