import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoBrand from "../../../public/LogoBrand.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer w-full bg-black text-[#999999]">
      <div className="text-center border-[1px] py-20 flex flex-col items-center ">
        <div className="container_custom">
          <div className="flex justify-between w-full">
            <div className="flex flex-col basis-1/4 flex-grow items-start text-start">
              <h3>SHOP</h3>
              <nav>
                <ul className="text-[white]">
                  <li className="mt-5">
                    <a href="/shop">All products</a>
                  </li>
                  <li className="mt-5">
                    <a href="/shop">For men</a>
                  </li>
                  <li className="mt-5">
                    <a href="/shop">For women</a>
                  </li>
                  <li className="mt-5">
                    <a href="/shop">Fashion Advice</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex flex-col basis-1/4 flex-grow items-start text-start">
              <h3>COMPANY</h3>
              <nav>
                <ul className="text-[white]">
                  <li className="mt-5">
                    <a href="/shop">Home</a>
                  </li>
                  <li className="mt-5">
                    <a href="/shop">About</a>
                  </li>
                  <li className="mt-5">
                    <a href="/shop">Blog</a>
                  </li>
                  <li className="mt-5">
                    <a href="/shop">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex flex-col basis-1/4 flex-grow items-start">
              <h3>ABOUT US</h3>
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
            <div className="flex flex_col basis-1/4 flex-grow justify-end logo">
              <Link href="/">
                <Image className="object-cover" src={LogoBrand} alt="logo" width="300" height="300" />
              </Link>
            </div>
          </div>
          <div className="flex justify-between w-full ">
            <div className="flex basis-1/4 ">
            </div>
          </div>
          <div className="flex justify-between w-full mt-5">
            <div className="flex items-end justify-start basis-1/4 logo">
              <Link href='/'>
                <FontAwesomeIcon icon={faFacebook} className='text-lg mr-5'></FontAwesomeIcon>
              </Link>
              <Link href='/'>
                <FontAwesomeIcon icon={faInstagram} className='text-lg mr-5'></FontAwesomeIcon>
              </Link>
              <Link href='/'>
                <FontAwesomeIcon icon={faTiktok} className='text-lg'></FontAwesomeIcon>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
