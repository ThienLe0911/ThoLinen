"use client";
import React from "react";
import Header from "../common/HeaderComponent/Header";
import Footer from "../common/Footer/Footer";
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
  // const [sortSelect, setSortSelect] = useState(0);
  // const [products, setProducts] = useState([]);
  return (
    <div className="product">
      <Header></Header>
      <div className="product-wrap flex flex-col py-20 mt-20 items-center justify-center">
        <div className="product__title container_custom flex justify-between">
          <h2>SHOP</h2>
          <div className="sorting p-5 flex justify-between">
            <span>
              helo
            </span>
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
