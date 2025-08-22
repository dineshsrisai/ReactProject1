import LOGO_URL from "../utils/constants";
import { useState } from "react";
const Header = () => {

  const [btnName,setBtnName] = useState("Login");
  console.log(btnName);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="res-logo" src={LOGO_URL}/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className="login" onClick={()=>{
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;