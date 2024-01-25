import styles from "@/style";

import { SlLocationPin } from "react-icons/sl";
import { MdSchedule } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

import { useEffect } from "react";
const cards = [
  {
    id: 1,
    img: <SlLocationPin />,
    title: "Where we are",
    subtitle: "1401 Brickell Avenue Miami, FL 33131",
  },
  {
    id: 2,
    img: <MdSchedule />,
    title: "Attention schedule",
    subtitle: "Monday to Friday 9AM to 5PM ",
  },
  {
    id: 3,
    img: <MdOutlineMailOutline />,
    title: "Email",
    subtitle: "info@ebvisalaw.com",
  },
  {
    id: 4,
    img: <FaPhone />,
    title: "Phone",
    subtitle: "+1 (305) 791-5610",
  },
];

const Contact = ({ darkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className={`dark:bg-accent mt-28  ${styles.paddingX} ${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth} `}>
        <div
          className={`  red__gradient md:absolute z-[0] w-[55%] h-[60%] -right-[50%] rounded-full  bottom-40`}
        />
        <div
          className={`  pink__gradient absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full `}
        />
        <div className="w-full flex justify-between items-center flex-col sm:mb-16 mb-6 relative z-[1]">
          <h2
            className={`font-semibold xs:text-[48px] text-[40px]  xs:leading-[76.8px] leading-[66.8px] w-full text-primary mr-4`}
          >
            Contact Us
          </h2>
          <div className="w-full md:mt-0 mt-6">
            <p className={`${styles.paragraph} text-left max-w-[600px] mb-2`}>
              Empowering Your Journey, One Immigration Case at a Time. Reach Out
              for Expert Guidance and Personalized Solutions.
            </p>
          </div>
        </div>

        <section id="clients" className={` ${styles.flexCenter} mb-40 `}>
          <div className="flex md:flex-row flex-col  w-full gap-12">
            <form className=" w-full">
              <div
                className={`flex   ${
                  darkMode
                    ? "shadow-sm shadow-white  "
                    : "shadow-md shadow-black"
                } rounded-[20px]  flex-col md:gap-8 gap-4 md:p-10 p-6  w-full h-full mb-4 `}
              >
                <div className="flex flex-col md:flex-row items-center  justify-center gap-4">
                  <div className="flex flex-col w-full">
                    <label
                      className={` font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      name="Name"
                      autoComplete="off"
                      className={` h-10 rounded-[10px] ${
                        darkMode ? " " : " border-black  "
                      }   bg-dimWhite border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 mt-2`}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      className={` font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      required
                      name="Last Name"
                      autoComplete="off"
                      className={` h-10 rounded-[10px] ${
                        darkMode ? " " : " border-black  "
                      }   bg-dimWhite border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 mt-2`}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center  justify-center gap-4">
                  <div className="flex flex-col w-full">
                    <label
                      className={` font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      required
                      name="Name"
                      autoComplete="off"
                      className={` h-10 rounded-[10px] ${
                        darkMode ? " " : " border-black  "
                      }   bg-dimWhite border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 mt-2`}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      className={` font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      required
                      name="Last Name"
                      autoComplete="off"
                      className={` h-10 rounded-[10px] ${
                        darkMode ? " " : " border-black  "
                      }   bg-dimWhite border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 mt-2`}
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full">
                  <label
                    className={` font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
                  >
                    Message
                  </label>
                  <textarea
                    name="Questions"
                    rows="3"
                    required
                    autoComplete="off"
                    className={`  rounded-[10px] ${
                      darkMode ? " " : " border-black  "
                    }   bg-dimWhite border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 py-2 mt-2`}
                  />
                </div>

                <button
                  className={`btn  font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 btn-primary  `}
                >
                  Submit
                </button>
              </div>
            </form>

            <div className="grid md:grid-cols-2 grid-cols-1   rounded-[20px]   md:gap-10 gap-4   w-full  ">
              {cards.map(({ id, img, title, subtitle }) => (
                <div
                  key={id}
                  className={`flex flex-col  px-4 rounded-[20px] items-center justify-center text-center ${
                    darkMode
                      ? "shadow-sm shadow-white border-white "
                      : "shadow-md shadow-black "
                  } `}
                >
                  <div
                    className={`w-[64px] h-[64px] mb-1 mask mask-hexagon ${styles.flexCenter} bg-primary  `}
                  >
                    <div className="text-white text-3xl">{img}</div>
                  </div>
                  <p className={`${styles.title}`}>{title}</p>

                  <div className={`${styles.subtitle}`}>{subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
