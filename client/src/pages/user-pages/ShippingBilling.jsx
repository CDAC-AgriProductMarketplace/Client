

const DetailCard = ({ title, details, subText, buttonText, onClick }) => (
  <div className="p-4 border border-gray-200 rounded-lg flex flex-col justify-between h-full">
    <div>
      <p className="font-semibold text-gray-800 mb-1">{title}</p>
      <p className="text-sm text-gray-600 mb-3">{details}</p>
      <p className="text-xs text-gray-500 mb-4">{subText}</p>
    </div>
    <button
      onClick={onClick}
      className="w-full text-center border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 rounded-lg transition duration-150 text-sm"
    >
      {buttonText}
    </button>
  </div>
);

const ShippingBilling = ({ userData }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-gray-800">Shipping & billing</h2>
      <button className="text-green-600 hover:text-green-700 font-medium text-sm border border-green-200 bg-green-50 py-1 px-3 rounded-lg transition duration-150">
        Add new address
      </button>
    </div>
    <p className="text-gray-500 mb-6 text-sm">
      Save time at checkout by keeping your addresses and payments ready.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <DetailCard
        title="Farm address"
        details={userData.farmAddress}
        subText="Default for deliveries"
        buttonText="Edit farm address"
      />
      <DetailCard
        title="Billing details"
        details={`UPI •••• ${userData.billingDetails.slice(-4)}`}
        subText="Saved for faster payments"
        buttonText="Manage payment methods"
      />
    </div>
  </div>
);

export default ShippingBilling;