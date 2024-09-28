"use client";
import "./globals.css";
import "./HomePage.css";
import Image from "next/image";
import Header from "./common/HeaderComponent/Header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "./common/Footer/Footer";
import { useState, useEffect } from "react";
import Banner from "../public/banner.jpg";


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
  const sheetId = "1pcaMM53EE60DBEvCGNyDUvHwUQt-UH3KXXLM_p-_zHk";
  const apiKey = "AIzaSyDx6z2_98O4-aGwdKUaxOoJFW7hqQXGoH8";
  //https://docs.google.com/spreadsheets/d/1pcaMM53EE60DBEvCGNyDUvHwUQt-UH3KXXLM_p-_zHk/edit?usp=sharing
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url, {
        method: "GET",
        headers: {
        },
      });
      const data = await response.json();
      let a = data.values.slice(1, data.values.length);
      setProducts(
        a.map((row, index) => ({
          id: index,
          name: row[0],
          price: row[1],
          img: row[2],
        }))
      );
    };
    fetchData();
    //fetch(url, {
    //  method: "GET",
    //  headers: {
    //    "Content-Type": "application/json",
    //  },
    //})
    //  .then((response) => response.json())
    //  .then((data) => {
    //    let a = data.values.slice(1, data.values.length);
    //    setProducts(
    //      a.map((row, index) => ({
    //        id: index,
    //        name: row[0],
    //        price: row[1],
    //        img: row[2],
    //      }))
    //    );
    //  });
  }, []);

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
            <h1 className="text-3xl font-bold text-white">Thở Linen</h1>
            <button className="btn btn-primary white_btn flex_center mt-2">
              <a href="/shop">Visit</a>
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
                    <img
                      className="w-full !h-[400px] object-cover"
                      src={item.img}
                      alt={item.name}
                    />
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
        <div className="text-center flex flex-col items-center">
          <div className="container_custom flex gap-6">
            <div className=" basis-0 grow-[1] flex flex-col justify-center py-5">
              <h4 className="italic ">Collection</h4>
              <h2 className="max-w-[600px] break-normal text-start">
                ĐẦM LINEN
              </h2>
              <p className="mt-5 max-w-[600px] text-start leading-6">
                Chiếc đầm Linen Tưng Premium cao cấp- nổi bật
                với chất liệu tự nhiên, thoáng mát và trẻ trung. Hãy để bản thân
                toả sáng trong mọi dịp.
              </p>
              <button className="btn btn-primary black_btn flex_center mt-5">
                <a href="/shop">View all</a>
              </button>
            </div>
            <div className="basis-[33%] grow-0 py-5">
              <img
                className="h-[600px] w-full object-contain"
                src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/438108279_418127164296928_7682725587209296259_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEm63XxF8P4wOmwRogW0lWHXCMxPgG7we5cIzE-AbvB7qBfjuhm5GesJ1Ix9WY_Mf48Tgs2zcWy4E4Fgzb3E3zA&_nc_ohc=2SUit7B1B_wQ7kNvgFroiFD&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=AXf8aHLGdOVT7aPXy4bInHY&oh=00_AYDZTTCsKo0AAZ8fo5wk_ZAowGkQoZ5oNnIpnDdhcr5h0g&oe=66F84D77"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="container_custom flex gap-6">
            <Image
              className="w-full object-fill h-[600px]"
              src={Banner}
              alt="banner"
            ></Image>
          </div>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="container_custom flex gap-6">
            <div className="basis-[33%] grow-0 py-5">
              <img
                className="w-full h-[600px] object-contain"
                src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/412618870_342998481809797_408582481796129765_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEawhpnJ2-iXONT1F3BQ0bwGPFoKnub1GEY8Wgqe5vUYU8TZycVOWVBVOE6vJNlmCzNM2gM3glGkKftcxVvcPIh&_nc_ohc=w4zBVL7dhHcQ7kNvgFgZThr&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=AKYqWCNa3BiCQZ3-q_1Uv3W&oh=00_AYAQExoeaiLREuGBMbGpMbl_2pQ-cXBEcbM0fKB3NMGxRg&oe=66F853CD"
                alt=""
              />
            </div>
            <div className="basis-0 grow-[1] flex flex-col justify-center items-end py-5">
              <h4 className="italic ">Collection</h4>
              <h2 className="max-w-[600px] break-normal text-end">ÁO DÀI</h2>
              <p className="mt-5 max-w-[600px] text-end leading-6">
                Chân dung người phụ nữ Việt Nam thướt tha, đằm thắm, hiền dịu
                trong tà áo dài được ví von như ngọc, như ngà và luôn là hình
                ảnh để lại ấn tượng trong ánh mắt các nam thanh, nữ tú bao thế
                hệ.
              </p>
              <button className="btn btn-primary black_btn flex_center mt-5">
                <a href="/shop">View all</a>
              </button>
            </div>
          </div>
        </div>
        {/*<div className="text-center border-[1px] py-20 flex flex-col items-center">
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
        </div>*/}
        <Footer></Footer>
      </div>
    </>
  );
}

