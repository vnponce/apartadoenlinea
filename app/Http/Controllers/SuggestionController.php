<?php

namespace App\Http\Controllers;

use App\Suggestion;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SuggestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $suggestions = Suggestion::all();
        return Inertia::render('Admin/Suggestions', compact('suggestions'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'suggestion' => 'required',
        ]);
        $suggestion = Suggestion::create($data);
        $suggestion->setStatus('created');

        $suggestion->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Suggestion  $suggestions
     * @return \Illuminate\Http\Response
     */
    public function show(Suggestion $suggestions)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Suggestion  $suggestions
     * @return \Illuminate\Http\Response
     */
    public function edit(Suggestion $suggestions)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Suggestion  $suggestions
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Suggestion $suggestions)
    {
        //
    }

    /**
     * Update Status the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Suggestion  $suggestions
     * @return \Illuminate\Http\Response
     */
    public function updateStatus(Request $request, Suggestion $suggestion)
    {
        $data = $request->validate([
            'status' => 'in:viewed,solved',
        ]);
        $suggestion->setStatus($data['status']);
        $suggestion->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Suggestion  $suggestions
     * @return \Illuminate\Http\Response
     */
    public function destroy(Suggestion $suggestions)
    {
        //
    }
}
