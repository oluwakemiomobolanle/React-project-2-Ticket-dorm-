
const AboutPage = () => {
  return (
    <div className=" mt-5">
      <section className="bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[460px] bg-gray-500 px-6 sm:px-12 lg:px-40 text-center text-white flex flex-col justify-center pt-20 lg:pt-45">
        <h1 className="font-bold mb-5 text-2xl lg:text-5xl leading-snug">
          Your Gateway to Unforgettable <br />
          Experiences
        </h1>
        <p className="text-base sm:text-lg lg:text-2xl">
          We connect you with the best concerts, sports games, theater
          performances and <br className="hidden lg:block" /> festivals. Our
          mission is to make discovering, buying & selling tickets easy and
          secure.
        </p>
      </section>
      <section className="bg-gray-100 px-6 sm:px-12 lg:px-20 py-10 sm:py-16 lg:py-20 mt-6 mb-6 sm:mt-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">
          About Us
        </h1>
        <p className="text-base sm:text-lg lg:text-2xl leading-relaxed lg:leading-[2]">
          Welcome to TicketDorm, where your next unforgettable experience is
          just a click away. We are dedicated to connecting you with the best
          events around, from electrifying concerts and thrilling sports games
          to captivating theater performances and vibrant festivals. Our mission
          is to make discovering, buying and selling tickets seamless and
          secure, ensuring that every event you attend is a memorable one. Join
          us on this exciting journey and be part of the TicketDorm community!
        </p>
        <p className="text-base sm:text-lg lg:text-2xl leading-relaxed lg:leading-[2] mt-6 sm:mt-8 lg:mt-10">
          TicketDorm was founded with a passion for live events and a commitment
          to making ticket purchasing seamless and enjoyable. Our team consists
          of event enthusiasts who understand the thrill of a live performance
          and the excitement of being part of a vibrant audience. We strive to
          bring that excitement to you by providing a platform that is easy to
          navigate, secure and filled with a diverse range of events.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
