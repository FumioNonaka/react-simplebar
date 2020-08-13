import React from "react";

const Header = ({ headerRef }) => {
  return (
    <header
      id="header"
      ref={headerRef}
      className="text-white bg-primary w-100 p-2 d-flex"
    >
      <h1>Header</h1>
    </header>
  );
};

export default Header;
