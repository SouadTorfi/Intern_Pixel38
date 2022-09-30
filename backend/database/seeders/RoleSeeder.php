<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;



class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $role1 = Role::create(['name' => 'admin']);
        $role2 = Role::create(['name' => 'manager']);
        $role3 = Role::create(['name' => 'user']);

        $permission = Permission::create(['name' => 'crud user']);
        $permission->assignRole($role1);
    }
}
