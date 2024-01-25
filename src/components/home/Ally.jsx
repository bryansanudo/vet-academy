import styles, { layout } from "@/style";

import test3 from "@/assets/test3.png";

import { Link } from "react-router-dom";

const Ally = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Your Immigration Ally at EB Visa Law</h2>
      <p className={`${styles.paragraph} max-w-[450px] mt-5`}>
        Meet the dedicated team at EB Visa Law, led by our experienced founding
        partner. With a strong background in immigration law, our team is
        committed to creating unique strategies to achieve the goals of our
        clients.
      </p>
      <p className={`${styles.paragraph} max-w-[450px] mt-5`}>
        Our focus extends to representing internationally recognized
        individuals, guiding them through the complexities of legal permanent
        residence and securing EB-1 visas for those with extraordinary abilities
        in science, arts, education, business, or athletics.
      </p>
      <p className={`${styles.paragraph} max-w-[450px] mt-5`}>
        Benefit from our team's deep understanding of the immigration process
        and its nuances. We are here to relate to and comprehend your concerns,
        expectations, and difficulties throughout your immigration journey,
        ensuring a smooth and successful experience.
      </p>

      <Link to="/contact">
        <button className={`${styles.button} bg-primary `}>Get Started</button>
      </Link>
    </div>

    <div className={layout.sectionImg}>
      {/* gradient start */}
      <div
        className={` red__gradient absolute z-[3] -right-1/2 top-0 w-[50%] h-[50%] rounded-full `}
      />

      {/* <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full red__gradient" /> */}
      {/* gradient end */}
      <img
        src={test3}
        alt="billing"
        className="h-[600px] w-[600px] object-contain"
      />
    </div>
  </section>
);

export default Ally;
