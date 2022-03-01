import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from '../../../assets/svgs/menu.svg'
import './Navbar.css'


const Navbar = () => {
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);
  };

  return (
    <div className="z-30 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-2.5 md:px-10">
        <div id="log" className="w-14 md:mt-4 text-3xl font-bold text-primary-500 font-sans ">
        <svg width="129" height="36" viewBox="0 0 129 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5004 0.0243607C15.5527 0.219238 13.8107 1.02658 12.4656 2.35244C12.1606 2.65171 11.727 3.15631 11.6277 3.32335C11.602 3.36858 11.4881 3.38598 11.0838 3.41382C7.47499 3.64698 4.93924 4.93456 3.77794 7.12692C3.56111 7.53755 3.41779 7.88207 3.31121 8.2405L3.23036 8.52586L2.85919 8.5189C2.55784 8.51542 2.45494 8.52934 2.31896 8.58502C2.13154 8.66506 1.91471 8.85645 1.82284 9.01653C1.74199 9.16965 3.53803e-05 17.6781 3.53803e-05 17.9391C-0.00363962 18.3567 0.279336 18.7325 0.683586 18.8439C0.896736 18.903 3.08336 19.1049 3.49864 19.1049C3.93229 19.1014 4.22629 18.9413 4.40636 18.6038C4.49824 18.4333 4.51661 18.2871 4.93556 14.1286C5.17444 11.7657 5.37289 9.72992 5.37289 9.60464C5.37289 9.19749 5.11564 8.84601 4.71507 8.71029C4.50191 8.6407 4.50191 8.69986 4.70037 8.07695C5.01274 7.08516 5.52724 6.25346 6.23652 5.58531C7.05972 4.81276 8.21734 4.26641 9.54402 4.02629C10.2606 3.89405 11.2529 3.81402 11.2529 3.89058C11.2529 3.9045 11.2308 3.94625 11.2014 3.98454C11.1096 4.11329 10.7825 4.81624 10.6686 5.14684C10.3562 6.02726 8.24674 13.6797 7.36474 17.1387C6.67384 19.8357 6.35044 21.158 6.00867 22.6892C5.89842 23.1973 5.79552 23.6427 5.78817 23.6845C5.77347 23.7506 5.79184 23.7576 6.05644 23.7784C6.21079 23.7924 6.88332 23.8028 7.54849 23.8028C8.50767 23.8028 8.75389 23.8132 8.75389 23.848C8.75389 23.8724 8.54074 26.3849 8.27614 29.4333C7.76164 35.4154 7.77634 35.1405 7.96377 35.4467C8.07769 35.6311 8.31657 35.833 8.52972 35.9269L8.69877 36H16.0855H23.4723L23.656 35.913C23.8986 35.8016 24.1044 35.5998 24.2183 35.3632C24.3175 35.1509 24.2992 35.4397 24.9276 25.7411C24.9974 24.7111 25.0599 23.855 25.0709 23.8411C25.0819 23.8237 31.6786 23.8237 39.7342 23.8411C47.7898 23.855 57.8593 23.8689 62.1149 23.8689C68.9615 23.8724 69.8508 23.8654 69.8472 23.8202C69.8398 23.775 73.1841 23.768 99.4199 23.768H129V23.6949C129 23.5731 128.75 22.0837 128.61 21.3842C127.085 13.6727 123.282 6.40309 117.63 0.389755L117.262 0L67.4437 0.00696182C40.0466 0.00696182 17.5702 0.0173988 17.5004 0.0243607Z" fill="#1CA0E3"/>
        </svg>

        </div>

        <div
            onClick={onClick}
            className={`md:hidden`}
        ><img src={menu} className='' /></div>

        <div className={`
            ${!active && 'hidden'}
            bg-white absolute md:bg-transparent flex flex-col top-full w-full left-0 z-20
            md:static md:w-auto md:flex-row md:flex
        `}>
          <ul className="flex flex-col md:flex md:flex-row w-full items-center">
            <li className="list-none md:mr-5 flex items-center justify-center">
              <Link to="/" className="flex w-full text-white font-semibold hover:text-primary-600 cursor-pointer pt-2.5 px-2.5">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="flex w-full text-white font-semibold hover:text-primary-600 cursor-pointer pt-2.5 px-2.5">
                Services
              </Link>
            </li>
            <li>
              <Link to="/whoweare" className="flex w-full text-white font-semibold hover:text-primary-600 cursor-pointer pt-2.5 px-2.5">
                Who we are
              </Link>
            </li>
            <li>
              <Link to="/login" className="flex w-full text-white font-semibold hover:text-primary-600 cursor-pointer pt-2.5 px-2.5">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="flex w-full text-white font-semibold hover:text-primary-600 cursor-pointer pt-2.5 px-2.5">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
