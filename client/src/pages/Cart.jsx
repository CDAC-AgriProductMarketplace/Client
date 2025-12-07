export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-2 md:grid-cols-[2fr_1fr] gap-6">

        {/* LEFT SIDE – CART */}
        <div className="bg-white w-full h-fit p-6 rounded-xl border space-y-2">
          <h2 className="text-lg font-semibold">Your Cart</h2>

          <CartItem
            title="Compact Tractor Oil (5L)"
            seller="Sold by FieldPro Supplies"
            price="$38.00"
            img="https://images.pexels.com/photos/210014/pexels-photo-210014.jpeg"
          />

          <CartItem
            title="Organic NPK Fertilizer (25kg)"
            seller="Sold by GreenHarvest"
            price="$24.00"
            img="https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg"
          />

          {/* Bottom actions */}
          <div className="flex flex-col-2 md:flex-row items-center gap-3 pt-4 border-t">
           <button className="
  inline-flex
  text-sm font-medium text-green-700
  bg-green-50
  px-4 py-2
  rounded-lg
  border border-green-100
  hover:bg-green-100
  transition
">
  ← Continue shopping
</button>


            <div className="flex ml-auto gap-2 w-full md:w-auto">
              <input
                className="border rounded-lg px-3 py-2 text-sm w-full md:w-48 focus:outline-green-500"
                placeholder="Promo code"
              />
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – ORDER SUMMARY */}
        <div className="bg-white w-full p-6 rounded-xl border h-fit space-y-4">
          <h2 className="text-lg font-semibold">Order Summary</h2>

          <SummaryRow label="Items (2)" value="$62.00" />
          <SummaryRow label="Delivery" value="$6.00" />
          <SummaryRow label="Taxes" value="$5.16" />

          <div className="border-t pt-3 flex justify-between font-semibold">
            <span>Total</span>
            <span>$73.16</span>
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium">
            Proceed to Checkout
          </button>

          <div className="bg-yellow-100 text-yellow-800 text-sm p-3 rounded-lg">
            🔒 Secure checkout — Your payment details are encrypted.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function CartItem({ title, seller, price, img }) {
  return (
    <div className="flex justify-between items-center border rounded-xl p-4">
      <div className="flex gap-4">
        <img
          src={img}
          alt={title}
          className="h-14 w-14 rounded-lg object-cover"
        />
        <div>
          <p className="font-medium text-sm">{title}</p>
          <p className="text-xs text-gray-500">{seller}</p>
          <div className="flex items-center gap-2 mt-2">
          <button className="
  inline-flex gap-1
  text-sm font-medium text-green-700
  bg-green-50
  px-4 py-2
  rounded-lg
  border border-green-100
  hover:bg-green-100
  transition
"> Qty: 1</button>
          <button className="
  inline-flex gap-1
  text-sm font-medium text-green-700
  bg-green-50
  px-4 py-2
  rounded-md
  border border-green-100
  hover:bg-green-100
  transition
">Remove</button>
 </div>
        </div>
      </div>
      <span className="font-medium">{price}</span>
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex justify-between text-sm text-gray-600">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
