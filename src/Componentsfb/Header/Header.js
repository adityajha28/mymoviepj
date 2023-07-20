import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="fbheader">
      <div className="fbheadercon">
          
        <img
          className="fblogo"
          src={require("./filmybuzzlogo.gif")}
          alt={"logo"}
        />
        <img 
          className="headerlogo" 
          src={require("./headerlogo12 (1).png")}
          alt={"logo"} 
          />
          
          
      </div>
    </div>
  );
};

export default Header;


 
