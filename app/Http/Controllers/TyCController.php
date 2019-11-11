<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TyCController extends Controller
{
    public function TyC()
    {
        return Inertia::render('TermsConditions');
    }
}
