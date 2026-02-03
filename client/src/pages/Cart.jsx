import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { loadCart, removeFromCart, updateQuantity } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const deliveryFee = 6.0;
  const taxRate = 0.085;

  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  const handleQuantityChange = (productId, change) => {
    dispatch(updateQuantity({ productId, change }));
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const calculateTotals = () => {
    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const taxAmount = subtotal * taxRate;
    const total = subtotal + deliveryFee + taxAmount - discount;

    return {
      subtotal,
      taxAmount,
      total: Math.max(0, total),
      itemCount: cartItems.length,
    };
  };

  const totals = calculateTotals();

  const applyPromoCode = (e) => {
    e.preventDefault();

    if (promoCode.toUpperCase() === "SAVE10") {
      setDiscount(10.0);
      alert("Promo code SAVE10 applied! You saved Rs. 10.00.");
    } else {
      setDiscount(0);
      alert("Invalid or expired promo code.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LEFT: CART ITEMS */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold">
            Your Cart ({totals.itemCount} items)
          </h2>

          {cartItems.length === 0 ? (
            <p className="text-lg text-gray-500 p-8 bg-white rounded-xl shadow">
              Your cart is empty. Start shopping!
            </p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl shadow flex gap-4 hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-24 rounded-lg object-cover border"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-xs text-gray-500">
                    {item.stockStatus} • Sold by {item.seller}
                  </p>

                  <div className="mt-3 flex items-center gap-4">
                    <div className="flex items-center border rounded-md divide-x">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        disabled={item.quantity <= 1}
                        className="p-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                      >
                        <FaMinus size={10} />
                      </button>

                      <span className="px-4 py-1 text-sm font-medium">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="p-2 text-gray-600 hover:bg-gray-100"
                      >
                        <FaPlus size={10} />
                      </button>
                    </div>

                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 text-sm hover:text-red-700 flex items-center gap-1"
                    >
                      <FaTrash size={12} />
                      Remove
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <p className="font-bold text-lg">
                    {item.currency} {(item.price * item.quantity).toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">
                    ({item.currency} {item.price.toFixed(2)}/unit)
                  </p>
                </div>
              </div>
            ))
          )}

          <div className="flex flex-wrap gap-4 pt-4 border-t">
            <button
              onClick={() => navigate("/")}
              className="border px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              ← Continue Shopping
            </button>

            <form onSubmit={applyPromoCode} className="flex gap-2">
              <input
                type="text"
                placeholder="Promo code (SAVE10)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="border px-3 py-2 rounded-lg w-40"
              />
              <button
                type="submit"
                disabled={!promoCode}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:bg-green-400"
              >
                Apply
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT: SUMMARY */}
        <div className="bg-white p-6 rounded-xl shadow-lg h-fit sticky top-10">
          <h3 className="text-2xl font-bold mb-4 border-b pb-2">
            Order Summary
          </h3>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Items Subtotal</span>
              <span>Rs. {totals.subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <span>Rs. {deliveryFee.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Taxes ({taxRate * 100}%)</span>
              <span>Rs. {totals.taxAmount.toFixed(2)}</span>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-green-600 font-semibold">
                <span>Discount</span>
                <span>- Rs. {discount.toFixed(2)}</span>
              </div>
            )}

            <hr />

            <div className="flex justify-between font-extrabold text-xl">
              <span>Total</span>
              <span>Rs. {totals.total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            disabled={totals.itemCount === 0}
            className="w-full bg-green-600 text-white py-3 mt-5 rounded-lg hover:bg-green-700 disabled:bg-green-400"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
