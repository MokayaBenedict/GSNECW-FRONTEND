import React, { useEffect, useState, useContext } from "react";
import AppContext from "../context/AppContext";
import "./OrderHistory.css";

const OrderHistory = () => {
  const { token } = useContext(AppContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, [token]);

  const fetchOrders = async () => {
    try {
      const response = await fetch("/api/orders", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 401) throw new Error("Unauthorized");
      if (!response.ok) throw new Error("Failed to fetch orders");
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchOrderDetails = async (orderId) => {
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Failed to fetch order details");
      const data = await response.json();
      setSelectedOrder(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const response = await fetch(`/api/orders/${orderId}/status`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!response.ok) throw new Error("Failed to update order status");
      fetchOrders();
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Your Order History</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.order_id}>
            <p>Order ID: {order.order_id}</p>
            <p>Cart ID: {order.cart_id}</p>
            <p>Status: {order.status}</p>
            <p>Total: ${order.total_price.toFixed(2)}</p>
            <button onClick={() => fetchOrderDetails(order.order_id)}>
              View Details
            </button>
            <button onClick={() => updateOrderStatus(order.order_id, "Shipped")}>
              Mark as Shipped
            </button>
          </li>
        ))}
      </ul>

      {selectedOrder && (
        <div>
          <h3>Order Details</h3>
          <p>Order ID: {selectedOrder.order_id}</p>
          <p>User ID: {selectedOrder.user_id}</p>
          <p>Cart ID: {selectedOrder.cart_id}</p>
          <p>Status: {selectedOrder.status}</p>
          <p>Total: ${selectedOrder.total_price.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;