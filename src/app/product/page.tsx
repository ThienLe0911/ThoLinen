"use client";
import React, { useState } from "react";
import Header from "../common/HeaderComponent/Header";
import Footer from "../common/Footer/Footer";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './product.css'

function Product() {
  // interface Option {
  //   value: number;
  //   label: string;
  // }

  // const sortOption: Array<Option> = [
  //   {
  //     label: "Default sorting",
  //     value: 0,
  //   },
  //   {
  //     label: "Sort by popularity",
  //     value: 1,
  //   },
  //   {
  //     label: "Sort by average rating",
  //     value: 2,
  //   },
  //   {
  //     label: "Sort by latest",
  //     value: 3,
  //   },
  //   {
  //     label: "Sort by price: low to high",
  //     value: 4,
  //   },
  //   {
  //     label: "Sort by price: high to low",
  //     value: 5,
  //   },
  // ];
  const [sortSelect, setSortSelect] = useState(0);
  const [showSort, setShowSort] = useState(false);
  // const [products, setProducts] = useState([]);
  return (
    <div className="product">
      <Header></Header>
      <div className="product-wrap flex flex-col py-20 mt-20 items-center justify-center">
        <div className="product__title container_custom flex justify-between">
          <h2>SHOP</h2>
          <div className="sorting p-2 flex justify-between bg-[#f7f7f7] h-fit relative">
            <p onClick={() => { setShowSort(!showSort) }}>
              Default sorting
            </p>
            {
              showSort == true ? <FontAwesomeIcon
                icon={faCaretUp}
                className="fa-fw text-[40px]"
              /> : <FontAwesomeIcon
                icon={faCaretDown}
                className="fa-fw text-[40px]"
              />
            }

            <div className={(!showSort && 'hidden') + " absolute top-full w-full bg-[#f7f7f7] left-0 z-10"}>
              <ul className="flex flex-col w-full">
                <li onClick={() => setSortSelect(0)} className={(sortSelect == 0 ? 'bg-[#a7a6a6]' : '') + " w-full p-2"}>
                  <span>Default sorting</span>
                </li>
                <li onClick={() => setSortSelect(1)} className={(sortSelect == 1 ? 'bg-[#a7a6a6]' : '') + " w-full p-2"}>
                  <span>Sort by popularity</span>
                </li>
                <li onClick={() => setSortSelect(2)} className={(sortSelect == 2 ? 'bg-[#a7a6a6]' : '') + " w-full p-2"}>
                  <span>Sort by average rating</span>
                </li>
                <li onClick={() => setSortSelect(3)} className={(sortSelect == 3 ? 'bg-[#a7a6a6]' : '') + " w-full p-2"}>
                  <span>Sort by latest</span>
                </li>
                <li onClick={() => setSortSelect(4)} className={(sortSelect == 4 ? 'bg-[#a7a6a6]' : '') + " w-full p-2"}>
                  <span>Sort by price: low to high</span>
                </li>
                <li onClick={() => setSortSelect(5)} className={(sortSelect == 5 ? 'bg-[#a7a6a6]' : '') + " w-full p-2"}>
                  <span>Sort by price: high to low</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="product_list container_custom flex flex-wrap justify-between">
          <div className="product_list-item basis-[30%] flex flex-col">
            <img src="https://swag.vivathemes.com/wp-content/uploads/2023/10/backpack2-800x800.jpg" alt="product" />
            <p className="uppermedium_text">AdventurePro 30L Outdoor Backpack</p>
            <p className="medium_text text-gray-400">$250.00 – $260.00</p>
          </div>
          <div className="product_list-item basis-[30%]">
            <img src="https://swag.vivathemes.com/wp-content/uploads/2023/10/backpack2-800x800.jpg" alt="product" />
            <p className="uppermedium_text">AdventurePro 30L Outdoor Backpack</p>
            <p className="medium_text text-gray-400">$250.00 – $260.00</p>
          </div>
          <div className="product_list-item basis-[30%]">
            <img src="https://swag.vivathemes.com/wp-content/uploads/2023/10/backpack2-800x800.jpg" alt="product" />
            <p className="uppermedium_text">AdventurePro 30L Outdoor Backpack</p>
            <p className="medium_text text-gray-400">$250.00 – $260.00</p>
          </div>
          <div className="product_list-item basis-[30%]">
            <img src="https://swag.vivathemes.com/wp-content/uploads/2023/10/backpack2-800x800.jpg" alt="product" />
            <p className="uppermedium_text">AdventurePro 30L Outdoor Backpack</p>
            <p className="medium_text text-gray-400">$250.00 – $260.00</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Product;
