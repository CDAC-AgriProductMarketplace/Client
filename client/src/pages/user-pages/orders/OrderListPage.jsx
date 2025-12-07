import { Link } from "react-router-dom";
import UserOrders from "./UserOrders";

const dummyOrders = [
  { orderId: "12345", items: "Organic Fertilizer", status: "Delivered", amount: 250 },
  { orderId: "98765", items: "Tractor Oil", status: "On the way", amount: 349 },
  { orderId: "98765", items: "Tractor Oil", status: "On the way", amount: 349 },
];

export default function OrderListPage() {
  return (
    <div className="mx-auto p-4  lg:max-w-none ">
      <UserOrders orders={dummyOrders} />
    </div>
  );
}
