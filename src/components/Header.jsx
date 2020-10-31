import React from "react";

const Header = ({ count }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="">Tandem Trivia</div>
      <span className="ml-auto">Question: {count} / 10</span>
    </nav>
  );
};

export default Header;
