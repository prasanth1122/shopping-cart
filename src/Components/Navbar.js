import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar dark">
      <p className="page__txt">Shopping Cart</p>
      <ul className="nav__links">
        <li><NavLink to="/">Home Page</NavLink></li>
        <li><NavLink to="/shoppingCart">Cart Page</NavLink></li>
      </ul>
    </div>
  );
};

export default Navbar;
