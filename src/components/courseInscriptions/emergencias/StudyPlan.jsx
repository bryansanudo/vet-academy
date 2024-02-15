import styles from "@/style";
const StudyPlan = ({ darkMode }) => {
  const services = [
    {
      id: 100,
      motionTime: 1,
      name: "Emergencias Veterinarias",
      sessions: [
        {
          id: 1,
          title: "Triage y clasificación",
        },
        {
          id: 2,
          title: "Atención y manejo del trauma",
        },
        {
          id: 3,
          title: "Estabilización y soporte",
        },
        {
          id: 4,
          title: "RCCP, Soporte vital básico y avanzado",
        },
        {
          id: 5,
          title: "Ecografía de emergencia",
        },
        {
          id: 6,
          title: "Radiología de emergencia",
        },
        {
          id: 7,
          title: "Emergencias cardiovasculares",
        },
        {
          id: 8,
          title: "Emergencias respiratorias",
        },
        {
          id: 9,
          title: "Emergencias nefrourinarias",
        },
        {
          id: 10,
          title: "Emergencias pediátricas",
        },
        {
          id: 11,
          title: "Emergencias hematológicas",
        },
        {
          id: 12,
          title: "Emergencias oftalmológicas",
        },
        {
          id: 13,
          title: "Emergencias gastrointestinales",
        },
        {
          id: 14,
          title: "Emergencias neurológicas",
        },
        {
          id: 15,
          title: "Emergencias ortopédicas",
        },
        {
          id: 16,
          title: "Emergencias endocrinas",
        },
        {
          id: 17,
          title: "Emergencias por intoxicación",
        },
        {
          id: 18,
          title: "Manejo de heridas en la sala de emergencias",
        },
        {
          id: 19,
          title: "Manejo del dolor en emergencias",
        },
        {
          id: 20,
          title: "Emergencias Quirúrgicas",
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
