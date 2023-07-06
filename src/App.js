import React, { useEffect, useState } from "react";
import axios from "axios";
import Register from "./components/Register";
import Login from "./components/Login";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setAllUsers } from "./redux/actions/userActions";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Header from "./components/Header";
import Cart from "./components/Cart";

const App = () => {
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();

  const getAllUsers = async () => {
    await axios
      .get("http://localhost:5000/getusers")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    dispatch(setAllUsers(users));
  });
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/:email" element={<Dashboard />} />
          <Route path="/dashboard/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
