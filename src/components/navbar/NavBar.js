import React from "react";

function NavBar({ onChangePage }) {
  function handleLinkClick(evt) {
    evt.preventDefault();
    onChangePage(evt.target.pathname);
  }
  return (
    <nav>
      <a onClick={handleLinkClick} href="/">
        Home
      </a>
      <a onClick={handleLinkClick} href="/about">
        About
      </a>
      <a onClick={handleLinkClick} href="/projects">
        Projects
      </a>
    </nav>
  );
}

export default NavBar;
