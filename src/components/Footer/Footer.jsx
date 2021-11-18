import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";

import "./FooterStyles.css";

export const Footer = () => {
  return (
    <div style={{ backgroundColor: "#1E1D1E" }}>
      <Container>
        <Row>
          <Col className="footer-wrapper">
            <div className="newsletter-wrapper">
              <div className="newsletter-heading">
                <span>Subscribe Our Newsletter For Newest Updates</span>
              </div>
              <div className="newsletter-form">
                <form action="#">
                  <div className="newsletter-form-wrapper">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="type your email here"
                    />
                    <button>Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="link-wrapper">
              <div className="links">
                <span className="link-heading">About</span>
                <Link to="/" className="links-anchor">
                  Contact us
                </Link>
                <Link to="/" className="links-anchor">
                  About us
                </Link>
              </div>
              <div className="links">
                <span className="link-heading">Policy</span>
                <Link to="/" className="links-anchor">
                  Return Policy
                </Link>
                <Link to="/" className="links-anchor">
                  Terms of Use
                </Link>
                <Link to="/" className="links-anchor">
                  Privacy
                </Link>
              </div>
              <div className="links">
                <span className="link-heading">Help</span>
                <Link to="/" className="links-anchor">
                  Payment
                </Link>
                <Link to="/" className="links-anchor">
                  Shipping
                </Link>
                <Link to="/" className="links-anchor">
                  Cancellation & Returns
                </Link>
                <Link to="/" className="links-anchor">
                  FAQ
                </Link>
              </div>
              <div className="links">
                <span className="link-heading">Find us on</span>
                <div className="d-flex flex-row justify-content-between">
                  <Link
                    to="/"
                    className="links-anchor"
                    style={{ padding: "3px" }}
                  >
                    <AiFillInstagram id="icons" />
                  </Link>
                  <Link
                    to="/"
                    className="links-anchor"
                    style={{ padding: "3px" }}
                  >
                    <FaFacebook id="icons" />
                  </Link>
                  <Link
                    to="/"
                    className="links-anchor"
                    style={{ padding: "3px" }}
                  >
                    <FaTwitter id="icons" />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <hr style={{ color: "#cfcfcfbe", height: "1px", border: "none" }} />
        <div className="developer-name">
          <span>
            ©2021 | Made By
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#a3a3a3",
                marginLeft: "8px",
                fontWeight: "400",
              }}
            >
              Pujan Talukder
            </Link>
          </span>
        </div>
      </Container>
    </div>
  );
};
