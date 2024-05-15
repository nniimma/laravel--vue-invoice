<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    public function get_all_invoice()
    {
        $invoices = Invoice::with('customer')->orderBy('id', 'ASC')->get();
        return response()->json([
            'invoices' => $invoices
        ], 200);
    }

    public function search_invoice(Request $request)
    {
        $search = $request->get('s');
        if ($search != null) {
            // search with id:
            // todo: $invoices = Invoice::with('customer')->where('id', 'LIKE', "%$search%")->get();

            // ! search with name
            $invoices = Invoice::with('customer')
                ->whereHas('customer', function ($query) use ($search) {
                    $query->where('firstname', 'like', '%' . $search . '%');
                })
                ->get();

            return response()->json([
                'invoices' => $invoices
            ], 200);
        } else {
            return $this->get_all_invoice();
        }
    }
}
