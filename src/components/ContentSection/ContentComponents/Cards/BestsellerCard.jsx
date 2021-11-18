import React from "react";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";

const BestsellerCard = ({ img }) => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <div className="card-wrap">
        <div className="card-img">
          <img src={img} alt="book" />
        </div>
        <div className="card-content">
          <span className="book-name">The Book Name</span>
          <span className="author">Author</span>
          <div className="ratings">
            <p style={{ margin: "0 4px 0 0" }}>4</p>
            <BsStarFill style={{ height: "12px", width: "12px" }} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BestsellerCard;
