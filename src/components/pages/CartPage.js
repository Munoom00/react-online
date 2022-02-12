import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector((state) => state.cartReducer.cart);

  return (
    <div className="container">
      <h2>CartPage</h2>
      <table class="table table-dark table-striped">
        <thead>
          <th>ID</th>
          <th>ProductID</th>
          <th>ProductName</th>
          <th>ProductPrice</th>
          <th>Qty</th>
          <th>Total</th>
        </thead>
        <tbody>
          {cart.map((c, index) => {
            return (
              <tr key={c.id}>
                <td>{++index}</td>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.price}</td>
                <td>{c.qty}</td>
                <td>{c.price * c.qty}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CartPage;
