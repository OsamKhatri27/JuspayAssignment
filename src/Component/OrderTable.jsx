// src/components/OrderTable.jsx
import React, { useState } from 'react';
import { orders } from '../data';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Helper to get status class
const getStatusClass = (status) => {
  return `status--${status.toLowerCase().replace(' ', '-')}`;
};

const OrderTable = () => {
  const [orderList, setOrderList] =useState(orders)
  return (
    <div className="orders-container">
      <div className="orders-header">
        <h2 className="orders-header__title">Order List</h2>
        <div className="orders-header__search">
          <input type="text" placeholder="Search..." onChange={(e)=>{
            const searchText =  e.target.value;
            if(searchText!=''){
            const filtered = orderList.filter(obj => 
            Object.values(obj).some(value =>
            value.toString().toLowerCase().includes(searchText.toLowerCase())
          )
          );
          setOrderList(filtered)
        } else if(searchText === '') setOrderList(orders)
          }}/>
        </div>
      </div>

      <div className="table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Order ID</th>
              <th>User</th>
              <th>Project</th>
              <th>Address</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((order, index) => (
              <tr key={index}>
                <td><input type="checkbox" /></td>
                <td>{order.id}</td>
                <td>
                  <div className="user-cell">
                    <img src={order.user.avatar} alt={order.user.name} />
                    <span>{order.user.name}</span>
                  </div>
                </td>
                <td>{order.project}</td>
                <td>{order.address}</td>
                <td>{order.date}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button><FiChevronLeft /></button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button><FiChevronRight /></button>
      </div>
    </div>
  );
};

export default OrderTable;