import styles from "@/style";

import CTA from "@/components/CTA";
import { useEffect } from "react";
import DropdownFaq from "@/components/faq/DropdownFaq";

const Faq = ({ darkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className={`dark:bg-accent  ${styles.paddingX} ${styles.flexCenter} mt-40`}
    >
      <div className={`${styles.boxWidth}`}>
        <div
          className={`
               pink__gradient absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full `}
        />
        <div className="flex flex-wrap sm:justify-start justify-center w-full  relative z-[1]">
          <DropdownFaq darkMode={darkMode} />
        </div>
        <CTA darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Faq;
