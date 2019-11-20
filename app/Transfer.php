<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transfer extends Model
{
  protected $fillable = [
    'description','amount','wallet_id'
  ];
  function wallet(){
    return $this->belongsTo('App\Wallet');
  }

}
