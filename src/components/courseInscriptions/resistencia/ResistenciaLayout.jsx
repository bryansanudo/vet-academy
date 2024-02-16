import { layout } from "@/style";

import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

import ResistenciaContent from "@/components/courseInscriptions/resistencia/ResistenciaContent";

const ResistenciaLayout = ({ darkMode }) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="features"
      className="w-full  md:w-[60%] lg:w-[80%] flex flex-col md:flex-row justify-start mr-4 "
    >
      <div className={`${layout.sectionInfo}   items-start `}>
        <ResistenciaContent darkMode={darkMode} />
      </div>
    </motion.section>
  );
};

export default ResistenciaLayout;
