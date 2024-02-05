import BovinosIndex from "@/components/studyPlan/bovinosLayout/BovinosIndex";

import CTA from "@/components/CTA";

import styles from "@/style";
import { useEffect } from "react";

const BovinosLayout = ({ darkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={`dark:bg-accent `}>
        <div className={`  w-full`}>
          <div name="scrol" className="pt-20" />

          <div
            className={`
            pink__gradient absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full `}
          />

          <BovinosIndex />
        </div>
      </div>
    </>
  );
};

export default BovinosLayout;
