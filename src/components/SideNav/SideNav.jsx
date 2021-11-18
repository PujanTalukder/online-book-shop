import React from "react";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "./SideNavStyles.css";

export const SideNav = ({ isOpen, closeMobileMenu }) => {
  return (
    <div
      className={isOpen ? "sidebarContainer active" : "sidebarContainer"}
      onClick={closeMobileMenu}
    >
      <div className="closeIcon" onClick={closeMobileMenu}>
        <FaTimes />
      </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <LinkScroll
            className="sidebarLink"
            onClick={closeMobileMenu}
            to="home"
            smooth={true}
            duration={90}
            spy={true}
            exact="true"
            offset={-80}
          >
            Home
          </LinkScroll>
          <LinkScroll
            className="sidebarLink"
            to="popular"
            smooth={true}
            duration={90}
            spy={true}
            exact="true"
            offset={-80}
            onClick={closeMobileMenu}
          >
            Popular
          </LinkScroll>
          <LinkScroll
            className="sidebarLink"
            to="bestseller"
            smooth={true}
            duration={90}
            spy={true}
            exact="true"
            offset={-80}
            onClick={closeMobileMenu}
          >
            Bestseller
          </LinkScroll>
          <LinkScroll
            className="sidebarLink"
            to="category"
            smooth={true}
            duration={90}
            spy={true}
            exact="true"
            offset={-80}
            onClick={closeMobileMenu}
          >
            Category
          </LinkScroll>
        </div>
        <div className="sidebarButtonWrap">
          <Link
            className="sidebarRoute"
            to="/login"
            style={{
              marginBottom: "1.5rem",
              border: "none",
              backgroundColor: "#fff",
              color: "#1E1D1E",
            }}
          >
            Sign in
          </Link>
          <Link className="sidebarRoute" to="/signup">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};
