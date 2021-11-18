import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BestSeller from "./ContentComponents/BestSeller";
import Category from "./ContentComponents/Category";
import "./ContentStyles.css";
import Popular from "./ContentComponents/Popular";
import Discount from "./ContentComponents/Discount";

export const Content = () => {
  return (
    <>
      <Container>
        <Row className="my-5">
          <Col>
            <Popular />
          </Col>
        </Row>
        <Row className="my-5">
          <Col>
            <BestSeller />
          </Col>
        </Row>
      </Container>

      <div className="category-sec">
        <Container>
          <Row>
            <Col>
              <Category />
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          <Col>
            <Discount />
          </Col>
        </Row>
      </Container>
    </>
  );
};
