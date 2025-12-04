import { ChevronsRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Single Order Item
const OrderItem = ({ order }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (order.status.includes('On the way')) {
      navigate(`/orders/${order.orderId}/track`);
    } else {
      navigate(`/orders/${order.orderId}`);
    }
  };

  return (
    <div className="flex justify-between items-center py-3 border-b last:border-b-0 border-gray-100 text-sm">
      <div>
        <p className="text-gray-700 font-medium">{order.items}</p>
        <p className="text-gray-500 mt-0.5">Order #{order.orderId}</p>
      </div>

      <div className="flex items-center space-x-4">
        <div className="text-right">
          <p className="text-green-600 font-semibold">{order.status}</p>
        </div>

        <div className="text-right min-w-[70px]">
          <p className="font-semibold text-gray-800">Rs. {order.amount}</p>

          <button
            onClick={handleClick}
            className="text-xs text-blue-600 hover:text-blue-700 flex items-center ml-auto mt-0.5"
          >
            {order.status.includes('On the way')
              ? 'Track delivery'
              : 'View details & invoice'}
            <ChevronsRight className="w-3 h-3 ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Orders Component
const UserOrders = ({ orders }) => {
  const navigate = useNavigate();

  const handleAllOrders = () => navigate('/orders');

  const handleDownloadReport = () => {
    // Simulated report download
    const fileContent = 'Monthly order report (dummy data)';
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'monthly-report.txt';
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Order history</h2>

        <button
          onClick={handleAllOrders}
          className="text-green-600 hover:text-green-700 font-medium text-sm border border-green-200 bg-green-50 py-1 px-3 rounded-lg transition duration-150"
        >
          View all orders
        </button>
      </div>

      <p className="text-gray-500 mb-4 text-sm">
        Quickly revisit recent orders, reorder essentials, or download invoices.
      </p>

      <div className="space-y-2 mb-6">
        {orders.map((order) => (
          <OrderItem key={order.orderId} order={order} />
        ))}
      </div>
      
{/* 
      <button
        onClick={handleDownloadReport}
        className="w-full text-center border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 rounded-lg transition duration-150 text-sm"
      >
        Download last month's report
      </button> */}
    </div>
  );
};

export default UserOrders;
