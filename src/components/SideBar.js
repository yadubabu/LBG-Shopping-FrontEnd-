import React from "react";
import "./style.css";

const SideBar = ({ show, setShow, name }) => {
  return (
    <div className="items">
      <div className="sidebar">
        <div>
          <h3>{name}</h3>
        </div>
        <div>
          <button onClick={() => setShow(!show)}>X</button>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <a>Your orders</a>
          </li>
          <li>
            <a>Your orders</a>
          </li>
          <li>
            <a>Your orders</a>
          </li>
          <li>
            <a>Your orders</a>
          </li>
          <li>
            <a>Your orders</a>
          </li>
          <li>
            <a>Your orders</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
