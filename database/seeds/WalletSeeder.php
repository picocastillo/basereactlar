<?php

use Illuminate\Database\Seeder;
use \App\Wallet;
use \App\Transfer;
class WalletSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $w = factory(Wallet::class)->create();
        factory(Transfer::class,5)->create([
          'wallet_id' => $w->id
        ]);
    }
}
