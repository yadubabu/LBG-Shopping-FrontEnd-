import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./style.css";
import axios from "axios";
import ListIcon from "@mui/icons-material/List";
import SideBar from "./SideBar";

const Dashboard = () => {
  const key = useParams().email;
  const customers = useSelector((state) => state.users);
  const [user, setUser] = useState({});
  const [carts, setCarts] = useState([]);
  const [cart, setCart] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (key) {
      const res = customers.filter((user) => {
        return user.email === key;
      });
      setUser(res[0]);
    }
  }, [key]);
  useEffect(() => {
    if (user) {
      axios
        .get("http://localhost:5000/getcart")
        .then((res) => setCarts(res.data))
        .catch((err) => console.log(err));
    }
  }, [user]);
  useEffect(() => {
    if (user) {
      const res = carts.filter((cart) => {
        return cart.email === user.email;
      });
      setCart(res[0]);
    }
  }, [user]);
  return (
    <div className="profile">
      {show ? <SideBar show={show} setShow={setShow} name={user.name} /> : ""}
      <div>
        {" "}
        <ListIcon
          style={{ cursor: "pointer" }}
          onClick={() => setShow(!show)}
        />
        <span>
          Hello!
          <b>{user.name}</b>
        </span>
      </div>
      <div className="cartS">
        <AddShoppingCartIcon />
        <sup className="cart">
          <a href="/dashboard/cart">{cart.cart}</a>
        </sup>
      </div>
    </div>
  );
};

export default Dashboard;
