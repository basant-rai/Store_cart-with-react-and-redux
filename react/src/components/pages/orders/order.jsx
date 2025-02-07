import React, { useEffect, useState } from "react";
import AdminSidebar from "../../layout/AdminSidebar";
import { getOrders } from "../../../Api/orderAPI";
import axios from "axios";
import { API } from "../../../config";

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrders()
      .then((res) => setOrders(res))
      .catch((err) => console.log(err));
  }, []);

  const updateOrder = async (id, status) => {
    try {
      await axios.put(`${API}/orderupdate/${id}`, { status: status });
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === id ? { ...order, status: status } : order
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fliud ">
      <div className="row ">
        <div className="col-2 ps-0">
          <AdminSidebar order />
        </div>
        <div className="col-10 mt-2 px-4">
          <h1>Orders</h1>
          <div className="mb-5 mt-4">
            <table className="table text-center table-bordered  table-striped">
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>UserName</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Phone</th>
                  <th>Shipping Address</th>
                  <th>Total Items</th>
                  <th>Total Price</th>
                  <th>Status</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 &&
                  orders.map((order, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td style={{ fontSize: "12px" }}>
                          {order.user.user_name}
                        </td>
                        <td style={{ fontSize: "12px" }}>{order.user.email}</td>
                        <td style={{ fontSize: "12px" }}>{order.city}</td>
                        <td style={{ fontSize: "12px" }}>{order.contact}</td>
                        <td style={{ fontSize: "12px" }}>
                          {order.shipping_address}
                        </td>
                        <td style={{ fontSize: "12px" }}>
                          {order.orderItems.length > 0 &&
                            order.orderItems.map((item) => (
                              <p style={{ fontSize: "10px" }}>
                                {item.product.product_name}
                              </p>
                            ))}
                        </td>
                        <td style={{ fontSize: "12px" }}>
                          Rs.{order.total_price}
                        </td>
                        <td style={{ fontSize: "10px" }}>{order.status}</td>
                        <td style={{ fontSize: "12px" }}>
                          <div className="btn-group border">
                            <button
                              disabled={order.status !== "Pending"}
                              className="btn"
                              onClick={() =>
                                updateOrder(order._id, "Completed")
                              }
                            >
                              <i
                                class="bi bi-pencil-square "
                                style={{ fontSize: "12px" }}
                              ></i>
                            </button>
                            <button
                              disabled={order.status !== "Pending"}
                              className="btn btn-dark"
                              onClick={() => updateOrder(order._id, "Canceled")}
                            >
                              <i
                                class="bi bi-x-octagon"
                                style={{ fontSize: "12px" }}
                              ></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
