import UserOrders from "./UserOrders";

const dummyOrders = [
  { orderId: "12345", items: "Organic Fertilizer", status: "Delivered", amount: 250 },
  { orderId: "98765", items: "Tractor Oil", status: "On the way", amount: 349 },
  { orderId: "98765", items: "Tractor Oil", status: "On the way", amount: 349 },
];

export default function OrderListPage() {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <UserOrders orders={dummyOrders} />
    </div>
  );
}
