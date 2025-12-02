import { useParams } from "react-router-dom";
import { MapPin, Truck, CheckCircle, Clock } from "lucide-react";

const TrackOrder = () => {
  const { orderId } = useParams();

  // Dummy tracking data — replace with API later
  const tracking = {
    orderId,
    status: "On the way",
    currentStep: 2,
    steps: [
      { label: "Order Placed", time: "Jan 20, 9:45 AM" },
      { label: "Packed & Dispatched", time: "Jan 20, 1:15 PM" },
      { label: "Out for Delivery", time: "Jan 21, 10:10 AM" },
      { label: "Delivered", time: "Expected today" },
    ],
    deliveryAddress: "123 Green Valley Road, Pune, MH, India",
  };

  return (
    <div className="bg-white p-6 shadow-sm rounded-xl border border-gray-100 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">
        Track Delivery
      </h1>
      <p className="text-gray-500 mb-6 text-sm">
        Tracking for Order #{tracking.orderId}
      </p>

      {/* Current Status Card */}
      <div className="rounded-lg border border-green-200 bg-green-50 p-4 mb-6">
        <div className="flex items-center space-x-3">
          <Truck className="w-6 h-6 text-green-600" />
          <p className="text-green-700 font-medium text-sm">
            {tracking.status}
          </p>
        </div>
        <p className="text-gray-600 mt-1 text-sm">
          Your package is on the move.
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        {tracking.steps.map((step, index) => {
          const isCompleted = index <= tracking.currentStep;

          return (
            <div key={index} className="flex items-start gap-3">
              {isCompleted ? (
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              ) : (
                <Clock className="w-5 h-5 text-gray-400 mt-1" />
              )}

              <div>
                <p
                  className={`font-medium text-sm ${
                    isCompleted ? "text-gray-800" : "text-gray-500"
                  }`}
                >
                  {step.label}
                </p>
                <p className="text-xs text-gray-500">{step.time}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Delivery Address */}
      <div className="mt-8 p-4 rounded-lg bg-gray-50 border border-gray-200">
        <div className="flex items-center mb-1 space-x-2">
          <MapPin className="w-5 h-5 text-gray-600" />
          <p className="font-medium text-gray-700">Delivery Address</p>
        </div>
        <p className="text-sm text-gray-600">{tracking.deliveryAddress}</p>
      </div>
    </div>
  );
};

export default TrackOrder;
