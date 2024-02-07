import styles from "@/style";

import { useEffect } from "react";

const PrivacyPolicy = ({ darkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const privacy = [
    {
      id: "0",
      title: "Recopilación de Información Personal:",
      subtitle:
        "En Vet Academy, valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Durante el proceso de inscripción en nuestros cursos en línea, podemos recopilar información personal como tu nombre, dirección de correo electrónico, información de pago, y detalles de contacto. Esta información se utiliza únicamente con el propósito de administrar tu cuenta y proporcionarte acceso a nuestros cursos y servicios.",
    },
    {
      id: "1",
      title: "Uso de la Información Personal:",
      subtitle:
        "La información personal que recopilamos se utiliza para gestionar tu participación en nuestros cursos en línea, procesar tus pagos, proporcionar soporte técnico y comunicarnos contigo sobre actualizaciones del curso, eventos y ofertas especiales relacionadas con Vet Academy. No compartiremos tus datos personales con terceros sin tu consentimiento expreso, a menos que sea necesario para cumplir con obligaciones legales o proteger nuestros derechos.",
    },
    {
      id: "11",
      title: "Grabaciones de Contenido y Propiedad Intelectual:",
      subtitle:
        "Nuestros cursos en línea pueden incluir contenido grabado, como conferencias, presentaciones y material educativo. Estas grabaciones son propiedad exclusiva de Vet Academy. Los estudiantes no están autorizados a compartir, distribuir o reproducir este contenido de ninguna manera sin el consentimiento previo por escrito de Vet Academy.",
    },
    {
      id: "12",
      title: "Derechos del Usuario:",
      subtitle:
        "Tienes derecho a corregir o eliminar la información personal que tenemos sobre ti. Si deseas ejercer estos derechos o tienes preguntas sobre nuestra política de privacidad, no dudes en ponerte en contacto con nuestro equipo de atención al cliente.",
    },
    {
      id: "13",
      title: "Cambios en la Política de Privacidad:",
      subtitle:
        "Nos reservamos el derecho de actualizar o modificar esta política de privacidad en cualquier momento, y cualquier cambio significativo será comunicado a través de nuestro sitio web o por correo electrónico. Te recomendamos revisar esta página regularmente para estar al tanto de cualquier actualización.",
    },
    {
      id: "2",

      subtitle:
        "Al usar nuestros servicios y acceder a nuestro sitio web, aceptas los términos y condiciones de nuestra política de privacidad. Si no estás de acuerdo con esta política, por favor abstente de utilizar nuestros servicios.",
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
            Políticas de privacidad{" "}
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

export default PrivacyPolicy;
