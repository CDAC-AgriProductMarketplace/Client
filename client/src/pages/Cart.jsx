import React from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* LEFT SIDE — CART ITEMS */}
        <div className="md:col-span-2 space-y-6">

          <h2 className="text-2xl font-semibold">Your Cart</h2>

          {/* ---------- CART ITEM 1 ---------- */}
          <div className="bg-white p-4 rounded-xl shadow flex gap-4">
            <img
              src="https://via.placeholder.com/100"
              className="w-28 h-24 rounded-lg object-cover"
              alt="product"
            />

            <div className="flex-1">
              <h3 className="font-semibold">Compact Tractor Oil (5L)</h3>
              <p className="text-xs text-gray-500">
                Ships in 2–3 days • Sold by FieldPro Supplies
              </p>

              <div className="mt-3 flex items-center gap-3">
                <button className="px-3 py-1 text-sm border rounded-md">Qty: 1</button>
                <button className="text-red-500 text-sm hover:underline">
                  Remove
                </button>
              </div>
            </div>

            <p className="font-semibold">Rs. 38.00</p>
          </div>

          {/* ---------- CART ITEM 2 ---------- */}
          <div className="bg-white p-4 rounded-xl shadow flex gap-4">
            <img
              src="https://via.placeholder.com/100"
              className="w-28 h-24 rounded-lg object-cover"
              alt="product"
            />

            <div className="flex-1">
              <h3 className="font-semibold">Organic NPK Fertilizer (25kg)</h3>
              <p className="text-xs text-gray-500">
                In stock • Sold by GreenHarvest
              </p>

              <div className="mt-3 flex items-center gap-3">
                <button className="px-3 py-1 text-sm border rounded-md">Qty: 1</button>
                <button className="text-red-500 text-sm hover:underline">
                  Remove
                </button>
              </div>
            </div>

            <p className="font-semibold">Rs. 24.00</p>
          </div>

          {/* ---------- BUTTONS ---------- */}
          <div className="flex gap-4 mt-4">
            <button onClick={()=>navigate('/')} className="border px-4 py-2 rounded-md">
              ← Continue Shopping
            </button>

            <div className="flex gap-2">
              <input
                placeholder="Promo code"
                className="border px-3 py-2 rounded-md"
              />
              <button className="bg-green-600 text-white px-4 py-2 rounded-md">
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — ORDER SUMMARY */}
        <div className="bg-white p-6 rounded-xl shadow h-fit">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Items (2)</span>
              <span>$62.00</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <span>Rs. 6.00</span>
            </div>

            <div className="flex justify-between">
              <span>Taxes</span>
              <span>Rs. 5.16</span>
            </div>

            <hr className="my-3" />

            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>Rs. 73.16</span>
            </div>
          </div>

          <button onClick={()=>navigate('/checkout')} className="w-full bg-primary text-white py-3 mt-5 rounded-md">
            Proceed to Checkout
          </button>

          <div className="mt-3 text-xs text-yellow-700 bg-yellow-200 p-3 rounded-md">
            🔒 Secure checkout • Your payment details are encrypted.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
