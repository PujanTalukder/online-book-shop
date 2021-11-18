import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import "./NavigationStyles.css";

export const NavigationBar = ({ toggle }) => {
  const [navScroll, setNavScroll] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 100,
      exact: true,
      offset: -80,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <nav className={navScroll ? "navbar activenav" : "navbar"}>
      <div className="navbarContainer">
        <Link
          className={navScroll ? "navLogo activelogo" : "navLogo"}
          to="/"
          onClick={toggleHome}
        >
          Books.
        </Link>
        <div>
          <ul className="navMenu">
            <li className="navItem">
              <LinkScroll
                className={navScroll ? "navLink actives" : "navLink"}
                to="home"
                smooth={true}
                duration={90}
                spy={true}
                exact="true"
                offset={-80}
              >
                Home
              </LinkScroll>
            </li>
            <li className="navItem">
              <LinkScroll
                className={navScroll ? "navLink actives" : "navLink"}
                to="popular"
                smooth={true}
                duration={90}
                spy={true}
                exact="true"
                offset={-80}
              >
                Popular
              </LinkScroll>
            </li>
            <li className="navItem">
              <LinkScroll
                className={navScroll ? "navLink actives" : "navLink"}
                to="bestseller"
                smooth={true}
                duration={90}
                spy={true}
                exact="true"
                offset={-80}
              >
                Bestseller
              </LinkScroll>
            </li>
            <li className="navItem">
              <LinkScroll
                className={navScroll ? "navLink actives" : "navLink"}
                to="category"
                smooth={true}
                duration={90}
                spy={true}
                exact="true"
                offset={-80}
              >
                Category
              </LinkScroll>
            </li>
          </ul>
        </div>
        <div className="navButtonContainer">
          <Link
            className={navScroll ? "navButton active" : "navButton"}
            style={{
              marginRight: "1rem",
              backgroundColor: "#1E1D1E",
              color: "#fff",
            }}
            to="/login"
          >
            Sign in
          </Link>
          <Link
            className={navScroll ? "navButton active" : "navButton"}
            to="/signup"
          >
            Create Account
          </Link>
        </div>
        <div className="hamburger" onClick={toggle}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
};
