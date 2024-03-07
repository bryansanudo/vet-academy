import styles from "@/style";
const StudyPlan = ({ darkMode }) => {
  const services = [
    {
      id: 100,
      motionTime: 1,
      name: "Equinos",
      sessions: [
        {
          id: 1,
          title: "Manejo Nutricional en Equinos",
          date: "Lunes 6 de mayo",
        },
        {
          id: 2,
          title: "Alimentación de yegua reproductora y potro",
          date: "Miércoles 8 de mayo",
        },
        {
          id: 3,
          title: "Oftalmología",
          date: "viernes 17 de mayo",
        },
        {
          id: 4,
          title: "Odontología equina",
          date: "Viernes 24 de mayo",
        },
        {
          id: 5,
          title: "Patologías gástricas",
          date: "Lunes 27 de mayo",
        },
        {
          id: 6,
          title: "Síndrome abdominal agudo I ",
          date: "Viernes 31 de mayo",
        },
        {
          id: 7,
          title: "Enfermedades metabólicas",
          date: "Miércoles 5 de junio",
        },
        {
          id: 8,
          title: "Enfermedades infecciosas",
          date: "Jueves 6 de junio",
        },
        {
          id: 9,
          title: "Enfermedades respiratorias",
          date: "Viernes 7 de junio",
        },
        {
          id: 10,
          title: "Enfermedades neurológicas",
          date: "Martes 11 de junio",
        },
        {
          id: 11,
          title: "Enfermedades reproductivas en el macho",
          date: "Miércoles 12 de junio",
        },
        {
          id: 12,
          title: "Enfermedades reproductivas en la hembra",
          date: "Jueves 13 de junio",
        },
        {
          id: 13,
          title: "Podología I",
          date: "Lunes 17 de junio",
        },
        { id: 14, title: "Podología II", date: "Martes 18 de junio" },
        {
          id: 15,
          title: "Patologías más comunes en ortopedia II",
          date: "Miércoles 19 de junio",
        },
        {
          id: 16,
          title: "Patologías más comunes en ortopedia I",
          date: "Jueves 20 de junio",
        },
        {
          id: 17,
          title: "Introducción a la peronatología equina",
          date: "Lunes 24 de junio",
        },
        { id: 18, title: "Septicemia neonatal", date: "Martes 25 de junio" },
        {
          id: 19,
          title: "Encefalopatía neonatal",
          date: "Miércoles 26 de junio",
        },
        {
          id: 20,
          title: "Otras condiciones comunes en potros neonatos",
          date: "Jueves 27 de junio",
        },
        { id: 21, title: "Sedación en pie", date: "Lunes 8 de julio" },
        { id: 22, title: "Anestesia en campo", date: "Martes 9 de julio" },
        {
          id: 23,
          title: "Toma de decisiones para cirugías electivas",
          date: "Miércoles 10 de julio",
        },
        {
          id: 24,
          title: "Cirugías electivas comunes en campo",
          date: "Jueves 11 de julio",
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
