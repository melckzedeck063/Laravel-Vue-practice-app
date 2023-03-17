<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use Illuminate\Http\Request;

use function GuzzleHttp\Promise\all;

class IndexController extends Controller
{
    public function index() 
    {
        // dd(Listing::where('beds','>=',4)->orderBy('price', 'asc')->first());
        // dd(Listing::create([
        //     'beds'=> 3, 'baths'=> 2, 'area' => 200, 'city' => 'Dodoma', 'code'=> 'DM-2312', 'street' => 'chamwino', 'street_no'=> 12, 'price' => 200_000
        // ]));
        dd(Listing::all());
        return inertia(
            'Index/Index',
            [
                'message' => 'Hello Laravel developer'
            ]
        );
    }

    public function show() 
    {
        return inertia('Index/Show');
    }
}
