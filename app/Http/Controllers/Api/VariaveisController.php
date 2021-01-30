<?php

namespace App\Http\Controllers\Api;

use App\Models\Variaveis;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class VariaveisController extends Controller
{

    private $variaveis;

    public function __construct()
    {
        $this->variaveis = new Variaveis();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all = $this->variaveis->get();

        return response()->json($all);
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Variaveis  $variaveis
     * @return \Illuminate\Http\Response
     */
    public function show(Variaveis $variaveis)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Variaveis  $variaveis
     * @return \Illuminate\Http\Response
     */
    public function edit(Variaveis $variaveis)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Variaveis  $variaveis
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Variaveis $variaveis)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Variaveis  $variaveis
     * @return \Illuminate\Http\Response
     */
    public function destroy(Variaveis $variaveis)
    {
        //
    }
}
