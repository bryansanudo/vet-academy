import styles from "@/style";
const StudyPlan = ({ darkMode }) => {
  const services = [
    {
      id: 100,
      motionTime: 1,
      name: "Mascotas Exóticas",
      sessions: [
        {
          id: 1,
          title:
            "Introducción a la medicina de mascotas exóticas y legislación",
        },
        {
          id: 2,
          title: "Medicina de reptiles",
        },
        {
          id: 3,
          title: "Medicina de aves",
        },
        {
          id: 4,
          title: "Medicina de lagomorfos",
        },
        {
          id: 5,
          title: "Medicina de roedores",
        },
        {
          id: 6,
          title: "Medicina de erizos",
        },
        {
          id: 7,
          title: "Medicina de hurones",
        },
        {
          id: 8,
          title: "Medicina de minipigs",
        },
        {
          id: 9,
          title: "Clínica y diagnóstico en peces",
        },
        {
          id: 10,
          title: "Terapéutica en peces",
        },
        {
          id: 11,
          title: "Conceptos básicos de nutrición",
        },
        {
          id: 12,
          title: "Nutrición en reptiles",
        },
        {
          id: 13,
          title: "Nutrición en aves",
        },
        {
          id: 14,
          title: "Nutrición en mamíferos",
        },
        {
          id: 15,
          title: "Neonatología",
        },
        {
          id: 16,
          title: "Formulación y balanceo de dietas",
        },
        {
          id: 17,
          title: "Manejo de bioterios",
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
