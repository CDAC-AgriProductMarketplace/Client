// pages/OrderDetailsPage.jsx
import { useParams, Link } from "react-router-dom";

export default function OrderDetailsPage() {
  const { orderId } = useParams();

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-6 mt-10 border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Order #{orderId}
      </h2>

      <p className="text-gray-500 text-sm mb-3">Here is the complete breakdown of your order:</p>

      {/* Example details */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <p className="text-gray-600">Item</p>
          <p className="font-medium">Organic Fertilizer Pack</p>
        </div>

        <div className="flex justify-between text-sm">
          <p className="text-gray-600">Amount</p>
          <p className="font-semibold text-gray-700">$250</p>
        </div>

        <div className="flex justify-between text-sm">
          <p className="text-gray-600">Status</p>
          <p className="text-green-600 font-semibold">On the way</p>
        </div>
      </div>

      {/* Track Delivery button */}
      <Link
        to={`/orders/${orderId}/track`}
        className="mt-5 inline-block bg-green-600 text-white w-full text-center py-2 rounded-lg font-medium hover:bg-green-700 transition"
      >
        Track Delivery
      </Link>

      {/* Cancel Order */}
      <Link
        to={`/orders/${orderId}/cancel`}
        className="mt-3 inline-block w-full text-center text-red-600 hover:text-red-700 text-sm"
      >
        Cancel Order
      </Link>
    </div>
  );
}
