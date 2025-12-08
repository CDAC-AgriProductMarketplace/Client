import { useState } from "react";
import {
  UserIcon,
  CreditCardIcon,
  TruckIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    state: "",
    country: "",
    cardName: "",
    cardNumber: "",
    expiryCVC: "",
    useAsBilling: false,
    saveCard: false,
    delivery: "standard",
  });
  const navigate = useNavigate();



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Checkout Data:", formData);
    alert("Payment submitted successfully ✅");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-3 gap-3">
        
        {/* LEFT SIDE */}
        <form onSubmit={handleSubmit} className="col-span-2 space-y-6">

          {/* Checkout */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Checkout</h2>
            <p className="text-gray-500 text-sm mb-6">
              Provide delivery details and payment to complete your order.
            </p>

            {/* Shipping */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <UserIcon className="h-5 w-5 text-gray-500" />
                Shipping Address
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <Input label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
                <Input label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
              </div>

              <Input label="Address Line" name="address" value={formData.address} onChange={handleChange} />

              <div className="grid grid-cols-2 gap-4">
                <Input label="City" name="city" value={formData.city} onChange={handleChange} />
                <Input label="Postal Code" name="postalCode" value={formData.postalCode} onChange={handleChange} />
                <Input label="State/Province" name="state" value={formData.state} onChange={handleChange} />
                <Input label="Country" name="country" value={formData.country} onChange={handleChange} />
              </div>

              <label className="flex items-center gap-2 mt-2">
                <input type="checkbox" name="useAsBilling" checked={formData.useAsBilling} onChange={handleChange} />
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

            <div className="grid grid-cols-2 gap-4">
              <Input label="Cardholder Name" name="cardName" value={formData.cardName} onChange={handleChange} />
              <Input label="Card Number" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
            </div>

            <Input label="Expiry / CVC" name="expiryCVC" value={formData.expiryCVC} onChange={handleChange} />

            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" name="saveCard" checked={formData.saveCard} onChange={handleChange} />
              <span className="text-sm text-gray-700">Save for future purchases</span>
            </label>
          </div>

          {/* Delivery */}
          <div className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <TruckIcon className="h-5 w-5 text-gray-500" />
              Delivery Options
            </h3>

            <label className="flex justify-between p-3 border rounded-lg cursor-pointer">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="delivery"
                  value="standard"
                  checked={formData.delivery === "standard"}
                  onChange={handleChange}
                />
                <span>Standard (3–5 days)</span>
              </div>
              <span>$6.00</span>
            </label>

            <label className="flex justify-between p-3 border rounded-lg cursor-pointer">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="delivery"
                  value="express"
                  checked={formData.delivery === "express"}
                  onChange={handleChange}
                />
                <span>Express (1–2 days)</span>
              </div>
              <span>$14.00</span>
            </label>
          </div>

          <button type="submit"  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg">
            Pay Now
          </button>
        </form>

        {/* RIGHT SIDE */}
        <div className="bg-white p-6 rounded-xl shadow-sm border h-fit space-y-4">
          <h2 className="text-lg font-semibold">Order Summary</h2>

          <OrderItem title="Compact Tractor Oil (5L)" qty="Qty 1" price="$38.00" />
          <OrderItem title="Organic NPK Fertilizer (25kg)" qty="Qty 1" price="$24.00" />

          <div className="border-t pt-4 space-y-2 text-sm">
            <Row label="Items (2)" value="$62.00" />
            <Row label="Delivery" value="$6.00" />
            <Row label="Taxes" value="$5.16" />
            <div className="pt-2 border-t flex justify-between font-semibold">
              <span>Total</span>
              <span>$73.16</span>
            </div>
          </div>

          <button className="w-full flex justify-center gap-2 bg-gray-100 py-2 rounded-lg text-sm">
            <TagIcon className="h-4 w-4" />
            Add promo code
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function Input({ label, name, value, onChange }) {
  return (
    <div>
      <label className="text-sm text-gray-700">{label}</label>
      <input
        className="w-full border rounded-lg p-2"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function OrderItem({ title, qty, price }) {
  return (
    <div className="flex justify-between text-sm">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-gray-500">{qty}</p>
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
