import Section from "@/components/common/Section";

import opencompany from "@/assets/services/opencompany.webp";
import opencompany2 from "@/assets/services/opencompany2.jpg";
import styles from "@/style";

import Benefits from "./Benefits";
import Requirements from "./Requirements";
import Application from "./Application";
import { useState } from "react";
import doctors from "@/assets/visas/doctors.jpg";
import usa2 from "@/assets/visas/usa3.jpg";
import eb5 from "@/assets/visas/eb5.jpg";

const Eb5 = ({ darkMode }) => {
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
        title="Investors Visa"
        subtitle="The EB-5 Visa is designed for immigrant investors seeking to invest capital in a new commercial enterprise that creates jobs for U.S. workers. This program encourages foreign investment and economic growth in the United States."
      >
        <div className="w-full flex flex-col gap-6 md:gap-20 mb-20  ">
          <div className="flex flex-col md:flex-row gap-20">
            <div
              className={` ${
                darkMode ? "shadow-md shadow-white " : "shadow-md shadow-black "
              } w-full h-full  rounded-[20px]`}
            >
              <img src={eb5} className="object-contain rounded-[20px]" alt="" />
            </div>
            <div className="flex items-center ">
              <div className="flex flex-col items-center justify-center">
                {/* <h2 className={`${styles.title} mb-3`}>
                  Opening a business in the US is the #1 expansion move. #1 for
                  today's entrepreneur
                </h2> */}
                <p className={`${styles.subtitle}`}>
                  The EB-5 Visa, part of the U.S. immigration system, is
                  designed for investors seeking to make a significant
                  investment in a new commercial enterprise in the United
                  States. Here's a concise breakdown of key aspects.
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
                  In summary, the EB-5 Visa offers a unique pathway for
                  investors seeking permanent residency in the United States
                  through substantial investments in job-creating ventures.
                  Understanding and meeting the specific investment and job
                  creation requirements are crucial for a successful EB-5
                  application.
                </p>
              </div>
            </div>
            <div
              className={`${
                darkMode ? "shadow-md shadow-white " : "shadow-md shadow-black "
              } w-full h-full  rounded-[20px] `}
            >
              <img
                src={usa2}
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

export default Eb5;
