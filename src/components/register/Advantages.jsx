import styles from "@/style";

import { motion } from "framer-motion";
import { staggerContainer, zoomIn, fadeIn } from "@/utils/motion";

import Form from "@/components/register/Form";

const Advantages = ({ darkMode }) => (
  <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div
      className={` red__gradient absolute z-[0] w-[30%] h-[60%] -left-[50%] rounded-full  bottom-40`}
    />

    <div className="flex flex-wrap sm:justify-start justify-center w-full  relative z-[1]">
      <Form darkMode={darkMode} />
    </div>
  </motion.section>
);

export default Advantages;
