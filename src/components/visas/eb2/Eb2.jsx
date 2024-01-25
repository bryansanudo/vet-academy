import Section from "@/components/common/Section";

import opencompany from "@/assets/services/opencompany.webp";
import opencompany2 from "@/assets/services/opencompany2.jpg";
import styles from "@/style";

import Benefits from "./Benefits";
import Requirements from "./Requirements";
import Application from "./Application";
import { useState } from "react";
import doctors from "@/assets/visas/doctors.jpg";
import usa3 from "@/assets/visas/usa3.jpg";

const Eb2 = ({ darkMode }) => {
  const [x, setX] = useState(0);
  const listaItems = [
    { text: "Benefits", component: <Benefits darkMode={darkMode} /> },
    { text: "Requirements", component: <Requirements darkMode={darkMode} /> },
    {
      text: "Application Process",
      component: <Application darkMode={darkMode} />,
    },
  ];
  return (
    <>
      <Section
        darkMode={darkMode}
        title="Advanced Degrees or Exceptional Abilities Visa
        "
        subtitle="The EB-2 visa is for professionals with advanced degrees or exceptional abilities in their respective fields. It aims to attract individuals with a high level of expertise, contributing to the advancement of their industries."
      >
        <div className="w-full flex flex-col gap-6 md:gap-20 mb-20  ">
          <div className="flex flex-col md:flex-row gap-20">
            <div
              className={` ${
                darkMode ? "shadow-md shadow-white " : "shadow-md shadow-black "
              } w-full h-full  rounded-[20px]`}
            >
              <img
                src={doctors}
                className="object-contain rounded-[20px]"
                alt=""
              />
            </div>
            <div className="flex items-center ">
              <div className="flex flex-col items-center justify-center">
                {/* <h2 className={`${styles.title} mb-3`}>
                  Opening a business in the US is the #1 expansion move. #1 for
                  today's entrepreneur
                </h2> */}
                <p className={`${styles.subtitle}`}>
                  The EB-2 Visa, part of the employment-based visa category, is
                  tailored for individuals with advanced degrees or exceptional
                  abilities in various fields who aim to immigrate to the United
                  States. Here's a methodical breakdown of the key elements of
                  the Advanced Degrees or Exceptional Abilities Visa:
                </p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <ul
              className={`${styles.title} border p-4 rounded-xl flex flex-col md:flex-row justify-center gap-20 mb-20`}
            >
              {listaItems.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer text-primary text-center ${
                    x === index ? "border-b-2 border-primary" : ""
                  }`}
                  onClick={() => setX(index)}
                >
                  {item.text}
                </li>
              ))}
            </ul>
            <div>{listaItems[x].component}</div>
          </div>

          <div className="flex flex-col md:flex-row gap-20 ">
            <div className="flex items-center ">
              <div className="flex flex-col items-center justify-center ">
                {/*  <h2 className={`${styles.title} mb-3`}>
                  Opening a business in the US is the #1 expansion move. #1 for
                  today's entrepreneur
                </h2> */}

                <p className={`${styles.subtitle}`}>
                  In summary, the EB-2 Visa offers benefits such as permanent
                  residency, a potential expedited path to immigration, and
                  options like the National Interest Waiver for some applicants.
                  Meeting the stringent requirements, including advanced degrees
                  or exceptional abilities, is crucial for a successful Advanced
                  Degrees or Exceptional Abilities Visa application.
                </p>
              </div>
            </div>
            <div
              className={`${
                darkMode ? "shadow-md shadow-white " : "shadow-md shadow-black "
              } w-full h-full  rounded-[20px] `}
            >
              <img
                src={usa3}
                className="object-contain rounded-[20px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Eb2;
