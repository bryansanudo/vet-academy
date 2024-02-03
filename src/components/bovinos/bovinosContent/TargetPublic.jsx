import styles from "@/style";

const TargetPublic = () => {
  return (
    <>
      <div className="w-full h-[1px] bg-gray-200" />
      <h2 className={`${styles.heading3} w-full text-primary  text-center `}>
        ¿A quién está dirigido este curso?
      </h2>
      <div className="w-full h-[1px] bg-gray-200" />
      <div className={`${styles.subtitle} my-6`}>
        Médicos veterinarios y estudiantes de medicina veterinaria que estén
        interesados en profundizar sus conocimientos en temas que se presentan
        en la clínica diaria de bovinos.
      </div>
    </>
  );
};

export default TargetPublic;
