import React from "react";
import { NavLink } from 'react-router-dom'

const navBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="#">Navbar</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <NavLink className="nav-item nav-link" to="/movies" >Movies</NavLink>
      <NavLink className="nav-item nav-link" to="/customers" >Customers</NavLink>
      <NavLink className="nav-item nav-link" to="/rentals" >Rentals</NavLink>

    </div>
  </div>
</nav>
  );
};

export default navBar;
