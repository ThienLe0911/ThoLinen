import React from "react";
import Image from "next/image";
import LogoBrand from "../../../public/LogoBrand.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './Header.css'

export default function Header() {
  return (
    <div>
      <div className=" bg-white border-[1px] w-full fixed top-0 flex items-center justify-center header z-[1001]">
        <div className="container_custom flex_center" id="header">
          <div className="block__group">
            <div className="logo__container">
              <Link href="/">
                <Image src={LogoBrand} alt="logo" width="100" height="100" />
              </Link>
            </div>
          </div>
          <div className="block__group">
            <nav>
              <ul className="flex_center">
                <li className="link uppercase">
                  <Link href="/">Home</Link>
                </li>
                <li className="link uppercase">
                  <Link href="/about">About</Link>
                </li>
                <li className="link uppercase">
                  <Link href="/product">Shop</Link>
                </li>
                <li className="link uppercase">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex_center">
            <i className="w-5 h-5 ml-2">
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            <i className="w-5 h-5 ml-2">
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            <i className="w-5 h-5 ml-2">
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
