<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('projects')->insert([
            'title' => 'project 1',
            'description' => 'header,footer',
            'user_id' => 1,
            'manager_id' => 1,


        ]);
    }
}
