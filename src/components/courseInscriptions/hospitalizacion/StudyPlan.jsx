import styles from "@/style";
const StudyPlan = ({ darkMode }) => {
  const services = [
    {
      id: 100,
      motionTime: 1,
      name: "Hospitalización",
      sessions: [
        {
          id: 1,
          title: "Fluidoterapia",
        },
        {
          id: 2,
          title: "Gasometría",
        },
        {
          id: 3,
          title: "Nutrición en el paciente crítico",
        },
        {
          id: 4,
          title: "Coagulopatías y transfusiones",
        },
        {
          id: 5,
          title: "Manejo de heridas",
        },
        {
          id: 6,
          title: "Shock",
        },
        {
          id: 7,
          title: "RCCP soporte vital básico",
        },
        {
          id: 9,
          title: "Enfermedades infecciosas y sepsis",
        },
        {
          id: 10,
          title: "Antibioticoterapia",
        },
        {
          id: 11,
          title: "Manejo del dolor del paciente politraumatizado",
        },
        {
          id: 12,
          title: "Monitoreo",
        },
        {
          id: 13,
          title: "Ecofast",
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
