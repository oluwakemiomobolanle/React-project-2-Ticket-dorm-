import React, { Component } from "react";
import Card from "../components/card";
const FindEventPage = () => {
  return (
    <div>
      <section className="background bg-[url('/images/event-hero-bg.jpg')] bg-cover bg-center pt-20 lg:pt-40 text-center">
        <h1 className="lg:text-5xl text-3xl font-bold text-white">
          Discover Your Next Adventure with <br /> TicketDorm
        </h1>
        <p className="text-white mb-5 mt-3 lg:mt-5 lg:mb-10 text-xl lg:text-2xl">
          Explore a world of exciting events from electrifying concerts and
          thrilling <br />
          sports games to captivating theater performances and vibrant festivals
        </p>
        <form action="">
          <input
            className="lg:w-96 w-72 inline-block h-9 lg:h-12 bg-gray-200 rounded-l-md px-3"
            type="text"
            placeholder="Search Events"
          />
          <button className="bg-purple-400 lg:h-12 h-9 lg:w-32 w-24 text-white rounded-r-md">
            Search
          </button>
        </form>
      </section>
      <section className="w-auto mt-9 lg:mt-15 px-6 lg:px-10">
        <div className="mb-10">
          <div className="flex justify-between items-center">
            <h1 className="lg:text-3xl  font-bold">Upcoming Events</h1>
            <a className="text-pink-700 text-lg lg:text-2xl" href="">
              View More
            </a>
          </div>
          <div className="flex gap-6 overflow-x-auto lg:overflow-x-hidden pb-4 no-scrollbar">
            <Card
              className="min-w-[250px] max-w-[250px]"
              img="/images/txruelsyxetbg61g3rp3.jpg"
              title={<a href="">Rex hit</a>}
              date={<a href="">Sat 19 July, 2025 23:04 GMT +1</a>}
              price={<a href="">Price 1000</a>}
              loacation={<a href="">Rayfield</a>}
            />
            <Card
              className="min-w-[250px] max-w-[250px]"
              img="/images/pimuriogxpuv543zcwpk.jpg"
              title={<a href="">Jos Music Fest</a>}
              date={<a href="">Sat July 19, 2025 23:04 GMT +1</a>}
              price={<a href="">Price 1000</a>}
              loacation={<a href="">Rayfield</a>}
            />
            <Card
              className="min-w-[250px] max-w-[250px]"
              img="/images/r6uw5s0a3vazycgyhddv.jpg"
              title={<a href="">Music Concert</a>}
              date={<a href="">Sat July 28, 2025 11:11 GMT +1</a>}
              price={<a href="">Free</a>}
              loacation={<a href="">Old Airport Jos Plateau Sta...</a>}
            />
            <Card
              className="min-w-[250px] max-w-[250px]"
              img="/images/abx6tuxwz5y4lqlhydbw.png"
              title={<a href="">Bro</a>}
              date={
                <a href="">
                  Thu Dec 25, 2025 <br /> 05:15 GMT +1
                </a>
              }
              price={<a href="">Price 500</a>}
              loacation={<a href="">Jos</a>}
            />
            <Card
              className="min-w-[250px] max-w-[250px]"
              img="/images/cxt4laeaxbxdhayampqt.jpg"
              title={<a href="">Freya</a>}
              date={<a href="">Tues, 2025 23:04 GMT +1</a>}
              price={<a href="">Free</a>}
              loacation={<a href="">Rayfield</a>}
            />
          </div>
        </div>
        <div className="mb-10">
          <div className="flex justify-between items-center">
            <h1 className="lg:text-3xl text-2xl font-bold">Upcoming Events</h1>
            <a className="text-pink-700 text-lg lg:text-2xl" href="">
              View More
            </a>
          </div>
          <div className="flex gap-6 overflow-x-auto lg:overflow-x-hidden pb-4 no-scrollbar">
            <Card
              className="min-w-[250px] max-w-[250px]"
              img="/images/mp0r90pmht7svsz8qxtw.jpg"
              title={<a href="">Carbon 02</a>}
              date={
                <a href="">
                  Fri Aug 9, 2024 22:00 <br /> GMT +1
                </a>
              }
              price={<a href="">Price 1000</a>}
              loacation={<a href="">Rayfield</a>}
            />
            <Card
              className="min-w-[250px] max-w-[250px]"
              img="/images/mrcefpwjfs58mdelptxv.jpg"
              title={<a href="">City Connect</a>}
              date={
                <a href="">
                  Sat Aug 3, 2024 22:00 <br /> GMT +1
                </a>
              }
              price={<a href="">Price 500</a>}
              loacation={<a href="">Nhub</a>}
            />
          </div>
        </div>
        <div className="mb-10">
          <div className="flex justify-between items-center">
            <h1 className="lg:text-3xl text-2xl font-bold">Show Comedy</h1>
            <a className="text-pink-700 text-lg lg:text-2xl" href="">
              View More
            </a>
          </div>
          <div className="flex gap-6 overflow-x-auto lg:overflow-x-hidden pb-4 no-scrollbar">
            <Card
              className="min-w-[250px] max-w-[250px]"
              img="/images/rrwnsyltkkescbsl48i3.jpg"
              title={<a href="">Shola And Me</a>}
              date={<a href="">Fri Aug 2, 2025 16:00 GMT +1</a>}
              price={<a href="">Price 100</a>}
              loacation={<a href="">Nhub Foundation</a>}
            />
          </div>
        </div>
        <div className="mb-20">
          <div className="flex justify-between items-center">
            <h1 className="lg:text-3xl text-2xl font-bold">Music Context</h1>
            <a className="text-pink-700 text-lg lg:text-2xl" href="">
              View More
            </a>
          </div>
          <div className="flex gap-6 overflow-x-auto lg:overflow-x-hidden pb-4 no-scrollbar">
            <Card
              className="min-w-[250px] max-w-[250px]"
              img="/images/r6uw5s0a3vazycgyhddv.jpg"
              title={<a href="">Jos Music Fest</a>}
              date={
                <a href="">
                  Sat June 28, 2025 11:11 <br /> GMT +1
                </a>
              }
              price={<a href="">Price 1000</a>}
              loacation={<a href="">Old Airport Jos Plateau sta..</a>}
            />
            <Card
              className="min-w-[250px] max-w-[250px]"
              img="/images/abx6tuxwz5y4lqlhydbw.png"
              title={<a href="">Music concert</a>}
              date={<a href="">Thu Dec, 2025 05:16 GMT +1</a>}
              price={<a href="">Price 500</a>}
              loacation={<a href="">Jos</a>}
            />
            <Card
              className="min-w-[250px] max-w-[250px]"
              img="/images/pimuriogxpuv543zcwpk.jpg"
              title={<a href="">Bro</a>}
              date={<a href="">Fri 19 Mar, 2025 15:02 GMT +1</a>}
              price={<a href="">Price 2000</a>}
              loacation={<a href="">Jos</a>}
            />
            <Card
              className="min-w-[250px] max-w-[250px]"
              img="/images/abx6tuxwz5y4lqlhydbw.png"
              title={<a href="">Freya</a>}
              date={<a href="">Tues Dec 10, 2024 15:53 GMT +1</a>}
              price={<a href="">Free</a>}
              loacation={<a href="">Rayfield</a>}
            />
            <Card
              className="min-w-[250px] max-w-[250px]"
              img="/images/wqbv8hpb3dvej1fickfy.jpg"
              title={<a href="">Google December</a>}
              date={<a href="">Sat 19 July, 2025 23:04 GMT +1</a>}
              price={<a href="">Price 120</a>}
              loacation={<a href="">Jos</a>}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindEventPage;
