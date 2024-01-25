import Section from "@/components/common/Section";

import opencompany from "@/assets/services/opencompany.webp";
import opencompany2 from "@/assets/services/opencompany2.jpg";
import eb3b from "@/assets/visas/eb3b.jpg";
import usa2 from "@/assets/visas/usa2.jpg";
import styles from "@/style";
import doctors from "@/assets/visas/doctors.jpg";

import Benefits from "./Benefits";
import Requirements from "./Requirements";
import Application from "./Application";
import { useState } from "react";

const Eb3b = ({ darkMode }) => {
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
        title="Professionals Visa
        "
        subtitle="The EB-3B visa is for professionals with a U.S. baccalaureate degree or a foreign equivalent degree that is typically required for the profession. It is suitable for individuals seeking professional-level positions in the United States."
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
                  The Professionals Visa, falling within the employment-based
                  visa category, is tailored for individuals classified as
                  "Professionals." This category is designed for those with a
                  U.S. baccalaureate or foreign equivalent degree, where a
                  baccalaureate degree is the normal requirement for entry into
                  the occupation, offering an avenue for employment-based
                  immigration to the United States. Here's a structured
                  breakdown of the key aspects of the Professionals Visa.
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
                  In summary, the Professionals Visa is designed for individuals
                  with a U.S. baccalaureate or foreign equivalent degree. While
                  it provides benefits such as permanent residency and a path to
                  U.S. citizenship, meeting the specific requirements, including
                  professional qualifications and the labor certification
                  process, is crucial for a successful application.
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

export default Eb3b;
