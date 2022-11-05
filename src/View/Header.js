import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let user = JSON.parse(localStorage.getItem('user-info'))
  const navigate = useNavigate();
  function logout(){
    localStorage.clear();
    navigate("/");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">Finserv Supeer Admin</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="customer">
              Customer <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="order">
              Order
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="aggrement">
              Aggrement
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="materialUI">
              MatereialUi
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="googleMap">
              Google Map
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="practice">
              Practice
            </a>
          </li>
         
          <li>
          <button onClick={logout} className ='btn btn-warning'>Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
