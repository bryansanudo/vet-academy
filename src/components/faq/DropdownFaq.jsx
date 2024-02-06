import styles from "@/style";

import { motion } from "framer-motion";
import { zoomIn } from "@/utils/motion";

const DropdownFaq = ({ darkMode }) => {
  const questions = [
    {
      id: 1,
      question: "Pregunta 1",
      answer: "Respuesta 1",
    },
    {
      id: 2,
      question: "Pregunta 2",
      answer: "Respuesta 2",
    },
    {
      id: 3,
      question: "Pregunta 3",
      answer: "Respuesta 3",
    },
    {
      id: 4,
      question: "Pregunta 4",
      answer: "Respuesta 4",
    },
    {
      id: 5,
      question: "Pregunta 5",
      answer: "Respuesta 5",
    },
    {
      id: 6,
      question: "Pregunta 6",
      answer: "Respuesta 6",
    },
    {
      id: 7,
      question: "Pregunta 7",
      answer: "Respuesta 7",
    },
    {
      id: 8,
      question: "Pregunta 8",
      answer: "Respuesta 8",
    },
    {
      id: 9,
      question: "Pregunta 9",
      answer: "Respuesta 9",
    },
    {
      id: 10,
      question: "Pregunta 10",
      answer: "Respuesta 10",
    },
  ];
  return (
    <>
      <motion.div variants={zoomIn(0.1, 0.8)} className=" w-full mx-auto  ">
        <h2
          className={`${styles.heading2} mb-2  flex items-center justify-center`}
        >
          Preguntas Frecuentes
        </h2>

        {questions.map(({ id, question, answer }) => (
          <div
            key={id}
            tabIndex={0}
            className={`${
              darkMode ? "shadow-sm shadow-white  " : "shadow-md shadow-black "
            } collapse collapse-arrow  rounded-box w-full my-6`}
          >
            <div className={`${styles.title} collapse-title `}>{question}</div>
            <div className={`${styles.subtitle} collapse-content  `}>
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default DropdownFaq;
