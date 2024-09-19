import React from "react";
import Image from "next/image";
import LogoBrand from "../../../public/LogoBrand.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div>
      <div className=" bg-white border-[1px] w-full fixed top-0 flex items-center justify-center header z-10">
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
                <li className="link">
                  <Link href="/">Home</Link>
                </li>
                <li className="link">
                  <Link href="/about">About</Link>
                </li>
                <li className="link">
                  <Link href="/">Shop</Link>
                </li>
                <li className="link">
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex_center">
            <i className="w-5 h-5 m-5">
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            <i className="w-5 h-5 m-5">
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            <i className="w-5 h-5 m-5">
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}