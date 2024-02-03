import styles from "@/style";
import bovinos from "@/assets/courses/curso-6.png";
import CountDown from "@/components/CountDown";
import { Link } from "react-router-dom";

const MobileInscriptions = ({ darkMode }) => {
  return (
    <div
      className={`card  ${
        darkMode ? "bg-dark shadow-white" : "bg-base-100 shadow-gray-300"
      }   shadow-sm mb-20 flex md:hidden `}
    >
      <figure className="relative">
        <img src={bovinos} className=" object-contain" alt="Shoes" />
      </figure>
      <div className="flex flex-col items-center rounded-b-2xl justify-center mt-4  ">
        <div className="flex items-center justify-center  ">
          <CountDown />
        </div>

        <span className={`font-bold ${styles.title} mt-4 `}>$300 USD</span>
        <Link to="/contact">
          <button className={`${styles.button} bg-primary my-4`}>
            Inscripciones
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MobileInscriptions;
