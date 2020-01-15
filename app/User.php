<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'avatar', 'role',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $appends = ['avatar_path', 'isGod', 'isAdmin', 'isManager'];

    protected $with = ['stores'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getIsAdminAttribute()
    {
        return ($this->isGod || $this->role === 'admin');
    }

    public function getIsGodAttribute()
    {
        return $this->role === 'god';
    }

    public function getIsManagerAttribute()
    {
        return $this->role === 'manager';
    }

    public function getAvatarPathAttribute()
    {
        return env('APP_URL').'/'.Str::replaceFirst('public/', '', $this->avatar);
    }

    public function stores()
    {
        return $this->belongsToMany(Store::class);
    }
}
