"use client";
import React, { use } from "react";
import Header from "../common/HeaderComponent/Header";
import Footer from "../common/Footer/Footer";
import "./contact.css";


function Contact() {
  return (
    <>
      <Header></Header>
      <div className="contact flex justify-center">
        <div className="container_custom py-20 mt-20">
          <div className="title">
            <h4>Get in touch</h4>
            <h2>CONTACT US</h2>
            <div className="min-h-[200px] bg-fixed bg-no-repeat bg-cover overflow-hidden w-full bg-[50%] flex items-center justify-center p-[1em] relative">
              <span className="bg-black opacity-0 absolute top-0 left-0 bottom-0 right-0 z-[1]"></span>
              <div className="bg-[50% 50%] bg-[url('https://swag.vivathemes.com/wp-content/uploads/2023/10/colorful.jpg')] bg-fixed bg-no-repeat bg-cover top-0 left-0 bottom-0 right-0 w-full h-full absolute object-cover"></div>
            </div>
          </div>
          <div className="detail flex justify-between mt-5">
            <div className="left pr-5 flex basis-1/2 flex-col">
              <p className="medium_text mt-5">
                Thank you for your interest in getting in touch with us. We
                value your feedback and inquiries. Please feel free to reach out
                to us through the following means:
              </p>
              <p className="medium_text mt-5">
                <span className="font-bold">Mailing Address: </span>123 Main
                Street City, State, Zip Code Country
              </p>
              <p className="medium_text mt-5">
                <span className="font-bold">Phone: </span>+1 (555) 123-4567
              </p>
              <p className="medium_text mt-5">
                <span className="font-bold">Email: </span>123 Main Street City,
                State, Zip Code Country
              </p>
            </div>
            <div className="right flex basis-1/2 px-5">
              <div className="form w-full mt-5">
                <form>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="name"
                      className=""
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      className="w-full border-solid border-[1px] border-[#999999] p-2"
                    />
                  </div>
                  <div className="flex flex-col mt-5">
                    <label
                      htmlFor="email"
                      className=""
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full border-solid border-[1px] border-[#999999] p-2"
                    />
                  </div>
                  <div className="flex flex-col mt-5">
                    <label
                      htmlFor="message"
                      className=""
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Enter your message"
                      className="w-full border-solid border-[1px] border-[#999999] p-2"
                    ></textarea>
                  </div>
                  <button className="black_btn btn mt-5">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Contact;
