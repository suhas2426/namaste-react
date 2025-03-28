import { useState } from "react";
import "../../index.css";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo image" className="logo" />
      </div>

      <div>
        <ul className="nav-items">
          <li>
            <Link to={"/about"}>About US</Link>
          </li>
          <li>
            <Link to={"/contactUS"}>Contact US</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
