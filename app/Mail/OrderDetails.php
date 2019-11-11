<?php

namespace App\Mail;

use App\Order;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class OrderDetails extends Mailable
{
    use Queueable, SerializesModels;

    public $order;

    /**
     * Create a new message instance.
     *
     * @param Order $order
     */
    public function __construct(Order $order)
    {
        $this->order = $order;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        Carbon::setLocale('es');
        $store = $this->order->store->name;
        $date = $this->order->date->format('l d, F Y');
        // return $this->markdown('email.order-details', compact('store', 'date'));
        return $this->markdown('email.order-details-custom', compact('store', 'date'));
    }
}
