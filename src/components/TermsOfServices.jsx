import styles from "@/style";

import { useEffect } from "react";

const TermsOfServices = ({ darkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const privacy = [
    {
      id: "0",
      title: "Desistimiento o Retiro Voluntario:",
      subtitle:
        "Si por alguna razón no puedes asistir a la capacitación para la cual te has inscrito, te pedimos que nos lo comuniques por escrito y solicites la devolución del dinero.",
    },
    {
      id: "1",
      title: "Devolución con Más de (30) Días Hábiles Antes del Inicio:",
      subtitle:
        "Si tu solicitud de devolución se realiza con más de (30) días hábiles antes de la fecha de inicio de la capacitación, se descontará el costo de la transacción del monto pagado, independientemente de la modalidad de pago. El resto del dinero será devuelto en su totalidad.",
    },
    {
      id: "11",
      title: "Devolución con Menos de (30) Días Hábiles Antes del Inicio:",
      subtitle:
        "En el caso de solicitudes de devolución con menos de (30) días hábiles antes de la fecha de inicio, se reembolsará el 50% del monto pagado, menos el costo de la transacción, independientemente de la modalidad de pago. El resto del dinero será devuelto en su totalidad.",
    },
    {
      id: "12",
      title: "Sin Devolución Después de 15 Días Hábiles Antes del Inicio:",
      subtitle:
        "Lamentablemente, no se realizarán devoluciones de dinero pagado si la solicitud se realiza después de 15 días hábiles antes de la fecha de inicio de la capacitación.",
    },
    {
      id: "13",
      title: "Falta de Comunicación en el Tiempo Establecido:",
      subtitle:
        "Si no nos informas por escrito dentro del plazo establecido, no será posible realizar la devolución del dinero pagado.",
    },
    {
      id: "2",

      subtitle:
        "Estas políticas están diseñadas para garantizar un proceso justo y transparente para todas las partes involucradas. Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nuestro equipo de atención al cliente.",
    },
  ];
  return (
    <div
      className={`dark:bg-accent my-28   ${styles.paddingX} ${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth} `}>
        <div
          className={`  red__gradient md:absolute z-[0] w-[55%] h-[60%] -right-[50%] rounded-full  bottom-40`}
        />
        <div
          className={`  pink__gradient absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full `}
        />
        <div className="w-full flex justify-between items-center flex-col sm:mb-16 mb-6 relative z-[1]">
          <h2 className={`${styles.heading2} mt-20`}>
            Políticas de devoluciones y reembolsos
          </h2>
        </div>
        <section
          id="clients"
          className={`${styles.flexCenter} flex-col relative gap-6 `}
        >
          {privacy.map(({ id, title, subtitle }) => (
            <div className="w-full" key={id}>
              <h2 className={`${styles.title} mb-2`}>{title}</h2>
              <p className={`${styles.subtitle}`}>{subtitle}</p>
            </div>
          ))}
          <div className="w-full">
            <a href="mailto:vet.academyeducacion@gmai.com">
              <p className={`${styles.subtitle}`}>
                vet.academyeducacion@gmai.com
              </p>
            </a>
            <a href="tel:+13057915610">
              <p className={`${styles.subtitle}`}>+57 (324) 3291412</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsOfServices;
