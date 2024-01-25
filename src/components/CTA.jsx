import styles from "../style";
import { Link } from "react-router-dom";

const CTA = ({ darkMode }) => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${
      styles.padding
    } sm:flex-row flex-col ${
      darkMode ? " bg-black-gradient-2 " : "shadow-md shadow-black "
    } rounded-[20px] `}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} dark:text-white`}>
        Explore our Legal Hub Today!
      </h2>
      <p
        className={`${styles.paragraph} dark:text-dimWhite max-w-[470px] mt-5`}
      >
        Unleash the full potential of your practice with a comprehensive suite
        of tools. Navigate the legal realm seamlessly and expand your influence
        across borders.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Link to="/contact">
        <button className={`${styles.button} bg-primary `}>Get Started</button>
      </Link>
    </div>
  </section>
);

export default CTA;
