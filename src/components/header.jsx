import React from "react";
import { Link } from "react-router-dom";
import images from "./images/tickdorm-header-logo-COiPPhop.svg";
const Header = () => {
  return (
    <div className="home-page fixed top-0 left-0 right-0 bottom-0">
      <header>
        <nav className="nav h-25 pt-3 pl-15 pr-15 bg-black flex items-center justify-between">
          <div className="image rounded  border ">
            <img className="h-12" src={images} alt="image" />
          </div>
          <div className="desktop-navigation hidden lg:flex gap-20 items-center">
            <div className="search bg-white w-85 h-14 rounded-4xl flex">
              <input
                className="placeholder placeholder-black text-center"
                placeholder="Find Events"
                type="text"
              />
            </div>
            <ul className="list text-white flex gap-3">
              <a href="FindEventPage">Find Event</a>
              <a href="SignInPage">Sell Tickets</a>
              <a href="AboutPage">About Us</a>
            </ul>
            <div className="button text-white mr-10 flex gap-3">
              <a
                className="sign in rounded-sm bg-black border border-purple-400 h-10 w-25 text-center pt-2"
                href="SignInPage"
              >
                sign in
              </a>
              <a
                className="sign up rounded-md bg-purple-400 h-10 w-25 text-center pt-2"
                href="SignUpPage"
              >
                sign up
              </a>
            </div>
          </div>
          <div className="mobile-navigation md:hidden mb:block">
            <div className="hamburger h-15 w-7 flex flex-col gap-1 mr-0  items-center mt-10 ">
              <div className="bars h-0.5 w-7 bg-white"></div>
              <div className="bars h-0.5 w-7 bg-white"></div>
              <div className="bars h-0.5 w-7 bg-white"></div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Header;