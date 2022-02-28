import React from "react";
import Navbar from "../Navbars/navbar/Navbar";
import bus from "../../assets/images/bus.png";
import "./Header.css";

const Header = () => {
 
  return (
    <div className="phBackground -z-30 min-h-full font-body">
      <div className="h-screen flex-col">
        <Navbar />
        <div className="absolute -top-0 -left-0 h-full w-full flex items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat">
          <div className="flex flex-col w-auto lg:flex lg:flex-row md:flex md:flex-row flex-wrap justify-center items-center justify-between">
            <div className="flex flex-col w-40 mx-5 md:mt-20 md:w-80">
              <div className="flex flex-row">
                <span>
                  <svg
                    className="h-7 w-7 md:h-10 md:w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 64 64"
                  >
                    <path
                      fill="#ffce31"
                      d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    className="h-7 w-7 md:h-10 md:w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 64 64"
                  >
                    <path
                      fill="#ffce31"
                      d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    className="h-7 w-7 md:h-10 md:w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 64 64"
                  >
                    <path
                      fill="#ffce31"
                      d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    className="h-7 w-7 md:h-10 md:w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 64 64"
                  >
                    <path
                      fill="#ffce31"
                      d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    className="h-7 w-7 md:h-10 md:w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 64 64"
                  >
                    <path
                      fill="#ffce31"
                      d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex flex-col py-2.5">
                <div>
                  <h1 className="w-full text-white font-bold text-xl ms:text-2xl md:text-4xl lg:text-4xl xl:text-5xl">
                    Fast movement and easy.
                  </h1>
                </div>
                <div className="py-6">
                  <h3 className="w-full text-white font-regular ms:text-2xl md:text-2xl lg:text-2xl xl:text-3xl">
                    Get notified anytime, anywhere the bus is.
                  </h3>
                </div>
                <div className="py-6">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white md:text-xl md:font-bold py-2 px-4 rounded">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden lg:block w-80 h-auto mx-20">
              <img src={bus} className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
