import styles, { layout } from "@/style";

import test5 from "@/assets/test5.png";

const Achieve = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={test5}
        alt="billing"
        className="w-[100%] h-[100%] object-contain relative z-[5]"
      />

      <div
        className={` red__gradient absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full  bottom-20`}
      />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Achieve Your Professional Future with Us
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Start your journey to success here. Our expertise has facilitated
        hundreds of entrepreneurs and migrants from around the world in legally
        and efficiently establishing their presence in the United States for
        employment-based opportunities.
      </p>
    </div>
  </section>
);

export default Achieve;
