import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa"; 

const mockProducts = [
  {
    id: "prod1",
    name: "Compact Tractor Oil (5L)",
    seller: "FieldPro Supplies",
    price: 38.0, // Base price per unit
    currency: "Rs.",
    stockStatus: "Ships in 2–3 days",
    image: "https://via.placeholder.com/100/A3E635/000000?text=Oil", // Example placeholder
  },
  {
    id: "prod2",
    name: "Organic NPK Fertilizer (25kg)",
    seller: "GreenHarvest",
    price: 24.0,
    currency: "Rs.",
    stockStatus: "In stock",
    image: "https://via.placeholder.com/100/10B981/000000?text=Fertilizer", // Example placeholder
  },
  // Add more mock products as needed
];

// Mock API response structure for a user's cart
const mockCartData = [
  { productId: "prod1", quantity: 1 },
  { productId: "prod2", quantity: 2 },
];

/**
 * Simulates fetching initial cart data from an API.
 * @returns {Promise<Array>} A promise that resolves with the cart items.
 */
const fetchCartItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Merge mock cart data with product details
      const cartItems = mockCartData.map(item => {
        const product = mockProducts.find(p => p.id === item.productId);
        return product ? { ...product, quantity: item.quantity } : null;
      }).filter(item => item !== null);
      resolve(cartItems);
    }, 500); // Simulate network delay
  });
};

// --- Cart Component ---

function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0); // $0 discount initially
  const deliveryFee = 6.00;
  const taxRate = 0.085; // 8.5% tax rate

  // 1. Initial Data Fetching
  useEffect(() => {
    const loadCart = async () => {
      try {
        const items = await fetchCartItems();
        setCartItems(items);
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
      } finally {
        setLoading(false);
      }
    };
    loadCart();
  }, []);

  // 2. Cart Manipulation Handlers
  const updateQuantity = useCallback((productId, change) => {
    setCartItems(currentItems =>
      currentItems
        .map(item => {
          if (item.id === productId) {
            const newQuantity = item.quantity + change;
            // Ensure quantity doesn't drop below 1
            return { ...item, quantity: Math.max(1, newQuantity) };
          }
          return item;
        })
    );
  }, []);

  const removeItem = useCallback((productId) => {
    setCartItems(currentItems =>
      currentItems.filter(item => item.id !== productId)
    );
  }, []);

  // 3. Calculation Logic
  const calculateTotals = () => {
    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const taxAmount = (subtotal * taxRate);
    const total = subtotal + deliveryFee + taxAmount - discount;

    return {
      subtotal,
      taxAmount,
      total: Math.max(0, total), // Total shouldn't be negative
      itemCount: cartItems.length,
    };
  };

  const totals = calculateTotals();

  // 4. Promo Code Handler (Simulated)
  const applyPromoCode = (e) => {
    e.preventDefault();
    // Simulate a successful code application
    if (promoCode.toUpperCase() === "SAVE10") {
      // Apply a fixed $10 discount
      setDiscount(10.00);
      alert("Promo code SAVE10 applied! You saved Rs. 10.00.");
    } else {
      setDiscount(0);
      alert("Invalid or expired promo code.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-xl font-semibold">Loading Cart...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* LEFT SIDE — CART ITEMS */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold">Your Cart ({totals.itemCount} items)</h2>
          
          {cartItems.length === 0 ? (
            <p className="text-lg text-gray-500 p-8 bg-white rounded-xl shadow">Your cart is empty. Start shopping!</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl shadow flex gap-4 transition duration-150 ease-in-out hover:shadow-lg"
              >
                <img
                  src={item.image}
                  className="w-28 h-24 rounded-lg object-cover border"
                  alt={item.name}
                />
    
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-xs text-gray-500">
                    {item.stockStatus} • Sold by **{item.seller}**
                  </p>
    
                  <div className="mt-3 flex items-center gap-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center border rounded-md divide-x">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-2 text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                        aria-label="Decrease quantity"
                        disabled={item.quantity <= 1}
                      >
                        <FaMinus size={10} />
                      </button>
                      <span className="px-4 py-1 text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-2 text-sm text-gray-600 hover:bg-gray-100"
                        aria-label="Increase quantity"
                      >
                        <FaPlus size={10} />
                      </button>
                    </div>
    
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 text-sm hover:text-red-700 transition flex items-center gap-1"
                      aria-label={`Remove ${item.name}`}
                    >
                      <FaTrash size={12} />
                      Remove
                    </button>
                  </div>
                </div>
    
                <div className="flex flex-col items-end justify-between">
                  <p className="font-bold text-lg">
                    {item.currency}{" "}
                    {(item.price * item.quantity).toFixed(2)}
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
              className="border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            >
              ← Continue Shopping
            </button>
    
            <form onSubmit={applyPromoCode} className="flex gap-2">
              <input
                type="text"
                placeholder="Promo code (e.g., SAVE10)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded-lg focus:ring-green-500 focus:border-green-500 w-40"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:bg-green-400"
                disabled={!promoCode}
              >
                Apply
              </button>
            </form>
          </div>
        </div>
        
        {/* RIGHT SIDE — ORDER SUMMARY */}
        <div className="bg-white p-6 rounded-xl shadow-lg h-fit border border-gray-200 sticky top-10">
          <h3 className="text-2xl font-bold mb-4 border-b pb-2">
            Order Summary
          </h3>
          
          <div className="space-y-3 text-base">
            <div className="flex justify-between">
              <span className="text-gray-600">Items Subtotal ({totals.itemCount})</span>
              <span className="font-medium">
                Rs. {totals.subtotal.toFixed(2)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery</span>
              <span className="font-medium">Rs. {deliveryFee.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Estimated Taxes ({taxRate * 100}%)</span>
              <span className="font-medium">
                Rs. {totals.taxAmount.toFixed(2)}
              </span>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-green-600 font-semibold border-t border-dashed pt-2">
                <span>Discount (SAVE10)</span>
                <span>- Rs. {discount.toFixed(2)}</span>
              </div>
            )}
            
            <hr className="my-3 border-t-2 border-gray-300" />
            
            <div className="flex justify-between font-extrabold text-xl text-green-800">
              <span>Order Total</span>
              <span>Rs. {totals.total.toFixed(2)}</span>
            </div>
          </div>
          
          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-green-600 text-white py-3 mt-5 rounded-lg text-lg font-semibold shadow-md hover:bg-green-700 transition"
            disabled={totals.itemCount === 0}
          >
            Proceed to Checkout
          </button>
          
          <div className="mt-4 text-xs text-yellow-800 bg-yellow-100 p-3 rounded-lg border border-yellow-300">
            🔒 **Secure Checkout** • Your payment details are encrypted.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
