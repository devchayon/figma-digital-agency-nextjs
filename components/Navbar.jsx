import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => (
  <>
    <p>
      <Link href="#home">Home</Link>
    </p>
    <p>
      <Link href="#service">Service</Link>
    </p>
    <p>
      <Link href="#project">Our Project</Link>
    </p>
    <p>
      <Link href="#about">About Us</Link>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="py-4 flex justify-between">
      <div className="flex justify-start items-center logo-png ">
        <Image
          className=""
          src="/assets/logo.png"
          alt="logo"
          width="200"
          height="60"
        />
      </div>
      <div className="hidden md:flex gap-5 justify-center items-center cursor-pointer z-10 0 navbar-text">
        <Menu className="focus:text-blue-50" />
      </div>
      <button className="hidden md:flex justify-end items-center border-gray-50 border-2 px-4 py-1 rounded-sm cursor-pointer z-10 text-color-btn">
        <a href="#contact">Contact</a>
      </button>
      <div className="md:hidden relative flex items-center z-20">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            className="cursor-pointer"
            size="27"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            className="cursor-pointer"
            size="27"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="absolute flex justify-end items-end flex-col text-right p-8 pr-5 right-0 top-8 rounded-md gap-3 sha shadow-md mobile-menu-color scale-up-center navbar-text">
            <p onClick={() => setToggleMenu(false)}>
              <Link href="#home">Home</Link>
            </p>
            <p onClick={() => setToggleMenu(false)}>
              <Link href="#service">Service</Link>
            </p>
            <p onClick={() => setToggleMenu(false)}>
              <Link href="#project">Our Project</Link>
            </p>
            <p onClick={() => setToggleMenu(false)}>
              <Link href="#about">About Us</Link>
            </p>
            <button className=" md:flex justify-end items-center border-gray-50 border-2 px-4 py-1 rounded-sm cursor-pointer text-color-btn">
              <a href="#contact">Contact</a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
