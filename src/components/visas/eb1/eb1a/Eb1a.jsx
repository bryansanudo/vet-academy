import Section from "@/components/common/Section";

import opencompany from "@/assets/services/opencompany.webp";
import opencompany2 from "@/assets/services/opencompany2.jpg";
import sciencie from "@/assets/visas/sciencie.jpg";
import usa2 from "@/assets/visas/usa2.jpg";
import styles from "@/style";

import Benefits from "./Benefits";
import Requirements from "./Requirements";
import Application from "./Application";
import { useState } from "react";

const Eb1a = ({ darkMode }) => {
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
        title="Extraordinary Ability Visa
        "
        subtitle="The EB-1A visa is for individuals with extraordinary abilities in sciences, arts, education, business, or athletics. Extraordinary ability is proven through sustained national or international acclaim, with evidence of significant contributions to the field."
      >
        <div className="w-full flex flex-col gap-6 md:gap-20 mb-20  ">
          <div className="flex flex-col md:flex-row gap-20">
            <div
              className={` ${
                darkMode ? "shadow-md shadow-white " : "shadow-md shadow-black "
              } w-full h-full  rounded-[20px]`}
            >
              <img
                src={sciencie}
                className="object-contain rounded-[20px] "
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
                  The Extraordinary Ability Visa is an immigrant visa category
                  within the United States immigration system, catering to
                  individuals who possess extraordinary abilities in their
                  field, such as the sciences, arts, education, business, or
                  athletics. Here's a rundown of the key aspects of the
                  Extraordinary Ability Visa
                </p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <ul
              className={`${styles.title} border p-4 rounded-xl flex flex-col md:flex-row  justify-center gap-20 mb-20`}
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
                  In summary, the Extraordinary Ability Visa offers numerous
                  benefits, including the absence of a job offer requirement,
                  permanent residency, and a potentially shorter processing
                  time. However, meeting the stringent requirements and
                  providing compelling evidence of extraordinary ability are
                  essential for a successful application.
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

export default Eb1a;
