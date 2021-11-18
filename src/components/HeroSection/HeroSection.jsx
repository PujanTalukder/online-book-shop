import React from "react";
import "./HeroSectionStyles.css";
import { Col, Container, Row } from "react-bootstrap";
import heroImage from "../../img/hero.svg";
import bookImage from "../../img/book.png";
import { FaSearch } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <>
      <Container
        fluid
        style={{ backgroundColor: "#D6CFC5", height: "100vh" }}
        className="d-flex align-items-center justify-content-center "
        id="home"
      >
        <Container>
          <Row className="flex-container ">
            <Col>
              <div className="hero-text">
                <div style={{ display: "inline-flex" }}>
                  <p style={{ fontWeight: "600", color: "#b34123" }}>
                    Explore Your Favourite Books
                  </p>
                  <img
                    src={bookImage}
                    alt="book"
                    style={{
                      height: "18px",
                      width: "18px",
                      marginLeft: "0.8rem",
                      marginTop: "3px",
                    }}
                  />
                </div>
                <div className="hero-text-heading">
                  <h1>Get Your New</h1>
                  <h1>Books With The</h1>
                  <h1>Best Price</h1>
                </div>
              </div>
              <div className="formWrapper">
                <form action="#" style={{ flexGrow: "1" }}>
                  <div className="searchInputWrapper">
                    <FaSearch className="searchInputIcon" />
                    <input
                      type="text"
                      className="searchInput"
                      placeholder="Search by name, title, author"
                    />
                    <div>
                      <input
                        type="button"
                        value="Search"
                        className="searchBtn"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </Col>
            <Col style={{ maxWidth: "550px" }}>
              <img src={heroImage} alt="hero" className="hero-img" />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
