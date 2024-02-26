import React from "react";
import "./HeaderStyles.css";

const Header = () => {
  return (
    <div>
      <header className="header">🍔 Recipe App</header>
    </div>
  );
};

export default React.memo(Header);
