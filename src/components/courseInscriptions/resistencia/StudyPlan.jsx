import styles from "@/style";
const StudyPlan = ({ darkMode }) => {
  const services = [
    {
      id: 100,
      motionTime: 1,
      name: "Resistencia Microbiana",
      sessions: [
        {
          id: 1,
          title:
            "¿Cómo estamos hoy en Latinoamérica respecto a la resistencia microbiana a antibióticos?",
        },
        {
          id: 2,
          title:
            "Residuos de antibióticos en alimentos y su impacto en la salud pública",
        },
        {
          id: 3,
          title: "Conceptos sobre resitencia microbiana a antibióticos",
        },
        {
          id: 4,
          title:
            "Mecanismos de resistencia bacteriana, diagnóstico de infecciones bacterianas",
        },
        {
          id: 5,
          title:
            "Resistencia de hemotrópicos y su impacto sobre la terapéutica",
        },
        {
          id: 6,
          title: "Clases de antibióticos y su espectro",
        },
        {
          id: 7,
          title: "Prescripción de antibióticos y relación con el microbioma",
        },
        {
          id: 8,
          title: "Prevención y control de la infección",
        },
        {
          id: 9,
          title:
            "Uso de guías e implementación de un programa para el manejo adecuado de antibióticos en clínicas veterinarias",
        },
      ],
    },
  ];
  return (
    <>
      <div className="w-full h-[1px] bg-gray-200" />
      <h2 className={`${styles.heading3} w-full text-primary  text-center `}>
        Plan de estudios
      </h2>
      <div className="w-full h-[1px] bg-gray-200" />

      {services.map(({ id, name, sessions, motionTime }) => (
        <div
          tabIndex={0}
          key={id}
          className={`  ${
            darkMode ? " " : ""
          }  text-primary my-6 rounded-box w-full `}
        >
          <div className="collapse-title flex items-center gap-4   ">
            <div
              className={`${styles.title} ${
                darkMode ? "text-white" : "text-black"
              }   `}
            >
              {name}
            </div>
          </div>
          <div
            className={`${styles.sectionText}  font-poppins font-normal text-[16px] leading-[24px]  `}
          >
            {sessions && sessions.length > 0 && (
              <ul>
                {sessions.map(({ id, title, date }) => (
                  <li key={id} className="  w-full">
                    <div className="flex gap-2">
                      <div className="font-bold text-lg text-primary">{id}</div>

                      <div className="flex flex-col w-full">
                        <div
                          className={` ${styles.subtitle} ${
                            darkMode ? "text-white" : "text-black"
                          } mr-4 mt-[2px] `}
                        >
                          {title}
                        </div>
                        <div className=" w-full flex items-center justify-end">
                          <span className={`text-primary `}>{date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-[1px] bg-gray-200" />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default StudyPlan;
