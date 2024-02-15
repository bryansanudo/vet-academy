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
          title: "Bases en monitoreo",
        },
        {
          id: 2,
          title: "Manejo y aplicación de medicamentos",
        },
        {
          id: 3,
          title: "Evaluación del dolor",
        },
        {
          id: 4,
          title: "Manejo de sondas",
        },
        {
          id: 5,
          title: "Cuidados en el paciente postquirúrgico",
        },
        {
          id: 6,
          title: "Cuidados en el paciente infeccioso",
        },
      ],
    },
    {
      id: 200,
      motionTime: 1,
      name: "Quirófano",
      sessions: [
        {
          id: 7,
          title: "Comportamiento en quirófano",
        },
        {
          id: 8,
          title: "Antisepsia y preparación del paciente",
        },
        {
          id: 9,
          title: "Instrumental quirúrgico en tejidos blandos",
        },
        {
          id: 10,
          title: "Instrumental quirúrgico de ortopedia",
        },
        {
          id: 11,
          title: "Instrumental quirúrgico en oftalmología",
        },
        {
          id: 12,
          title: "Central de esterilización",
        },
      ],
    },
    {
      id: 300,
      motionTime: 1,
      name: "Radiología",
      sessions: [
        {
          id: 13,
          title: "Principios de radiología",
        },
        {
          id: 14,
          title: "Radiología de cráneo",
        },
        {
          id: 15,
          title: "Radiología de columna",
        },
        {
          id: 16,
          title: "Radiología de miembros anteriores",
        },
        {
          id: 17,
          title: "Radiología de miembros posteriores",
        },
        {
          id: 18,
          title: "Radiología de tórax, abdomenb y  pelvis",
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
