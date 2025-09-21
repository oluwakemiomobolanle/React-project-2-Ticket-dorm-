import React from "react";
import Meta from "/images/meta-icon.svg";
import X from "/images/x-icon.svg";
import Instagram from "/images/instagram-icon.svg";
import Tictok from "/images/tic-tok-icon.svg";
import Ft from "/images/tickdorm-footer-logo.svg";

const Footer = () => {
  return (
    <div className=" footer bg-gray-100 pl-5  lg:pl-20 lg:pr-20 lg:pt-20  lg:pb-3 pb-8 h-70 lg:h-115 ">
      <div className="lg:flex flex-row justify-between  ">
        <div className="ml-20 lg:ml-30 ">
          <img className="" src={Ft} alt="" />
        </div>
        <div className=" hidden  lg:flex  gap-8 justify-between">
          <div>
            <h1 className="font-bold">Services</h1>
            <ul>
              <li>
                <a href="">Create Event</a>
              </li>
              <li>
                <a href="">Sell Tickets</a>
              </li>
              <li>
                <a href="">Safety Tips</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">FAQs</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold">About</h1>
            <ul>
              <li>
                <a href="">About TicketDorm</a>
              </li>
              <li>
                <a href="">Terms and Conditions</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Cookie Policy</a>
              </li>
              <li>
                <a href="">Copyright Infringement Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-col">
          <div className="bg-blue-800 lg:h-10 lg:-w-30 hidden ml-10 rounded-full text-white text-center lg:block lg:pt-2 pl-2 lg:mb-8 lg:ml-10">
            <a href="">Get In Touch</a>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div className="flex">
              <h1 className="follow block lg:hidden">Follow Us</h1>
              <div className="h-12 w-12 border pt-3  pl-3 rounded-full">
                <img className="" src={Meta} alt="" />
              </div>
              <div className="h-12 w-12 border pt-3  pl-3 rounded-full">
                <img src={X} alt="" />
              </div>
              <div className="h-12 w-12 border  pt-3  pl-3  rounded-full">
                <img src={Instagram} alt="" />
              </div>
              <div className="h-12 w-12 border  pt-3  pl-3 rounded-full">
                <img src={Tictok} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center lg:mt-30 gap-3 flex  flex-col lg:flex-row  lg:justify-between ">
        <div>
          <h1 className="contact contact block lg:hidden">Contact</h1>
          <p>+234 (0) 906-835-9777</p>
          <p>support@ticketdorm.com</p>
        </div>
        <div>
          <p>© 2025 — TicketDorm</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
