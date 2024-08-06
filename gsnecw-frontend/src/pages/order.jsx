import React, { useState, useEffect } from 'react';

const OrderHistory = ({ userId }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await fetch(`/api/order_history/${userId}`);
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    }

    fetchOrders();
  }, [userId]);

  return (
    <div>
      <h1>Order History</h1>
      <OrderList orders={orders} />
    </div>
  );
};
