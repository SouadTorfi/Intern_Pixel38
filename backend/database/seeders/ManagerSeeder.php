<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ManagerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('managers')->insert([
            'first_name' => 'ali',
            'last_name' => 'manager',
            'email' => 'manager@gmail.com',
            'password' => Hash::make('123456'),
        ]);
    }
}
