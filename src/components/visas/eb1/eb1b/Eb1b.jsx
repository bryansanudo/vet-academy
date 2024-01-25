import Section from "@/components/common/Section";

import opencompany from "@/assets/services/opencompany.webp";
import opencompany2 from "@/assets/services/opencompany2.jpg";
import research from "@/assets/visas/research.jpg";
import styles from "@/style";

import Benefits from "./Benefits";
import Requirements from "./Requirements";
import Application from "./Application";
import { useState } from "react";

const Eb1b = ({ darkMode }) => {
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
        title="Outstanding Professor or Researcher Visa
        "
        subtitle="The EB-1B visa targets internationally recognized professors and researchers. Applicants must showcase outstanding achievements in their academic or research careers, including a minimum of three years of experience."
      >
        <div className="w-full flex flex-col gap-6 md:gap-20 mb-20  ">
          <div className="flex flex-col md:flex-row gap-20">
            <div
              className={` ${
                darkMode ? "shadow-md shadow-white " : "shadow-md shadow-black "
              } w-full h-full  rounded-[20px]`}
            >
              <img
                src={research}
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
                  The Outstanding Professor or Researcher Visa is a category
                  within the United States immigration system tailored for
                  individuals in academia or research who have demonstrated
                  outstanding achievements. Here's an organized breakdown of the
                  key elements of the Outstanding Professor or Researcher Visa
                </p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <ul
              className={`${styles.title} border rounded-xl p-4 flex flex-col md:flex-row justify-center gap-20 mb-20`}
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
                  In summary, the Outstanding Professor or Researcher Visa
                  provides several advantages, such as the absence of a job
                  offer requirement and a potentially faster processing time.
                  However, meeting the stringent requirements related to
                  outstanding achievements and providing compelling evidence is
                  crucial for a successful application.
                </p>
              </div>
            </div>
            <div
              className={`${
                darkMode ? "shadow-md shadow-white " : "shadow-md shadow-black "
              } w-full h-full  rounded-[20px] `}
            >
              <img
                src={opencompany2}
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

export default Eb1b;
