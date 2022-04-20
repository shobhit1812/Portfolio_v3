import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "../Header/HeaderElement";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img
            src="https://raw.githubusercontent.com/shobhit1812/Shobhit-Nautiyal-Portfolio/main/Assets/Logo/favicon_io%20(1)/favicon.ico"
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            About
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=https%3A%2F%2Fraw.githubusercontent.com%2Fshobhit1812%2FShobhit-Nautiyal-Portfolio%2Fmain%2FAssets%2FShobhit-Nautiyal-Resume.pdf&clen=62304&chunk=true"
            target="_blank"
            rel="noopener noreferrer" download="foo.txt"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;