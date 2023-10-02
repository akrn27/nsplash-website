import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLogin, onclick, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  // Disable Scroll when in navbar mobile screen
  isOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <div className="w-full overflow-hidden">
      {/* Burger Navbar Mobile */}
      {isOpen === false ? (
        <div className="sm:hidden p-3 shadow-md">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg className="h-9 w-9 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
              />
            </svg>
          </button>
        </div>
      ) : (
        ""
      )}

      {/* Isi Dari Burger Navbar */}
      {isOpen === true ? (
        <div className="container h-screen w-screen mx-auto flex flex-col items-center justify-center">
          <Link
            to="/"
            className="text-black font-semibold text-4xl mb-3 hover:text-gray"
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="text-black font-semibold text-4xl mb-3 hover:text-gray"
          >
            ABOUT
          </Link>
          <button className="text-black font-semibold text-4xl mb-3 hover:text-gray uppercase">
            {isLogin}
          </button>
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="h-11 w-11 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M6.293 6.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 111.414 1.414L13.414 12l4.293 4.293a1 1 0 11-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 11-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z"
              />
            </svg>
          </button>
        </div>
      ) : (
        ""
      )}

      <div className="sm:flex justify-around items-center font-poppins text-dark-gray my-4 hidden">
        <ul className="flex items-center gap-10">
          <Link to="/" className="text-xl rotate-3 text-orange">
            NSPLASH
          </Link>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </ul>
        <div>
          <Link to={link}>
            <button
              className="border border-solid border-slate-600 py-2 px-5 rounded-md shadow-xl"
              onClick={onclick}
            >
              {isLogin}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
