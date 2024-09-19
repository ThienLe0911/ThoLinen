import React from "react";
import './Footer.css'

function Footer() {
  return (
    <div className="footer w-full bg-black text-[#999999]">
      <div className="text-center border-[1px] py-20 flex flex-col items-center ">
        <div className="container_custom flex_center">
          <div className="flex justify-between w-full ">
            <div className="flex flex-col basis-1/4 flex-grow items-start">
              <h2>SHOP</h2>
              <nav>
                <ul className="text-[white]">
                  <li className="mt-5">
                    <a href="/shop">Shop</a>
                  </li>
                  <li className="mt-5">
                    <a href="/shop">Shop</a>
                  </li>
                  <li className="mt-5">
                    <a href="/shop">Shop</a>
                  </li>
                  <li className="mt-5">
                    <a href="/shop">Shop</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex flex-col basis-1/4 flex-grow items-start">
              <h2>SHOP</h2>
              <nav>
                <ul className="text-[white]">
                  <li className="mt-5">
                    <a href="/shop">Shop</a>
                  </li>
                  <li className="mt-5">
                    <a href="/shop">Shop</a>
                  </li>
                  <li className="mt-5">
                    <a href="/shop">Shop</a>
                  </li>
                  <li className="mt-5">
                    <a href="/shop">Shop</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex flex-col basis-1/4 flex-grow items-start">
              <h2>SHOP</h2>
              <p className="mt-5 block text-left">
                With a strong emphasis on creativity, quality, and
                sustainability, Swag is committed to providing fashion-forward
                individuals with unique and stylish clothing options.
              </p>
              <p className="mt-5 block text-left">
                Latest trends to create garments that are both contemporary and
                timeless.
              </p>
            </div>
            <div className="flex flex_col basis-1/4 flex-grow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
