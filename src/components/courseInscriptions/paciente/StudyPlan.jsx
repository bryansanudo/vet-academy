import styles from "@/style";
const StudyPlan = ({ darkMode }) => {
  const services = [
    {
      id: 100,
      motionTime: 1,
      name: "Paciente crítico",
      sessions: [
        {
          id: 1,
          title: "Clasificación del paciente crítico y scores",
        },
        {
          id: 2,
          title: "Equilibrio ácido - base, gasometría arterial y venosa",
        },
        {
          id: 3,
          title: "Uso de biomarcadores",
        },
        {
          id: 4,
          title: "Reanimación básica y avanzada",
        },
        {
          id: 5,
          title: "Ultrasonografía del paciente crítico",
        },
        {
          id: 6,
          title: "Monitorización",
        },
        {
          id: 7,
          title: "Utilidad de transfusiones y componentes sanguíneos",
        },
        {
          id: 8,
          title: "Atención del paciente con trauma",
        },
        {
          id: 9,
          title: "Abordaje del paciente neurocrítico",
        },
        {
          id: 10,
          title: "Atención del paciente con disfunción respiratoria",
        },
        {
          id: 11,
          title: "Atención del paciente cardiópata",
        },
        {
          id: 12,
          title: "Atención del paciente con disfunción renal",
        },
        {
          id: 13,
          title: "Atención del paciente con uripatías obstructivas",
        },
        {
          id: 14,
          title: "Atención del paciente séptico, con falla multiorgánica",
        },
        {
          id: 15,
          title: "Procedimientos especiales",
        },
        {
          id: 16,
          title: "Ventilación mecánica",
        },
        {
          id: 17,
          title: "Sedo / Analgesia",
        },
        {
          id: 18,
          title: "Nutrición en el paciente crítico",
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
