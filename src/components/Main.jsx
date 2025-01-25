import React from "react";

import Link from "next/link";

function Main() {
  return (
    <div className="max-md:flex-1 md:flex justify-between items-center max-md:mt-8 lg:mt-12 xl:mt-8 2xl:mt-4">
      <div className="max-md:w-full max-md:px-0 md:w-1/2 md:px-12 flex-1 justify-center items-center">
        <div className=" bg-black rounded-md">
          <div className=" h-8 xl:h-12 bg-gray-800 rounded-t-md rounded-r-md"></div>
          <div className="p-2 xl:p-4 2xl:p-6">
            <h1 className="max-md:text-sm md:text-md lg:text-lg xl:text-xl text-white typing">
              <span className="text-[#f9f9f9]">$</span>&nbsp;
              <span className="text-orange-400">echo</span>&nbsp;
              <span className="text-green-400">&quot;Hritik Pathak&quot;</span>
            </h1>
            <h1 className="max-md:text-sm md:text-md lg:text-lg xl:text-xl text-white typing">
              &gt; <span className="text-orange-400">Software Developer</span>
              &nbsp;&& <span className="text-orange-400">Problem Solver</span>
            </h1>
          </div>
        </div>

        <p className="max-md:text-base md:text-base lg:text-2xl xl:text-4xl font-bold max-md:mt-4 lg:mt-4 xl:mt-8">
          Software Developer specializing in React, Next.js, and scalable
          architectures
        </p>
        <p className="max-md:text-sm md:text-sm lg:text-base xl:text-lg max-md:mt-4 xl:mt-8 lg:mt-4">
          I&apos;m a Software Developer with a passion for building scalable web
          applications and exploring efficient solutions in React, Node.js, and
          Docker-based architectures.
        </p>
        <div className="mt-8 max-md:text-center">
          <Link
            href="/assests/pdfs/Hritik-Pathak.pdf"
            target="_blank"
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-sm text-sm px-8 py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            View Resume
          </Link>
        </div>
      </div>
      <div className="flex-1 justify-center items-center md:px-8">
        <img src="/assests/images/home.svg" className="w-[100%]" />
      </div>
    </div>
  );
}

export default Main;
