<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Wallet;
class WalletController extends Controller
{
    function index(){
      $wallet = Wallet::firstOrFail();
      return response()->json($wallet->load('transfers'),200);
    }
}
