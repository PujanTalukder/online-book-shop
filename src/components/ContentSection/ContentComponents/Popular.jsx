import React from "react";
import PopularCard from "./Cards/PopularCard";
import "./PopularStyles.css";
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
import { Link } from "react-router-dom";
const Popular = () => {
  return (
    <>
      <div
        className="d-flex px-4 flex-row justify-content-between align-items-center mb-4 "
        id="popular"
      >
        <div className="mx-1">
          <h2>Popular Now</h2>
        </div>
        <div className="mx-2">
          <Link style={{ textDecoration: "none" }}>
            <h3>View all</h3>
          </Link>
        </div>
      </div>
      <div className="card-container">
        <PopularCard img={img1} />
        <PopularCard img={img2} />
        <PopularCard img={img3} />
        <PopularCard img={img4} />
        <PopularCard img={img5} />
        <PopularCard img={img6} />
        <PopularCard img={img7} />
        <PopularCard img={img8} />
        <PopularCard img={img9} />
        <PopularCard img={img10} />
        <PopularCard img={img11} />
        <PopularCard img={img12} />
      </div>
    </>
  );
};

export default Popular;
