import { LOGO_URL } from "../utils/constants";
import { use, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginButtonText, setLoginButtonText] = useState("Login");

  const onlineStatus = useOnlineStatus();

  //For header section
  return (
    <div className="flex justify-between bg-lime-50 shadow-lg">
      <div className="w-30">
        <img src={LOGO_URL} alt="logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul className="inline-flex gap-4 p-5 m-5  text-xl font-color text-gray-700">
          <li>
            Online {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
            <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>cart</li>
          <li>
            <button
              className="login-btn cursor-pointer"
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
