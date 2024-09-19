"use client";
import "./globals.css";
import "./HomePage.css";
import Header from "./common/HeaderComponent/Header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import Footer from "./common/Footer/Footer";
import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "Minh Thu",
    price: "0",
    img: "https://swag.vivathemes.com/wp-content/uploads/2023/10/purse-800x800.jpg",
  },
  {
    id: 2,
    name: "Minh Thu 2",
    price: "0",
    img: "https://swag.vivathemes.com/wp-content/uploads/2023/10/purse-800x800.jpg",
  },
  {
    id: 3,
    name: "Minh Thu 3",
    price: "0",
    img: "https://swag.vivathemes.com/wp-content/uploads/2023/10/purse-800x800.jpg",
  },
  {
    id: 4,
    name: "Minh Thu 4",
    price: "0",
    img: "https://swag.vivathemes.com/wp-content/uploads/2023/10/purse-800x800.jpg",
  },
  {
    id: 5,
    name: "Minh Thu 5",
    price: "0",
    img: "https://swag.vivathemes.com/wp-content/uploads/2023/10/purse-800x800.jpg",
  },
  {
    id: 6,
    name: "Minh Thu 6",
    price: "0",
    img: "https://swag.vivathemes.com/wp-content/uploads/2023/10/purse-800x800.jpg",
  },
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3, // Số lượng div trên mỗi slide
    slidesToSlide: 1, // Số lượng div chuyển động khi kéo
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function HomePage() {
  const [products1, setProducts] = useState([]);
  const [chunkedProducts, setChunkedProducts] = useState([]);
  const sheetId = "1pcaMM53EE60DBEvCGNyDUvHwUQt-UH3KXXLM_p-_zHk";
  const apiKey = "AIzaSyDx6z2_98O4-aGwdKUaxOoJFW7hqQXGoH8";
  //https://docs.google.com/spreadsheets/d/1pcaMM53EE60DBEvCGNyDUvHwUQt-UH3KXXLM_p-_zHk/edit?usp=sharing
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${apiKey}`;
  
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        //"Content-Type": "application/json",
        //"Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let a = data.values.slice(1, data.values.length);
        setProducts(a.map((row,index) => ({ id: index, name: row[0], price: row[1], img: row[2] })));
      });
  }, []);
  useEffect(() => {
    let a = [];
    for (let i = 0; i < products1.length; i += 3) {
      a.push(products1.slice(i, i + 3));
    }
    setChunkedProducts(a);
  },[products1]);

  return (
    <>
      <div>
        <Header></Header>
        <div className="w-full relative h-[100vh]">
          <video
            className=""
            width={"100%"}
            style={{ objectFit: "cover", height: "100vh" }}
            playsInline
            autoPlay
            muted
            loop
            src="https://swag.vivathemes.com/wp-content/uploads/2023/10/home-video.mp4"
          ></video>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-col flex_center">
            <h1 className="text-3xl font-bold text-white">THOLINEN</h1>
            <button className="btn btn-primary white_btn flex_center mt-2">
              <a href="/shop">Visit shop</a>
            </button>
          </div>
        </div>
        <div
          id="designWithPassion"
          className="py-20 text-center flex flex-col items-center border-[1px]"
        >
          <div className=" max-w-[1120px] flex_center flex-col m-5">
            <h4 className=" italic font- ">Designed with Passion</h4>
            <h2 className=" mt-[10px] font-sans leading-8">
              Unleash your personal style with our clothes and stay ahead of the
              trends
            </h2>
          </div>
        </div>
        <div className="text-center border-[1px] py-20 flex flex-col items-center">
          <div className="container_custom flex flex-col">
            <h4 className="italic">New Product</h4>
            <h2 className="">Innovation Now</h2>
            <Carousel
              responsive={responsive}
              autoPlay={true}
              autoPlaySpeed={3000}
              infinite={true}
            >
              {products1.map((item) => (
                <div key={item.id} className="product-card mt-5 p-5">
                  <div className="product-wrap">
                    <img className="w-full !h-[400px] object-cover" src={item.img} alt={item.name} />
                    <div className="product-info">
                      <h3>{item.name}</h3>
                      <p className=" opacity-60">{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
            <button className="btn btn-primary black_btn flex_center mt-5">
              <a href="/shop">View all</a>
            </button>
          </div>
        </div>
        <div className="text-center border-[1px] flex flex-col items-center bg-[#f7f7f7]">
          <div className="container_custom flex gap-6">
            <div className=" basis-0 grow-[1] flex flex-col justify-center">
              <h4 className="italic ">New Impression</h4>
              <h2 className="max-w-[600px] break-normal text-start">
                WOMEN STYLE HAS NEVER BEEN SO CHIQUE
              </h2>
              <p className="mt-5 max-w-[600px] text-start">
                Women’s chic style comes in many variations. However, in its
                stripped-down fashion form, chic style contains clean lines,
                monochromatic notes and is steeped in neutral colors.
                Highlighted by a bold accessory, this looks consist of classic
                pieces with a twist that never go out of style.
              </p>
              <button className="btn btn-primary black_btn flex_center mt-5">
                <a href="/shop">View all</a>
              </button>
            </div>
            <div className="basis-[33%] grow-0 ">
              <img
                className=" object-cover"
                src="https://swag.vivathemes.com/wp-content/themes/swag/assets/images/woman.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="text-center border-[1px] py-20 flex flex-col items-center">
          <div className="container_custom flex_center">
            <div className="basis-[25%] flex flex-col text-left p-5">
              <FontAwesomeIcon
                icon={faTruck}
                className="fa-fw text-[40px] text-[#cccccc] opacity-70"
              />
              <h3 className="uppercase text-[20px] mt-5 font-medium">Free Shipping</h3>
              <p className="mt-5 text-sm">Free shipping on any order within the United States.</p>
            </div>
            <div className="basis-[25%] flex flex-col text-left p-5">
              <FontAwesomeIcon
                icon={faTruck}
                className="fa-fw text-[40px] text-[#cccccc] opacity-70"
              />
              <h3 className="uppercase text-[20px] mt-5 font-medium">Free Shipping</h3>
              <p className="mt-5 text-sm">Free shipping on any order within the United States.</p>
            </div>
            <div className="basis-[25%] flex flex-col text-left p-5">
              <FontAwesomeIcon
                icon={faTruck}
                className="fa-fw text-[40px] text-[#cccccc] opacity-70"
              />
              <h3 className="uppercase text-[20px] mt-5 font-medium">Free Shipping</h3>
              <p className="mt-5 text-sm">Free shipping on any order within the United States.</p>
            </div>
            <div className="basis-[25%] flex flex-col text-left p-5">
              <FontAwesomeIcon
                icon={faTruck}
                className="fa-fw text-[40px] text-[#cccccc] opacity-70"
              />
              <h3 className="uppercase text-[20px] mt-5 font-medium">Free Shipping</h3>
              <p className="mt-5 text-sm">Free shipping on any order within the United States.</p>
            </div>

          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
