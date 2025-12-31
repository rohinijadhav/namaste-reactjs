import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginButtonText, setLoginButtonText] = useState("Login");

  //For header section
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>cart</li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                console.log("Login button clicked");
                setLoginButtonText(
                  loginButtonText === "Login" ? "Logout" : "Login"
                );
                console.log("Button text changed to:", loginButtonText);
              }}
            >
              {loginButtonText}
            </button>
          </li>
        </ul>
      </div>
      {/* <div className="login">
      <button className="login-btn">Login</button>
    </div> */}
    </div>
  );
};

export default Header;
