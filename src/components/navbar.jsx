import React, { useEffect } from "react";
import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import * as HiIcons from "react-icons/hi2";
import * as GrIcons from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
import { navbarLinks } from "../data/navbarLinksData";
import Button from "./button";
import sbc from "../assets/logo/sbc.png";
import sbcBlack from "../assets/logo/sbcb.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarBgChanged, setNavbarBgChanged] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 60) {
        setNavbarBgChanged(true);
      } else {
        setNavbarBgChanged(false);
      }
    };

    return () => {
      window.scrollTo(0, 0);
      setNavbarBgChanged(false);
    };
  }, [location]);

  return (
    <header
      className={
        navbarBgChanged
          ? "bg-slate-200 fixed top-0 left-0 w-[100vw] z-20 duration-500 shadow-md py-4"
          : "bg-transparent fixed top-0 left-0 w-[100vw] z-20 duration-500 py-4"
      }
    >
      <nav
        className="mx-full flex items-center justify-between px-[20px] lg:px-[100px]"
        aria-label="Global"
      >
        {/* {!mobileMenuOpen && !navbarBgChanged && (
          <img
            data-aos="fade-right"
            data-aos-duration="2000"
            src={sbc}
            alt="Logo"
            className="w-[20%] md:w-[10%] mr-3 md:mr-5"
          />
        )} */}
        {/* {!mobileMenuOpen && navbarBgChanged && (
          <img
            data-aos="fade-right"
            data-aos-duration="2000"
            src={sbcBlack}
            alt="Logo"
            className="w-[20%] md:w-[10%] mr-3 md:mr-5"
          />
        )} */}

        {/* Logo/Brand Name Section */}
        <div className="flex lg:flex-1">
          {!mobileMenuOpen && (
            <Link
              to="/"
              className={navbarBgChanged ? "text-gray-900" : "text-white"}
            >
              <h1
                data-aos="fade-right"
                data-aos-duration="1000"
                className="text-2xl tracking-widest font-jost leading-[24px] font-normal uppercase mr-5"
              >
                GrainPlus Logistics <br></br>
              </h1>
            </Link>
          )}
        </div>
        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className={
              navbarBgChanged
                ? "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
                : "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            }
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <HiIcons.HiOutlineBars3BottomRight
              className="h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>
        {/* Desktop Navigation Links */}
        <Popover.Group className="hidden lg:flex lg:gap-x-10 lg:items-center hover:">
          {navbarLinks.map((links, index) => {
            const { name, linkPath } = links;
            return (
              <Link
                key={index}
                to={linkPath}
                className={
                  navbarBgChanged
                    ? "no-underline tracking-widest font-jost px-[10px] duration-500  text-gray-900 text-lg font-light hover:text-green-500"
                    : "no-underline tracking-widest font-jost px-[10px] duration-500  text-white text-lg font-light hover:text-green-500"
                }
              >
                {name}
              </Link>
            );
          })}
          <Link
            to={"/contact"}
            data-aos="fade-left"
            data-aos-duration="2000"
            className="no-underline ml-[50px] hover:scale-105 duration-500"
          >
            <Button
              variant={navbarBgChanged ? "black" : "white"}
              ringVariant={navbarBgChanged ? "ring-black" : "ring-white"}
              text={"Talk to us!"}
            />
          </Link>
        </Popover.Group>
        {/* Mobile Dialog Panel */}
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="-m-1.5 p-1.5 text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              <h1 className="text-[24px] leading-[22px] font-[600] uppercase">
                GrainPlus Logistics
              </h1>
            </Link>
            <button
              type="button"
              className={
                navbarBgChanged
                  ? "-m-2.5 rounded-md p-2.5 text-gray-900"
                  : "-m-2.5 rounded-md p-2.5 text-white"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              <GrIcons.GrClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-[50px] flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navbarLinks.map((links, index) => {
                  const { name, linkPath } = links;
                  return (
                    <Link
                      key={index}
                      to={linkPath}
                      className="-mx-3 block rounded-lg px-3 border-gray-200 border-b py-4 text-[20px] font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
