import styles from "@/style";

import CTA from "@/components/CTA";
import { useEffect } from "react";

const Faq = ({ darkMode }) => {
  const questions = [
    {
      id: 1,
      question: "What is an Employment-Based (EB) Visa?",
      answer:
        "An Employment-Based (EB) Visa is a category of U.S. immigrant visas designed for foreign nationals seeking employment opportunities in the United States. The EB visa program includes various subcategories such as EB-1, EB-2, and EB-3, each catering to individuals with different skills and qualifications.",
    },
    {
      id: 2,
      question: "What is EB-1 Visa?",
      answer:
        "For individuals with extraordinary abilities, outstanding professors and researchers, or certain multinational executives or managers.",
    },
    {
      id: 3,
      question: "What is EB-2 Visa?",
      answer:
        "For individuals with advanced degrees or exceptional abilities, including a National Interest Waiver (NIW) option.",
    },
    {
      id: 4,
      question: "What is EB-3 Visa?",
      answer:
        "Divided into subcategories: EB-3A for skilled workers, EB-3B for professionals, and EB-3C for unskilled workers.",
    },
    {
      id: 5,
      question: "How do I know if I qualify for an EB Visa?",
      answer:
        "Qualifications vary based on the specific EB visa category. Generally, applicants need to demonstrate exceptional abilities, possess advanced degrees, or have specific skills relevant to the job offer. Meeting the requirements outlined by the U.S. Citizenship and Immigration Services (USCIS) is crucial.",
    },
    {
      id: 6,
      question: "What is the process for obtaining an EB Visa?",
      answer:
        "The process typically involves obtaining a job offer from a U.S. employer, filing the necessary petition (e.g., Form I-140) with the USCIS, and undergoing the labor certification process. The specific steps may vary depending on the EB visa category.",
    },
    {
      id: 7,
      question: "Is there a limit on the number of EB Visas issued each year?",
      answer:
        'Yes, there are annual numerical limits or "caps" for certain EB visa categories. However, these caps may not apply to all EB visas, and some categories may have more flexibility in terms of available visas.',
    },
    {
      id: 8,
      question: "Can I apply for U.S. citizenship after obtaining an EB Visa?",
      answer:
        "Yes, after maintaining continuous residence as a green card holder for five years, individuals with EB visas become eligible to apply for U.S. citizenship. Meeting other naturalization requirements is also necessary.",
    },
    {
      id: 9,
      question: "What is the role of the employer in the EB Visa process?",
      answer:
        "The U.S. employer plays a crucial role by offering a job to the foreign national, filing the necessary immigration petitions, and, in some cases, obtaining labor certification to demonstrate the unavailability of qualified U.S. workers for the position.",
    },
    {
      id: 10,
      question:
        "Are there premium processing options available for EB Visa applications?",
      answer:
        "Yes, premium processing is available for certain EB visa categories, allowing for expedited processing in exchange for an additional fee. This can be a faster option for those seeking a quicker response.",
    },
    {
      id: 11,
      question: "Can I include my family members in my EB Visa application?",
      answer:
        "Yes, in most cases, spouses and unmarried children under 21 can be included in the EB visa application as dependents. They may also be eligible for derivative visas.",
    },
    {
      id: 12,
      question: "Where can I find more information and guidance on EB Visas?",
      answer:
        "For the most accurate and up-to-date information, it is recommended to visit the official website of the U.S. Citizenship and Immigration Services (USCIS) or consult with an immigration attorney specializing in employment-based immigration, feel free to contact below so we can look at your case!",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className={`dark:bg-accent mt-28   ${styles.paddingX} ${styles.flexCenter}`}
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
            Frequently Asked Questions
          </h2>
        </div>
        <section
          id="clients"
          className={`${styles.flexCenter} flex-col relative `}
        >
          <div className="w-full flex justify-between items-center md:flex-row flex-col  relative z-[1]">
            {/* <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab esse
          suscipit ipsum laudantium cupiditate voluptatibus
        </p>
      </div> */}
          </div>

          <div className="flex flex-col items-center justify-center  my-10  w-full  ">
            {questions.map(({ id, question, answer }) => (
              <div
                key={id}
                tabIndex={0}
                className={`${
                  darkMode
                    ? "shadow-sm shadow-white  "
                    : "shadow-md shadow-black "
                } collapse collapse-arrow  rounded-box w-full`}
              >
                <div className={`${styles.title} collapse-title `}>
                  {question}
                </div>
                <div className={`${styles.subtitle} collapse-content  `}>
                  <p>{answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <CTA darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Faq;
