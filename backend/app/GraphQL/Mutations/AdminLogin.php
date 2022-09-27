<?php

namespace App\GraphQL\Mutations;

use App\Models\Admin;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

final class AdminLogin
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        $admin = Admin::where('email', $args["email"])->first();

        if (!$admin || !Hash::check($args["password"], $admin->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        return $admin->createToken($args["email"])->plainTextToken;
    }
}
