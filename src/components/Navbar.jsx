import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "@/style";

import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { GoDot } from "react-icons/go";

import { Link } from "react-router-dom";
import logoRedBlack from "@/assets/logo-red-black.png";
import logoWhite from "@/assets/logo-white.png";

import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const links2 = [
    {
      id: 4,
      name: "Visa EB-5",
      link: "/eb5",
    },
    {
      id: 5,
      name: "FAQ",
      link: "/faq",
    },

    {
      id: 6,
      name: "Contact",
      link: "/contact",
    },
    {
      id: 7,
      name: "News",
      link: "/rss",
    },
  ];

  const eb1 = [
    {
      id: 1,
      name: "Extraordinary Ability Visa",
      link: "/eb1a",
    },
    {
      id: 2,
      name: "Outstanding Professor or Researcher Visa",
      link: "/eb1b",
    },
    {
      id: 3,
      name: "Multinational Manager or Executive Visa",
      link: "/eb1c",
    },
  ];

  const eb3 = [
    {
      id: 1,
      name: "Skilled Workers Visa",
      link: "/eb3a",
    },
    {
      id: 2,
      name: "Professionals Visa",
      link: "/eb3b",
    },
    {
      id: 3,
      name: "Unskilled Workers Visa",
      link: "/eb3c",
    },
  ];

  return (
    <div
      className={` ${styles.paddingX} ${
        styles.flexCenter
      } fixed  w-full z-50   ${darkMode ? "bg-[#0D0E1C]" : "bg-gray-100"}    `}
    >
      <div className={`${styles.boxWidth} `}>
        <div className="w-full h-20 dark:text-white ">
          <div className="flex justify-start   md:justify-end md:gap-5 items-center  mx-auto  h-full">
            <div className="mr-auto    hidden md:flex items-end">
              <div className="flex gap-1 items-end ">
                <img
                  src={darkMode ? logoWhite : logoRedBlack}
                  className="w-14  object-contain"
                  alt=""
                />
                <p
                  className={` ${
                    darkMode ? "text-white" : "text-black"
                  } text-[30px] tangerine       `}
                >
                  Visa Law
                </p>
              </div>
            </div>
            <div className="hidden lg:flex items-center">
              <ul className="flex gap-6 ">
                <li
                  className={`mt-1 text-[18px] hover:font-semibold hover:text-primary capitalize duration-300 cursor-pointer `}
                >
                  <Link to="/">Home</Link>
                </li>

                {/* visa eb1 */}
                <li>
                  <div className="dropdown dropdown-bottom dropdown-hover">
                    <div
                      tabIndex={0}
                      className={`mt-1 text-[18px] flex items-center   capitalize duration-300  hover:font-semibold hover:text-primary  cursor-pointer `}
                    >
                      <p>Visa EB-1</p>
                      <div className="cursor-pointer">
                        <div className="flex items-center gap-2">
                          <IoMdArrowDropdown />
                        </div>
                      </div>
                    </div>
                    <ul className="dropdown-content  z-[1]   shadow bg-base-100 dark:bg-accent w-52">
                      {eb1.map(({ id, link, name }) => (
                        <Link key={id} to={link}>
                          <div
                            className={`flex  justify-center items-start  hover:bg-primary hover:text-white  `}
                          >
                            <div className="mt-[2px]">
                              <GoDot className="text-md" />
                            </div>
                            <li className={`w-full duration-300 `}>
                              <p className="text-[14px]">{name}</p>
                            </li>
                          </div>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </li>
                {/* visa eb2 */}
                <li
                  className={`mt-1 text-[18px] hover:font-semibold hover:text-primary  capitalize duration-300   cursor-pointer `}
                >
                  <Link to="/eb2">Visa EB-2</Link>
                </li>
                {/* visa eb3 */}
                <li>
                  <div className="dropdown dropdown-bottom dropdown-hover">
                    <div
                      tabIndex={0}
                      className={`mt-1 text-[18px] flex items-center   capitalize duration-300  hover:font-semibold hover:text-primary  cursor-pointer `}
                    >
                      <p>Visa EB-3</p>
                      <div className="cursor-pointer">
                        <div className="flex items-center gap-2">
                          <IoMdArrowDropdown />
                        </div>
                      </div>
                    </div>
                    <ul className="dropdown-content  z-[1]   shadow bg-base-100 dark:bg-accent w-52">
                      {eb3.map(({ id, link, name }) => (
                        <Link key={id} to={link}>
                          <div
                            className={`flex  justify-center items-start  hover:bg-primary hover:text-white  `}
                          >
                            <div className="mt-[2px]">
                              <GoDot className="text-md" />
                            </div>
                            <li className={`w-full duration-300 `}>
                              <p className="text-[14px]">{name}</p>
                            </li>
                          </div>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </li>

                {/* faq contact */}
                {links2.map(({ id, link, name }) => (
                  <li
                    key={id}
                    className={`mt-1 text-[18px]  capitalize duration-300  hover:font-semibold hover:text-primary   cursor-pointer `}
                  >
                    <Link to={link}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div
              onClick={() => setIsMenuShown(!isMenuShown)}
              className="block lg:hidden cursor-pointer mr-4"
            >
              {isMenuShown ? (
                <FaTimes className="hover:text-primary" size={30} />
              ) : (
                <FaBars className="hover:text-primary" size={30} />
              )}
            </div>

            <div className="flex items-center flex-row justify-center gap-2 ">
              <div className="bg-gray-300 h-7 mr-2 w-[1px] hidden md:flex"></div>
              <div onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? (
                  <MdWbSunny
                    className={`mt-1 text-2xl hover:text-primary  cursor-pointer duration-300  `}
                  />
                ) : (
                  <MdNightsStay
                    className={`mt-1 text-2xl hover:text-primary   cursor-pointer duration-300  `}
                  />
                )}
              </div>
            </div>

            <div className="ml-auto gap-1 md:hidden flex items-end">
              <img
                src={darkMode ? logoWhite : logoRedBlack}
                className="w-10 object-contain"
                alt=""
              />
              <p
                className={` ${
                  darkMode ? "text-white" : "text-black"
                } text-[24px] tangerine   `}
              >
                Visa Law
              </p>
            </div>
          </div>
        </div>

        <div
          className={`absolute w-full  z-[50] left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
            isMenuShown ? "top-20 rounded-b-2xl  opacity-100" : "top-[-600px]"
          } ${darkMode ? "bg-[#0D0E1C]" : "bg-gray-100"}`}
        >
          <ul
            className={`flex flex-col gap-6 text-left dark:text-white ${
              darkMode ? " " : ""
            }`}
          >
            <li
              onClick={() => setIsMenuShown(!isMenuShown)}
              className={`mt-1 text-[18px] hover:font-semibold hover:text-primary capitalize duration-300 cursor-pointer `}
            >
              <Link to="/">Home</Link>
            </li>

            {/* visa eb1 */}
            <li>
              <div className="dropdown dropdown-bottom dropdown-hover">
                <div
                  tabIndex={0}
                  className={`mt-1 text-[18px] flex items-center   capitalize duration-300  hover:font-semibold hover:text-primary  cursor-pointer `}
                >
                  <p>Visa EB-1</p>
                  <div className="cursor-pointer">
                    <div className="flex items-center gap-2">
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                </div>
                <ul className="dropdown-content  z-[1]   shadow bg-base-100 dark:bg-accent w-52">
                  {eb1.map(({ id, link, name }) => (
                    <Link key={id} to={link}>
                      <li
                        onClick={() => setIsMenuShown(!isMenuShown)}
                        className={`w-full duration-300 hover:font-semibold hover:text-primary`}
                      >
                        <p className="px-4 text-[14px]">{name}</p>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </li>
            {/* visa eb2 */}
            <li
              onClick={() => setIsMenuShown(!isMenuShown)}
              className={`mt-1 text-[18px] hover:font-semibold hover:text-primary  capitalize duration-300   cursor-pointer `}
            >
              <Link to="/eb2">Visa EB-2</Link>
            </li>
            {/* visa eb3 */}
            <li>
              <div className="dropdown dropdown-bottom dropdown-hover">
                <div
                  tabIndex={0}
                  className={`mt-1 text-[18px] flex items-center   capitalize duration-300  hover:font-semibold hover:text-primary  cursor-pointer `}
                >
                  <p>Visa EB-3</p>
                  <div className="cursor-pointer">
                    <div className="flex items-center gap-2">
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                </div>
                <ul className="dropdown-content  z-[1]   shadow bg-base-100 dark:bg-accent w-52">
                  {eb3.map(({ id, link, name }) => (
                    <Link key={id} to={link}>
                      <li
                        onClick={() => setIsMenuShown(!isMenuShown)}
                        className={`w-full hover:font-semibold hover:text-primary duration-300`}
                      >
                        <p className="px-4 text-[14px]">{name}</p>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </li>

            {/* faq contact */}
            {links2.map(({ id, link, name }) => (
              <li
                onClick={() => setIsMenuShown(!isMenuShown)}
                key={id}
                className={`mt-1 text-[18px]  capitalize duration-300  hover:font-semibold hover:text-primary   cursor-pointer `}
              >
                <Link to={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
