import styles from "@/style";

import { motion } from "framer-motion";
import { zoomIn } from "@/utils/motion";

const DropdownFaq = ({ darkMode }) => {
  const questions = [
    {
      id: 1,
      question:
        "¿Ofrecen certificados al completar los cursos de educación veterinaria?",
      answer: "Sí, se entrega un certificado digital al finalizar.",
    },
    {
      id: 2,
      question: "¿Cuáles son los medios de pago disponibles?",
      answer:
        "Los medios de pago disponibles son PayPal, tarjeta de crédito y transferencia bancaria.",
    },
    {
      id: 3,
      question: "¿Cómo puedo inscribirme en un curso de educación veterinaria?",
      answer:
        "Para inscribirte en algun curso de educación veterinaria, simplemente contáctanos a través de WhatsApp. Nuestro equipo estará encantado de proporcionarte toda la información necesaria y guiarte a través del proceso de inscripción. Estamos aquí para ayudarte en cada paso del camino hacia tu educación veterinaria. ¡Esperamos contar contigo pronto!",
    },
    {
      id: 4,
      question:
        "¿Qué requisitos debo cumplir para participar en los cursos de educación veterinaria?",
      answer:
        "Los requisitos varían según el curso específico, pero en general, la mayoría de nuestros cursos están dirigidos a médicos veterinarios y estudiantes con interés en el campo de la veterinaria.",
    },
    {
      id: 5,
      question:
        "¿Cuál es la duración típica de los cursos de educación veterinaria?",
      answer:
        "La duración de nuestros cursos de educación veterinaria varía según el nivel y la complejidad del curso. Algunos cursos pueden durar unas pocas semanas, mientras que otros pueden extenderse por varios meses, dependiendo de los objetivos y el contenido del curso.",
    },
    {
      id: 6,
      question:
        "¿Hay oportunidades de clases prácticas a través de Vet Academy?",
      answer:
        "Sí, en algunos de nuestros cursos de educación veterinaria ofrecemos oportunidades de clases prácticas en colaboración con instituciones y clínicas veterinarias asociadas. Estas experiencias prácticas pueden proporcionar una valiosa exposición al trabajo en el campo veterinario.",
    },
    {
      id: 7,
      question:
        "¿Cómo puedo obtener más información sobre los cursos de educación veterinaria que ofrecen?",
      answer:
        "Para obtener más información sobre nuestros cursos de educación veterinaria, te invitamos a explorar nuestra página web, donde encontrarás detalles sobre los cursos disponibles, precios, y el plan de estudios. También puedes ponerte en contacto con nuestro equipo de soporte para recibir asistencia adicional.",
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
