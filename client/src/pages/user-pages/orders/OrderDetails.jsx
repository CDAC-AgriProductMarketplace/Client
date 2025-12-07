import { useParams } from "react-router-dom";
import { FileText, ShoppingBag, CheckCircle } from "lucide-react";

const OrderDetails = () => {
  const { orderId } = useParams();

  // Dummy order details — replace with API later
  const order = {
    orderId,
    date: "Jan 20, 2025",
    status: "Delivered",
    total: 249.99,
    items: [
      { name: "Organic Fertilizer Pack", qty: 1, price: 149.99 },
      { name: "Farm Soil Test Kit", qty: 1, price: 100.00 },
    ],
  };

  return (
    <div className="bg-white p-6 shadow-sm rounded-xl border border-gray-100 max-w-2xl mx-auto">

      <h1 className="text-2xl font-semibold text-gray-800 mb-1">
        Order Details
      </h1>
      <p className="text-gray-500 text-sm mb-6">Order #{order.orderId}</p>

      {/* Order Status */}
      <div className="flex items-center p-4 mb-6 bg-green-50 border border-green-200 rounded-lg">
        <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
        <p className="text-green-700 font-medium">{order.status}</p>
      </div>

      {/* Items */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center mb-3">
          <ShoppingBag className="w-5 h-5 mr-2" /> Items in this order
        </h2>

        <div className="space-y-3">
          {order.items.map((item, i) => (
            <div
              key={i}
              className="flex justify-between border-b pb-2 last:border-b-0"
            >
              <p className="text-gray-700 text-sm">
                {item.name} × {item.qty}
              </p>
              <p className="font-medium text-gray-800 text-sm">
                ₹{item.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Order total */}
      <div className="flex justify-between py-3 border-t border-gray-200">
        <p className="text-gray-800 font-medium">Total Amount</p>
        <p className="text-gray-900 font-semibold text-lg">
          ₹{order.total.toFixed(2)}
        </p>
      </div>

      {/* Invoice Download */}
      <button
        onClick={() => alert("Invoice download triggered")}
        className="w-full mt-5 flex items-center justify-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg text-sm transition"
      >
        <FileText className="w-5 h-5" />
        Download Invoice (PDF)
      </button>
    </div>
  );
};

export default OrderDetails;
