// pages/CancelOrderPage.jsx
import { useParams, useNavigate, Link } from "react-router-dom";

export default function CancelOrderPage() {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const handleCancel = () => {
    // cancel logic (API call)
    alert(`Order #${orderId} has been cancelled.`);
    navigate("/orders");
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-sm p-6 mt-10 border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        Cancel Order #{orderId}
      </h2>

      <p className="text-gray-600 mb-5 text-sm">
        Are you sure you want to cancel this order?  
        This action cannot be undone.
      </p>

      <div className="space-y-3">
        <button
          onClick={handleCancel}
          className="w-full bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition"
        >
          Yes, cancel my order
        </button>

        <Link
          to={`/orders/${orderId}`}
          className="w-full inline-block text-center border border-gray-300 hover:bg-gray-50 py-2 rounded-lg text-gray-700 font-medium transition"
        >
          Go back
        </Link>
      </div>
    </div>
  );
}
