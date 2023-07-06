import React, { useEffect, useState } from "react";
import { redirect, NavLink } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react";
const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [msg, setMsg] = useState();
  const submitUser = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/registeruser", {
        name: name,
        email: email,
        password: password,
        confirmpassword: confirmpassword,
        phone: phone,
        address: address,
      })
      .then((res) => setMsg(res.data));
  };
  useEffect(() => {
    if (msg === "Successfully Registered") {
      window.location.href = "/login";
    }
  }, [msg]);
  return (
    <div>
      <h1>Register</h1>
      {msg ? <div>{msg}</div> : ""}
      <br />
      <form onSubmit={submitUser}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <label>Confirmpassword</label>
        <input
          type="password"
          name="confirmpassword"
          onChange={(e) => setConfirmpassword(e.target.value)}
        />{" "}
        <br />
        <label>Phone</label>
        <input
          type="number"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
        />{" "}
        <br />
        <label>Address</label>
        <input
          type="text"
          name="address"
          onChange={(e) => setAddress(e.target.value)}
        />{" "}
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
