import styles from "@/style";

import { SlLocationPin } from "react-icons/sl";
import { MdSchedule } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

import { useEffect } from "react";
const cards = [
  {
    id: 1,
    img: <SlLocationPin />,
    title: "Donde estamos",
    subtitle: "Medellín - Colombia",
  },
  {
    id: 2,
    img: <MdSchedule />,
    title: "Horario de atención",
    subtitle: "Lunes a Viernes: 08:00 am - 6:00 pm. Hora Colombia.",
  },
  {
    id: 3,
    img: <MdOutlineMailOutline />,
    title: "Email",
    subtitle: "vet.academyeducacion@gmail.com",
  },
  {
    id: 4,
    img: <FaPhone />,
    title: "Teléfono",
    subtitle: "+57 (324) 3291412",
  },
];

const Contact = ({ darkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className={`dark:bg-accent mt-28  ${styles.paddingX} ${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth} `}>
        <div
          className={`  red__gradient md:absolute z-[0] w-[55%] h-[60%] -right-[50%] rounded-full  bottom-40`}
        />
        <div
          className={`  pink__gradient absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full `}
        />
        <div className="w-full flex justify-between items-center flex-col sm:mb-16 mb-6 relative z-[1]">
          <h2
            className={`font-semibold xs:text-[48px] text-[40px]  xs:leading-[76.8px] leading-[66.8px] w-full text-primary mr-4`}
          >
            ¿Tienes Preguntas o Comentarios?
          </h2>
          <div className="w-full md:mt-0 mt-6">
            <p className={`${styles.paragraph} text-left max-w-[600px] mb-2`}>
              Estamos aquí para escucharte, Esperamos poder ayudarte en
              cualquier pregunta o consulta que tengas.
            </p>
          </div>
        </div>

        <section id="clients" className={` ${styles.flexCenter} mb-40 `}>
          <div className="flex md:flex-row flex-col  w-full gap-12">
            <form className=" w-full">
              <div
                className={`flex   ${
                  darkMode
                    ? "shadow-sm shadow-white  "
                    : "shadow-md shadow-black"
                } rounded-[20px]  flex-col md:gap-8 gap-4 md:p-10 p-6  w-full h-full mb-4 `}
              >
                <div className="flex flex-col md:flex-row items-center  justify-center gap-4">
                  <div className="flex flex-col w-full">
                    <label
                      className={` font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      required
                      name="Name"
                      autoComplete="off"
                      className={` h-10 rounded-[10px] ${
                        darkMode ? " " : " border-black  "
                      }   bg-dimWhite border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 mt-2`}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      className={` font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
                    >
                      Apellido
                    </label>
                    <input
                      type="text"
                      required
                      name="Last Name"
                      autoComplete="off"
                      className={` h-10 rounded-[10px] ${
                        darkMode ? " " : " border-black  "
                      }   bg-dimWhite border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 mt-2`}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center  justify-center gap-4">
                  <div className="flex flex-col w-full">
                    <label
                      className={` font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      required
                      name="Name"
                      autoComplete="off"
                      className={` h-10 rounded-[10px] ${
                        darkMode ? " " : " border-black  "
                      }   bg-dimWhite border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 mt-2`}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      className={` font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
                    >
                      Telefono
                    </label>
                    <input
                      type="text"
                      required
                      name="Last Name"
                      autoComplete="off"
                      className={` h-10 rounded-[10px] ${
                        darkMode ? " " : " border-black  "
                      }   bg-dimWhite border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 mt-2`}
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full">
                  <label
                    className={` font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
                  >
                    Mensaje
                  </label>
                  <textarea
                    name="Questions"
                    rows="3"
                    required
                    autoComplete="off"
                    className={`  rounded-[10px] ${
                      darkMode ? " " : " border-black  "
                    }   bg-dimWhite border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 py-2 mt-2`}
                  />
                </div>

                <button
                  className={`btn  font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 btn-primary  `}
                >
                  Enviar
                </button>
              </div>
            </form>

            <div className="grid md:grid-cols-2 grid-cols-1   rounded-[20px]   md:gap-6 gap-4   w-full  ">
              {cards.map(({ id, img, title, subtitle }) => (
                <div
                  key={id}
                  className={`flex flex-col  px-4 rounded-[20px] items-center justify-center text-center ${
                    darkMode
                      ? "shadow-sm shadow-white border-white "
                      : "shadow-md shadow-black "
                  } `}
                >
                  <div
                    className={`w-[64px] h-[64px] mb-1 mask mask-hexagon ${styles.flexCenter} bg-primary  `}
                  >
                    <div className="text-white text-3xl">{img}</div>
                  </div>
                  <p className={`${styles.title}`}>{title}</p>

                  <div className={`${styles.subtitle}`}>{subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
