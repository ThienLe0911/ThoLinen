"use client";
import React, { useState } from "react";
import Header from "../common/HeaderComponent/Header";
import Footer from "../common/Footer/Footer";

function Product() {
  interface Option {
    value: number;
    label: string;
  }
  const sortOption: Array<Option> = [
    {
      label: "Default sorting",
      value: 0,
    },
    {
      label: "Sort by popularity",
      value: 1,
    },
    {
      label: "Sort by average rating",
      value: 2,
    },
    {
      label: "Sort by latest",
      value: 3,
    },
    {
      label: "Sort by price: low to high",
      value: 4,
    },
    {
      label: "Sort by price: high to low",
      value: 5,
    },
  ];
  //const [sortSelect, setSortSelect] = useState(0);
  //const [products, setProducts] = useState([]);
  return (
    <div className="product">
      <Header></Header>
      <div className="product-wrap">
        <div className="product__title flex justify-between">
          <h1>SHOP</h1>
          <div className="sorting p-5 flex justify-between">
            {/*<span>
              {
                sortOption.find(
                  (item: Option) =>
                    item.value == sortSelect
                )?.label
              }
            </span>*/}

            {/*{sortOption.map((item, index) => (
              <span
                key={index}
                className={sortSelect === index ? "active" : ""}
                onClick={() => setSortSelect(index)}
              >
                {item.label}
              </span>
            ))}*/}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Product;
