import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Dashboard from "./Dashboard";
import { setUser } from "../redux/actions/userActions";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const customers = useSelector((state) => state.users);

  const submitHandler = (e) => {
    e.preventDefault();
    const res = customers.filter((user) => {
      return user.email === email && user.password === password;
    });
    if (res.length > 0) {
      window.location.href = `/dashboard/${res[0].email}`;
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Email:</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
