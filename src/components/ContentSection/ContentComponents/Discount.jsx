import React from "react";
import "./DiscountStyles.css";
import img from "../../../img/discount.svg";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Discount = () => {
  return (
    <Container className="py-3">
      <Row className="discount-container">
        <Col className="column1">
          <div className="text">
            <h2>Deal of the day</h2>
            <h1>Above 50% off</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              rem illum totam iusto dolorem exercitationem accusamus sunt quod,
              minus earum ratione excepturi, nesciunt a nisi ipsum! Aliquam
              velit porro veritatis!
            </p>
          </div>
          <div className="shopnow-btn">
            <Link className="shopnow-btn-link" to="/">
              Shop now
            </Link>
          </div>
        </Col>
        <Col className="column2">
          <div className="image-wrapper">
            <img src={img} alt="disc" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Discount;
