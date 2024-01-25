import styles, { layout } from "@/style";

import test5 from "@/assets/test5.png";
import aboutUs from "@/assets/about-us-2.jpg";

const Achieve = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={aboutUs}
        alt="billing"
        className="w-[100%] h-[100%] object-contain relative z-[5] rounded-3xl "
      />

      <div
        className={` red__gradient absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full  bottom-20`}
      />
    </div>

    <div className="flex flex-col items-center justify-center">
      {/* <h2 className={styles.heading2}>
        En Vet Academy, nos apasiona brindar la mejor educación veterinaria
        disponible.
      </h2> */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        VET Academy es una plataforma desarrollada para la educación continua de
        médicos veterinarios, estudiantes y auxiliares con el fin de aportar al
        crecimiento profesional y perfeccionamiento de habilidades técnicas.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Nuestra metodología se basa en la formación virtual y presencial en
        áreas como, medicina interna, cirugía, anestesia, manejo del dolor,
        cuidado crítico, etología y demás especialidades; contando con la
        participación de especialistas que poseen una amplia trayectoria y
        experiencia.
      </p>
    </div>
  </section>
);

export default Achieve;
