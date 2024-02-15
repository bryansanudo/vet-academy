import styles from "@/style";
import { FaWhatsapp } from "react-icons/fa";

const Metodology = () => {
  return (
    <>
      <h2 className={`${styles.heading3} w-full text-primary  text-center `}>
        Metodología
      </h2>
      <div className="w-full h-[1px] bg-gray-200" />
      <div className={`${styles.subtitle} my-6`}>
        Modalidad virtual, compuesta de{" "}
        <span className="text-primary font-bold">32</span> sesiones en vivo a
        través de ZOOM con ingreso a la plataforma académica virtual{" "}
        <span className="cursor-pointer text-primary font-bold">
          <a href=""></a>www.vetacademy.com.co
        </span>
        , donde podrás ver las grabaciones de las clases, material de apoyo y
        demás acceder desde cualquier lugar del mundo, desde cualquier navegador
        y estará a su disposición 24/7.
      </div>
      <div className={`${styles.subtitle} mb-6 w-full`}>
        <div>
          <span className={`${styles.title}`}>Consultas académicas</span>{" "}
          <div className="flex items-center gap-2">
            <a
              href="mailto:vet.academyeducacion@gmail.com"
              className="hover:scale-105 duration-500 hover:text-primary"
            >
              <span>vet.academyeducacion@gmail.com</span>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=573243291412"
              className=""
              target="_blank"
            >
              <FaWhatsapp className="text-xl text-primary hover:scale-125 duration-500" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Metodology;
