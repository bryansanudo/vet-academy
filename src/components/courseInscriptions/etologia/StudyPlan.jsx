import styles from "@/style";
const StudyPlan = ({ darkMode }) => {
  const services = [
    {
      id: 100,
      motionTime: 1,
      name: "Manejo del dolor en caninos y felinos		",
      sessions: [
        {
          id: 1,
          title: "Principios básicos del aprendizaje animal",
        },
        {
          id: 2,
          title: "El ABC del control de estímulos",
        },
        {
          id: 3,
          title:
            "Valoración de conducta en caninos, ¿Cómo determinar el temperamento en caninos?",
        },
        {
          id: 4,
          title:
            "Consulta baja en estrés: Hacia una nueva atención del paciente",
        },
        {
          id: 5,
          title: "Manejo de ansiedad en caninos",
        },
        {
          id: 6,
          title: "Manejo integral del miedo  y las fobias en pequeños animales",
        },
        {
          id: 7,
          title:
            "Análisis de riesgo. Decisiones en episodios de agresividad en caninos",
        },
        {
          id: 8,
          title: "Trastornos de la conducta como signo de enfermedad",
        },
        {
          id: 9,
          title:
            "Socialización de cachorros previniendo trastornos de conducta",
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
