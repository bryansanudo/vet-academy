import { motion } from "framer-motion";

import styles from "@/style";

import MobileInscriptions from "@/components/courseInscriptions/bovinos/MobileInscriptions";

import Metodology from "@/components/courseInscriptions/bovinos/bovinosContent/Metodology";
import CourseIncludes from "@/components/courseInscriptions/bovinos/bovinosContent/CourseIncludes";
import TargetPublic from "@/components/courseInscriptions/bovinos/bovinosContent/TargetPublic";
import StudyPlan from "@/components/courseInscriptions/bovinos/bovinosContent/StudyPlan";
import Professors from "@/components/courseInscriptions/bovinos/bovinosContent/Professors";

const BovinosContent = ({ darkMode }) => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div
      className={` red__gradient absolute z-[0] w-[15%] h-[100%] -left-[50%] rounded-full  bottom-40`}
    />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>Curso Bovinos en la clínica diaria</h2>
      <MobileInscriptions darkMode={darkMode} />
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full  relative z-[1]">
      <motion.div className="flex flex-col items-center justify-center mx-auto  ">
        <Metodology />
        <CourseIncludes />
        <TargetPublic />
        <StudyPlan darkMode={darkMode} />

        <Professors darkMode={darkMode} />
      </motion.div>
    </div>
  </section>
);

export default BovinosContent;
