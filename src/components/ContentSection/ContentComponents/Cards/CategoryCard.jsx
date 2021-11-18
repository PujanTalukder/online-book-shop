import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCardStyles.css";

const CategoryCard = ({ img, text }) => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <div className="category-card-wrap">
        <div className="category-card-img">
          <img src={img} alt="book" />
        </div>
        <div className="category-card-content">
          <span>{text}</span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
