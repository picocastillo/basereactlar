<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transfer;
use App\Wallet;
class TransferController extends Controller
{
    function store(Request $request){

      $wallet  = Wallet::find($request->wallet_id);
      $wallet->money +=  $request->amount;
      $wallet->update();
      $transfer = Transfer::create([
        'description' => $request->description,
        'amount' => $request->amount,
        'wallet_id' => $request->wallet_id,
      ]);
      return response()->json((object)array_merge($transfer->toArray(),['money' => $wallet->money]),201);
    }
}
