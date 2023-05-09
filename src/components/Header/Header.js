import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "../Header/HeaderElement";
import ShobhitNautiyalResume from "https://drive.google.com/file/d/1yVEm0Z_oj0FV109NvvIGgiuuKBIQgMYs/view?usp=sharing";

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
        <a className="btn PrimaryBtn" href={ShobhitNautiyalResume} target="_blank" download>Resume</a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;