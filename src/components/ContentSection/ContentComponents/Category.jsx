import React from "react";
import CategoryCard from "./Cards/CategoryCard";
import Carousel from "react-elastic-carousel";
import img1 from "../../../img/child-category.svg";
import img2 from "../../../img/cooking-category.svg";
import img3 from "../../../img/detective-category.svg";
import img4 from "../../../img/romance-category.svg";
import img5 from "../../../img/science-category.svg";
import img6 from "../../../img/scifi-category.svg";
import img7 from "../../../img/art-category.svg";
import "./CategoryStyles.css";
const Category = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 3 },
    { width: 768, itemsToShow: 4, itemsToScroll: 3 },
    { width: 990, itemsToShow: 5, itemsToScroll: 3 },
    { width: 1200, itemsToShow: 6 },
  ];
  return (
    <>
      <div
        className="d-flex px-4 flex-row align-items-center mb-4 "
        id="category"
      >
        <div className="mx-1">
          <h2>Category</h2>
        </div>
      </div>
      <Carousel breakPoints={breakPoints} itemPadding={[15, 0]}>
        <CategoryCard img={img1} text={"Children"} />
        <CategoryCard img={img2} text={"Cooking"} />
        <CategoryCard img={img3} text={"Detective"} />
        <CategoryCard img={img4} text={"Romance"} />
        <CategoryCard img={img5} text={"Science"} />
        <CategoryCard img={img6} text={"Science-fiction"} />
        <CategoryCard img={img7} text={"Art"} />
      </Carousel>
    </>
  );
};

export default Category;
