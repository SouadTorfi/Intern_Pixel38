<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    { {
            DB::table('users')->insert([
                'first_name' => 'user',
                'last_name' => 'ali',
                'email' => 'user@gmail.com',
                'password' => Hash::make('123456'),
                'kpi_id' => 1,
            ]);
        }
    }
}
