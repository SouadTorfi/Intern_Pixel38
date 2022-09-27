<?php

namespace App\GraphQL\Mutations;

use App\Models\Manager;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

final class ManagerLogin
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        $manager = Manager::where('email', $args["email"])->first();

        if (!$manager || !Hash::check($args["password"], $manager->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        return $manager->createToken($args["email"])->plainTextToken;
    }
}
