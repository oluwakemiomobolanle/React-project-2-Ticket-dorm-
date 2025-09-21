import images from "./images/easy-ticketing-image-DONl_HH4.webp";
import simage from "./images/wide-range-image-wdx2k3fL.webp";
import tImage from "./images/sell-ticket-effortlessly-image.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="main overflow-x-hidden">
      <div className="landing-view flex justify-center items-center flex-col text-white px-4 py-16 text-center">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
          Unlock Unforgettable Experience With{" "}
          <br className="hidden md:block" />
          TicketDorm
        </h1>
        <h3 className="mt-6 mb-8 font-medium text-base sm:text-lg lg:text-xl max-w-xl mx-auto">
          Buy and sell tickets to your favorite concerts, sports games and
          theater shows with ease and confidence.
        </h3>
        <Link
          className="rounded-full font-bold bg-purple-400 px-6 py-3 hover:bg-purple-500 transition"
          to="/FindEventPage"
        >
          Get Ticket Now
        </Link>
      </div>
      <div className="bg-gray-100 py-16 flex flex-col items-center text-center px-4">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl pb-6 bg-gradient-to-r from-green-500 via-yellow-600 to-blue-500 text-transparent bg-clip-text">
          Looking to Buy Tickets?
        </h1>
        <Link
          className="rounded-full font-medium border border-purple-400 bg-white px-8 py-3 hover:bg-purple-50 transition"
          to="/FindEventPage"
        >
          Find Event
        </Link>
      </div>
      <div className="bg-blue-900 text-white px-5 py-16 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 pb-12">
          <div className="max-w-xl">
            <h1 className="font-bold text-2xl md:text-3xl pb-3">
              Secure & Easy Ticketing
            </h1>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
              At TicketDorm, we prioritize your security and convenience. Our
              streamlined checkout process and encrypted payment gateways ensure
              that your transactions are safe and your personal information is
              protected. Buying tickets has never been easier — with just a few
              clicks, you can secure your spot at the hottest events in town.
            </p>
          </div>
          <img
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-xl"
            src={images}
            alt="image"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 pt-12">
          <img
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-xl"
            src={simage}
            alt="image"
          />
          <div className="max-w-xl">
            <h1 className="font-bold text-2xl md:text-3xl pb-3">
              Wide Range of Events
            </h1>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
              Discover a diverse selection of events catering to every taste and
              interest. Whether you're into electrifying concerts, thrilling
              sports matches, captivating theater performances, or vibrant
              festivals, TicketDorm offers something for everyone.
            </p>
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-center bg-no-repeat relative min-h-[320px] sm:min-h-[400px] lg:min-h-[610px] w-full"
        style={{ backgroundImage: `url(${tImage})` }}
      >
        <div className="second absolute inset-0 bg-purple-400/70 lg:bg-purple-400/80 w-full lg:w-1/2 flex items-center">
          <div className="px-6 lg:px-20 text-white">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Sell Your Tickets Effortlessly
            </h1>
            <p className="mt-6 text-base lg:text-xl leading-relaxed">
              Got tickets you can't use? TicketDorm makes it simple to sell them
              to a large audience of potential buyers. List your tickets quickly
              and easily, set your price, and connect with others who are eager
              to experience the event you can't attend.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-purple-400 text-center py-16 lg:py-24 flex flex-col justify-center px-4">
        <h1 className="text-white text-2xl sm:text-3xl lg:text-6xl font-bold mb-6 leading-snug">
          Create a Free Account and Sell Tickets Online Today!
        </h1>
        <Link
          className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-900 transition inline-block"
          to="/SignUpPage"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
};

export default Hero;
