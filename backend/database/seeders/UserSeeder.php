<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;



class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'first_name' => 'admin',
            'last_name' => 'ali',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('123456'),

        ])->assignRole('admin');

        $user = User::create([
            'first_name' => 'user',
            'last_name' => 'ahmad',
            'email' => 'user@gmail.com',
            'password' => Hash::make('123456'),

        ])->assignRole('user');

        $user = User::create([
            'first_name' => 'manager',
            'last_name' => 'jad',
            'email' => 'manager@gmail.com',
            'password' => Hash::make('123456'),

        ])->assignRole('manager');
    }
}
