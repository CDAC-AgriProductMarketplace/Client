import {
  UserIcon,
  CreditCardIcon,
  TruckIcon,
  TagIcon,
} from "@heroicons/react/24/outline";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-3 md:grid-cols-3 gap-3">

        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-6">

          {/* Checkout */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Checkout</h2>
            <p className="text-gray-500 text-sm mb-6">
              Provide delivery details and payment to complete your order.
            </p>

            {/* Shipping Address */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <UserIcon className="h-5 w-5 text-gray-500" />
                Shipping Address
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                <Input label="First Name" placeholder="John" />
                <Input label="Last Name" placeholder="Doe" />
              </div>

              <Input label="Address Line" placeholder="112 Farmstead Rd" />

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Input label="City" placeholder="Springfield" />
                <Input label="Postal Code" placeholder="12345" />
                <Input label="State/Province" placeholder="CA" />
                 <Input label="Country" placeholder="United States" />
              </div>

             

              <label className="flex items-center gap-2 cursor-pointer mt-2">
                <input type="checkbox" className="h-4 w-4" />
                <span className="text-sm text-gray-700">Use as billing address</span>
              </label>
            </div>
          </div>

          {/* Payment */}
          <div className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <CreditCardIcon className="h-5 w-5 text-gray-500" />
              Payment
            </h3>

        

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                  <Input label="Cardholder Name" placeholder="John Doe" />
              <Input label="Card Number" placeholder="4242 4242 4242 4242" />
            
            </div>
              <Input label="Expiry / CVC"  placeholder="12/28 · 123" />
                <label className="flex items-center gap-2 cursor-pointer mt-2">
                <input type="checkbox" className="h-4 w-4" />
                <span className="text-sm text-gray-700">Save for future purchases</span>
              </label>
          </div>

          {/* Delivery Options */}
          <div className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <TruckIcon className="h-5 w-5 text-gray-500" />
              Delivery Options
            </h3>

            <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <div className="flex items-center gap-2">
                <input type="radio" name="delivery" defaultChecked />
                <span>Standard (3–5 days)</span>
              </div>
              <span>$6.00</span>
            </label>

            <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <div className="flex items-center gap-2">
                <input type="radio" name="delivery" />
                <span>Express (1–2 days)</span>
              </div>
              <span>$14.00</span>
            </label>
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg">
            Pay Now
          </button>

          <div className="flex items-center gap-2 text-sm text-gray-600 justify-center">
            <span className="h-2 w-2 bg-green-500 rounded-full"></span>
            Transactions are secured & encrypted end-to-end.
          </div>
        </div>

        {/* RIGHT SIDE – Order Summary */}
        <div className="bg-white p-6 rounded-xl shadow-sm border h-fit space-y-4">
          <h2 className="text-lg font-semibold">Order Summary</h2>

          {/* Items */}
          <OrderItem
            title="Compact Tractor Oil (5L)"
            qty="Qty 1"
            price="$38.00"
            img="https://images.pexels.com/photos/210014/pexels-photo-210014.jpeg"
          />

          <OrderItem
            title="Organic NPK Fertilizer (25kg)"
            qty="Qty 1"
            price="$24.00"
            img="https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg"
          />

          {/* Price Summary */}
          <div className="border-t pt-4 space-y-2 text-sm">
            <Row label="Items (2)" value="$62.00" />
            <Row label="Delivery" value="$6.00" />
            <Row label="Taxes" value="$5.16" />

            <div className="pt-2 border-t flex justify-between font-semibold">
              <span>Total</span>
              <span>$73.16</span>
            </div>
          </div>

          {/* Promo Code */}
          <button className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 py-2 rounded-lg text-sm">
            <TagIcon className="h-4 w-4" />
            Add promo code
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function Input({ label, placeholder }) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-gray-700">{label}</label>
      <input
        className="w-full border rounded-lg p-2 focus:outline-green-500"
        placeholder={placeholder}
      />
    </div>
  );
}

function OrderItem({ title, qty, price, img }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3">
        <img
          src={img}
          className="h-12 w-12 rounded-lg object-cover"
          alt={title}
        />
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs text-gray-500">{qty}</p>
        </div>
      </div>
      <span>{price}</span>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between text-gray-700">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
