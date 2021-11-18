import React from "react";
import BestsellerCard from "./Cards/BestsellerCard";
import { Link } from "react-router-dom";
import img1 from "../../../img/book-1.jpg";
import img2 from "../../../img/book-2.jpg";
import img3 from "../../../img/book-3.jpg";
import img4 from "../../../img/book-4.jpg";
import img5 from "../../../img/book-5.jpg";
import img6 from "../../../img/book-6.jpg";
import img7 from "../../../img/book-7.jpg";
import img8 from "../../../img/book-8.jpg";
import img9 from "../../../img/book-9.jpg";
import img10 from "../../../img/book-10.jpg";
import img11 from "../../../img/book-11.jpg";
import img12 from "../../../img/book-12.jpg";
import "./BestSellerStyles.css";

const BestSeller = () => {
  return (
    <>
      <div
        className="d-flex px-4 flex-row justify-content-between align-items-center mb-4 "
        id="bestseller"
      >
        <div className="mx-1">
          <h2>Best Selling Books</h2>
        </div>
        <div className="mx-2">
          <Link style={{ textDecoration: "none" }}>
            <h3>View all</h3>
          </Link>
        </div>
      </div>
      <div className="card-container">
        <BestsellerCard img={img1} />
        <BestsellerCard img={img2} />
        <BestsellerCard img={img3} />
        <BestsellerCard img={img4} />
        <BestsellerCard img={img5} />
        <BestsellerCard img={img6} />
        <BestsellerCard img={img7} />
        <BestsellerCard img={img8} />
        <BestsellerCard img={img9} />
        <BestsellerCard img={img10} />
        <BestsellerCard img={img11} />
        <BestsellerCard img={img12} />
      </div>
    </>
  );
};

export default BestSeller;
