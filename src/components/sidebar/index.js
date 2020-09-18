import React from 'react';
import './sidebar.css';
import {NavLink} from "react-router-dom";

export const SideBar = (props) => {
  return (
  <div className="App-sidebar">
    <nav className="App-sidebar-nav">
      <ul>
        <li>
          <NavLink to="products" activeClassName='is-active' exact={true}>Products</NavLink>
        </li>
        <li>
          <NavLink to="cart" activeClassName='is-active'>Cart</NavLink>
        </li>
      </ul>
    </nav>
  </div>);
};

export default SideBar;