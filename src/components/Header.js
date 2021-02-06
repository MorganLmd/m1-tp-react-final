import React from "react";

const Header = ({ logo }) => {
  return (
    <header>
      <nav className="AppBar">
        <img
          className="AppBar-logo"
          src={logo}
          aria-label="people"
          alt="People"
        />
      </nav>
    </header>
  );
};

export default Header;
