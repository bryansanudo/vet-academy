import { GoDot } from "react-icons/go";
import styles from "@/style";

const CourseIncludes = () => {
  return (
    <>
      <div className="w-full h-[1px] bg-gray-200" />
      <h2 className={`${styles.heading3} w-full text-primary  text-center `}>
        ¿Qué incluye este curso?
      </h2>
      <div className="w-full h-[1px] bg-gray-200" />
      <div className={`${styles.subtitle} my-6 w-full`}>
        <div className="flex items-center justify-center  gap-2 py-2">
          <GoDot className="text-primary text-3xl" />
          <div className={` w-full `}>
            Curso impartido por docentes con gran experiencia y reconocimiento.
          </div>
        </div>
        {/* <div className="flex items-center justify-center  gap-2 py-2">
          <GoDot className="text-primary text-3xl" />
          <div className={` w-full `}>Clases en vivo.</div>
        </div> */}
        <div className="flex items-center justify-center  gap-2 py-2">
          <GoDot className="text-primary text-3xl" />
          <div className={` w-full `}>
            Acceso a las grabaciones en cualquier horario (durante 2 meses
            después de la última clase).
          </div>
        </div>
        {/*  <div className="flex items-center justify-center  gap-2 py-2">
          <GoDot className="text-primary text-3xl" />
          <div className={` w-full `}>
            Quiz para evaluar los conocimientos adquiridos.
          </div>
        </div> */}
        {/* <div className="flex items-center justify-center   gap-2 py-2 ">
          <GoDot className="text-primary text-3xl" />
          <div className={` w-full  `}>Literatura descargable.</div>
        </div> */}
        <div className="flex items-center justify-center   gap-2 py-2 ">
          <GoDot className="text-primary text-3xl" />
          <div className={` w-full  `}>Certificado digital.</div>
        </div>
        {/* <div className="flex items-center justify-center   gap-2 py-2 ">
          <GoDot className="text-primary text-3xl" />
          <div className={` w-full  `}>
            Acumulas puntos que te dan descuento en futuros cursos.
          </div>
        </div> */}
      </div>
    </>
  );
};

export default CourseIncludes;
