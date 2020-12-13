<?php

namespace App\Http\Controllers;

use App\Suggestion;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Laravelista\Comments\Comment;

class SuggestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $suggestions = Suggestion::query()
            ->search(request('name'))
            ->date(request('date'))
            ->status(request('status'))
//            ->currentStatus(request('status'))
            ->solver(request('solver'))
            ->paginate();
        return Inertia::render('Admin/Suggestions', compact('suggestions'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Suggestion');
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
        $suggestion = Suggestion::make($data);
//        $suggestion->setStatus('created');
        $suggestion->status = 'created';

        $suggestion->save();
        return back()->with('success_message', 'Su comentario ha sido registrado con éxito');
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
    public function update(Request $request, Suggestion $suggestion)
    {
        $data = $request->validate([
            'comment' => 'required',
            'status' => 'in:viewed,solved,not-solved'
        ]);
        $comment = new Comment;
        $comment->commenter()->associate(auth()->user());
        $comment->commentable()->associate($suggestion);
        $comment->comment = $data['comment'];
        $comment->approved = true;
        $comment->save();

        $suggestion->status  = $data['status'];
        $suggestion->save();

//        return back()->with()

        $suggestions = Suggestion::query()
            ->search(request('name'))
            ->date(request('date'))
            ->status(request('status'))
//            ->currentStatus(request('status'))
            ->solver(request('solver'))
            ->paginate();
//        dd($suggestions->toArray());
        return Inertia::render('Admin/Suggestions', compact('suggestions'));
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
            'status' => 'in:viewed,solved,not-solved',
        ]);
        $suggestion->update(['status' => $data['status']]);
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
