import { LOGO_URL } from "../utils/constants";

const Header = () => (
  //For header section
  <div className="header-container">
    <div className="logo-container">
      <img
        src={LOGO_URL}
        alt="logo"
        className="logo"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>cart</li>
      </ul>
    </div>
  </div>
);

export default Header;