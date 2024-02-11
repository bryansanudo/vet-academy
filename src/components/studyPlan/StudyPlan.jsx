import styles from "@/style";

import CTA from "@/components/CTA";
import { useEffect } from "react";
import AvailableCourses from "@/components/studyPlan/AvailableCourses";
import ProtectedCourses from "@/components/studyPlan/ProtectedCourses";

const StudyPlan = ({ darkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className={`dark:bg-accent  ${styles.paddingX} ${styles.flexCenter} mt-28 mb-10`}
      >
        <div className={`${styles.boxWidth}`}>
          <div
            className={`
               pink__gradient absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full `}
          />
          {/* <AvailableCourses darkMode={darkMode} /> */}
          <ProtectedCourses darkMode={darkMode} />
        </div>
      </div>
    </>
  );
};

export default StudyPlan;
