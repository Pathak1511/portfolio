import React from "react";

function About() {
  return (
    <div
      id="about"
      className="max-md:flex-1 md:flex justify-between items-center py-10 transition-opacity duration-300"
    >
      <div className="max-md:hidden md:w-1/2 flex items-center relative">
        <div className="about_img z-0"></div>
        <img
          src="/assests/images/about.png"
          className="lg:w-[320px] xl:w-[420px] mx-[auto] z-10"
        />
      </div>
      <div className="max-md:w-full md:w-1/2">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-10">
          About
        </h2>
        <p className="py-4 px-4 text-lg font-bold bg-blue-200 text-black md:w-[90%]">
          Curious about me ?
        </p>
        <br />
        <p className="md:w-[90%] py-4 px-4 bg-blue-100 max-md:text-sm">
          I’m Hritik Pathak, a passionate Software Developer with a knack for
          solving complex problems and delivering impactful solutions. With a
          background in Data Science and hands-on experience in building
          efficient and scalable applications, I love turning ideas into reality
          through code.
          <br />
          <br />
          Currently, I’m part of DePronto Infotech, where I’ve had the
          opportunity to lead initiatives that improved application performance
          and user satisfaction. From optimizing APIs to redeveloping tools like
          calculators for ICICI Prudential, my focus has always been on creating
          seamless user experiences and driving operational efficiency.
          <br />
          <br />
          Before this, I honed my skills at NimbleWork, working with an
          incredible team to enhance product reliability and performance.
          Whether it was fixing critical data errors, implementing backend
          solutions, or fine-tuning React components, I always aim for precision
          and excellence.
          <br />
          <br />
          What excites me most about development is the blend of creativity and
          logic. Whether it’s solving algorithmic challenges or designing
          microservice architectures, I thrive on crafting solutions that make a
          difference.
        </p>
      </div>
    </div>
  );
}

export default About;
