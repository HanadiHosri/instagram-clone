<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Models\User;
use Illuminate\Support\Facades\Log;


class ProfileController extends Controller
{
    public function getProfile() {
        try {
            $user = Auth::user();

            return response()->json([
                'status' => 'success',
                'data' => $user,
            ]);
        } catch (\Exception $e) {
            dd($e->getMessage());
            return response()->json([
                'status' => 'error',
            ], 500);
        }
    }

    public function updateProfile($id, Request $request) {
        $request->validate([
            'bio' => 'nullable|string|max:255',
            'profile_pic' => 'nullable|image|max:2048',
            'gender'=> 'nullable|string|in:male,female,other',
        ]);

        $user = User::findOrFail($id);

        if ($request->has('bio')) {
            $user->bio = $request->bio;
        }

        if ($request->hasFile('profile_pic')) {
            $path = $request->file('profile_pic')->store('profile_pictures', 'public');

            if($user->profile_pic) {
                Storage::disk('public')->delete($user->profile_pic);
            }

            $user->profile_pic = $path;

        }

        if ($request->has('gender')) {
            $user->gender = $request->gender;
        }

        $user->save();

        return response()->json([
            'status' => 'success',
            'data' => $user,
        ]);
    }
}
