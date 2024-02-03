import { GoDot } from "react-icons/go";
import styles from "@/style";

const Evaluation = () => {
  return (
    <>
      <h2 className={`${styles.heading3} w-full text-primary  text-center `}>
        Evaluación
      </h2>
      <div className="w-full h-[1px] bg-gray-200" />
      <div className={`${styles.subtitle} my-6 w-full`}>
        <div className="flex items-center justify-center  gap-2 py-2">
          <GoDot className="text-primary text-3xl" />
          <div className={` w-full `}>
            El examen final estará disponible cuando se hayan visto todas las
            clases y participado en la sesión de dudas.
          </div>
        </div>
        <div className="flex items-center justify-center  gap-2 py-2">
          <GoDot className="text-primary text-3xl" />
          <div className={` w-full `}>
            El examen está compuesto por 10 preguntas con varias opciones de
            respuesta entre las cuales se debe seleccionar la correcta.
          </div>
        </div>
        <div className="flex items-center justify-center  gap-2 py-2">
          <GoDot className="text-primary text-3xl" />
          <div className={` w-full `}>
            Para superar el exámen final, se debe responder correctamente el 70%
            de las preguntas.
          </div>
        </div>
        <div className="flex items-center justify-center  gap-2 py-2">
          <GoDot className="text-primary text-3xl" />
          <div className={` w-full `}>
            Cada estudiante tendrá tres intentos para realizar el examen final.
          </div>
        </div>
        <div className="flex items-center justify-center   gap-2 py-2 ">
          <GoDot className="text-primary text-3xl" />
          <div className={` w-full  `}>
            Una vez superado el exámen final, el estudiante obtendrá un diploma
            de certificación por asistencia.
          </div>
        </div>
      </div>
    </>
  );
};

export default Evaluation;
