import styles, { layout } from "@/style";
import { Link } from "react-router-dom";

import image from "@/assets/about-us-2.jpg";

import { GoDot } from "react-icons/go";
import CountDown from "@/components/CountDown";

const Business = ({ darkMode }) => {
  const services = [
    {
      id: 100,
      name: "Bienestar Animal",
      consultorias: [
        {
          id: 1,
          title: "Conceptos generales de bienestar animal en bovinos.",
          date: "Febrero 20",
        },
        { id: 2, title: "Etologia bovina.", date: "Febrero 21" },
        { id: 3, title: "Manejo racional de bovinos.", date: "Febrero 27" },
        {
          id: 4,
          title:
            "Enfoque económico del bienestar animal: Efectos en la producción de carne y leche.",
          date: "Febrero 28",
        },
      ],
    },
    {
      id: 200,
      name: "Nutrición",
      consultorias: [
        {
          id: 5,
          title: "Nutrición y su importancia en la ganaderia.",
          date: "Marzo 5",
        },
        { id: 6, title: "Fisiología ruminal.", date: "Marzo 7" },
        { id: 7, title: "Metabolismo de nutrientes.", date: "Marzo 11" },
        { id: 8, title: "Alimentación de terneras.", date: "Marzo 13" },
        {
          id: 9,
          title: "Enfermedades metabólicas y periodo de transición.",
          date: "Marzo 14",
        },
      ],
    },
    {
      id: 300,
      name: "Medicina",
      consultorias: [
        { id: 10, title: "Planes sanitarios en bovinos.", date: "Abril 2" },
        {
          id: 11,
          title: "Diagnóstico y manejo del cuadro de hemoparásitos en bovino.",
          date: "Abril 4",
        },
        {
          id: 12,
          title: "Manejo clínico de diarreas en terneros.",
          date: "Abril 9",
        },
        {
          id: 13,
          title: "Manejo del complejo respiratorio bovino.",
          date: "Abril 11",
        },
        {
          id: 14,
          title: "Manejo de las principales patologías podales.",
          date: "Abril 16",
        },
        { id: 15, title: "Manejo clínico de la mastitis.", date: "Abril 18" },
        {
          id: 16,
          title: "Manejo clínico de la distocia y accidentes de la gestación.",
          date: "Abril 23",
        },
        {
          id: 17,
          title: "Manejo clínico de la enfermedad posparto.",
          date: "Abril 25",
        },
        { id: 18, title: "Sindrome de la vaca caída.", date: "Abril 30" },
        {
          id: 19,
          title: "Manejo clínico de Desplazamiento de abomaso y torsión.",
          date: "Mayo 2",
        },
        {
          id: 20,
          title: "Manejo de la emergencia en el bovino.",
          date: "Mayo 7",
        },
      ],
    },
    {
      id: 400,
      name: "Anestesia y Cirugía",
      consultorias: [
        { id: 25, title: "Anestesia.", date: "Mayo 9" },
        { id: 24, title: "Cirugías frecuentes", date: "Mayo 14" },
        { id: 23, title: "Cirugías electivas reproductivas", date: "Mayo 15" },
        {
          id: 22,
          title: "Cirugía en patologías reproductivas.",
          date: "Mayo 16",
        },
        { id: 21, title: "Cirugias digestivas.", date: "Mayo 20" },
      ],
    },
    {
      id: 500,
      name: "Reproducción",
      consultorias: [
        {
          id: 26,
          title: "Anatomía y fisiología del aparato reproductor de la vaca.",
          date: "Mayo 21",
        },
        { id: 27, title: "Etapas del ciclo estral", date: "Mayo 22" },
        { id: 28, title: "Técnicas de detección de celos", date: "Mayo 23" },
        {
          id: 29,
          title: "Tecnica de inseminación artificial y manejo de semen bovino.",
          date: "Mayo 28",
        },
        { id: 30, title: "Protocolos de sincronización.", date: "Mayo 29" },
        { id: 31, title: "Manejo de la vaca en transición.", date: "Mayo 30" },
        {
          id: 32,
          title: "Protocolo de inducción y atención del neonato.",
          date: "Junio 4",
        },
      ],
    },
  ];

  return (
    <section id="features" className="flex flex-col md:flex-row justify-start ">
      <div className={`${layout.sectionInfo} items-start`}>
        <h2 className={`${styles.heading2} `}>Bovinos en la clínica diaria</h2>
        {/* <p className={`${styles.paragraph} `}>
          La ciencia detrás del cuidado de los bovinos con nuestro curso único{" "}
          <span className="text-primary font-bold">
            "Bovinos en la Clínica Diaria".
          </span>{" "}
          cada módulo está diseñado para ofrecerte una perspectiva integral
          sobre el manejo clínico y quirúrgico del ganado.
        </p> */}
        <ul className="w-[250px] md:w-[500px] ">
          <li
            className={` ${
              styles.paragraph
            } w-full border-b-2 border-neutral-100 border-opacity-100 dark:border-opacity-50 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            ✅ 32 charlas en vivo por la plataforma Zoom.
          </li>
          <li
            className={` ${
              styles.paragraph
            } w-full border-b-2 border-neutral-100 border-opacity-100  dark:border-opacity-50 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            ✅ Grabaciones disponibles durante 2 meses.
          </li>
          <li
            className={` ${
              styles.paragraph
            } w-full border-b-2 border-neutral-100 border-opacity-100  dark:border-opacity-50 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            ✅ Docentes expertos en el área con reconocimiento internacional y
            experiencia en docencia en pregrado y posgrado.
          </li>
          <li
            className={` ${
              styles.paragraph
            } w-full border-b-2 border-neutral-100 border-opacity-100  dark:border-opacity-50 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            ✅ Certificado de asistencia al finalizar.
          </li>
          <li
            className={` ${styles.paragraph} w-full  ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <span className="font-bold">
              Precio (300 USD🌎 - 1.000.000 COP)
            </span>
          </li>
        </ul>

        <CountDown />

        <div className="flex w-full items-end justify-start ">
          <Link to="/contact">
            <button className={`${styles.button} bg-primary  `}>
              Inscripciones
            </button>
          </Link>
        </div>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        <div className="md:col-span-2 flex flex-col items-center  justify-center w-full">
          {services.map(({ id, name, consultorias }) => (
            <div
              tabIndex={0}
              key={id}
              className={`  ${
                darkMode
                  ? "shadow-sm shadow-white duration-700 "
                  : "shadow-md shadow-black  duration-700"
              } collapse collapse-arrow text-primary  my-4 rounded-box w-full`}
            >
              <div className="collapse-title flex items-center gap-4 ">
                <div className={`${darkMode ? "text-white" : "text-black"}`}>
                  Icono
                </div>
                <div className={`${styles.title}   `}>{name}</div>
              </div>
              <div
                className={`${styles.sectionText} collapse-content font-poppins font-normal text-[16px] leading-[24px]  mr-10`}
              >
                {consultorias && consultorias.length > 0 && (
                  <ul>
                    {consultorias.map(({ id, title, date }) => (
                      <li key={id} className=" border-b-2 w-full">
                        <div className="flex gap-2">
                          <div className="font-bold text-lg text-primary">
                            {id}
                          </div>

                          <div className="flex flex-col w-full">
                            <div
                              className={` ${styles.subtitle} ${
                                darkMode ? "text-white" : "text-black"
                              } mr-4 mt-[2px] `}
                            >
                              {title}
                            </div>
                            <div className=" w-full flex items-center justify-end">
                              <span className={`    text-primary  `}>
                                {date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;
