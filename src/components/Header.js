import { useState } from "react";
import "../../index.css";
import { LOGO_URL } from "../utils/contants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo image" className="logo" />
      </div>

      <div>
        <ul className="nav-items">
          <li>About US</li>
          <li>Contact US</li>
          <li>Cart</li>
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
