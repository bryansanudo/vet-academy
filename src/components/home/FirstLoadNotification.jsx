import styles from "@/style";
import posterBovinos from "@/assets/poster-bovinos.png";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const FirstLoadNotification = ({ setB }) => {
  const closeModal = () => {
    setB(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center md:mt-12">
      <div className="fixed inset-0 bg-black opacity-50"></div>

      <div className="relative mx-4 mt-10">
        <button
          className="btn btn-sm btn-circle btn-primary z-50 absolute top-6 right-6 "
          onClick={closeModal}
        >
          <FaTimes className="text-xl" />
        </button>
        <figure className="mt-2">
          <img
            src={posterBovinos}
            alt=""
            className="w-[100%] max-h-[80vh] rounded-2xl"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <Link to="/bovinos">
              <button
                onClick={closeModal}
                className={`${styles.button} bg-primary `}
              >
                Mas Información
              </button>
            </Link>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default FirstLoadNotification;
