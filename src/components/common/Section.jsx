import React, { useEffect } from "react";
import styles from "@/style";
import CTA from "@/components/CTA";

const Section = ({ children, title, subtitle, darkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className={`dark:bg-accent mt-28    ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth} `}>
          <div
            className={`  red__gradient md:absolute z-[0] w-[55%] h-[60%] -right-[50%] rounded-full  bottom-40`}
          />
          <div
            className={` pink__gradient absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full `}
          />
          <div className="w-full flex justify-between items-center flex-col sm:mb-16 mb-6 relative z-[1]">
            <h2
              className={`font-semibold xs:text-[48px] text-[40px]  xs:leading-[76.8px] leading-[66.8px] w-full text-primary mr-4`}
            >
              {title}
            </h2>
            <div className="w-full md:mt-0 mt-6">
              <p
                className={`${styles.paragraph} text-left max-w-[1000px] mb-2`}
              >
                {subtitle}
              </p>
            </div>
          </div>

          {children}

          <CTA darkMode={darkMode} />
        </div>
      </div>
    </>
  );
};

export default Section;
