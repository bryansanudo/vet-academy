import styles from "@/style";

const Benefits = ({ darkMode }) => {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className={`${styles.title}`}>
          Advanced Degrees or Exceptional Abilities
        </h2>
        <p className={`${styles.subtitle}`}>
          The EB-2 Visa caters to individuals with advanced degrees (master's
          degree or higher) or those demonstrating exceptional abilities in
          fields such as science, arts, business, or education.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>Permanent Residency</h2>
        <p className={`${styles.subtitle}`}>
          Successful approval of the EB-2 Visa results in the granting of
          permanent residency, allowing recipients to reside and work in the
          United States indefinitely.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>Path to Citizenship</h2>
        <p className={`${styles.subtitle}`}>
          After maintaining continuous residence as a green card holder for five
          years, individuals become eligible to apply for U.S. citizenship.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>Priority Workers Category</h2>
        <p className={`${styles.subtitle}`}>
          The EB-2 Visa falls under the "Priority Workers" category, potentially
          expediting the immigration process.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>
          National Interest Waiver (NIW) Option
        </h2>
        <p className={`${styles.subtitle}`}>
          Certain EB-2 applicants may qualify for a National Interest Waiver
          (NIW), allowing them to bypass the labor certification process.
        </p>
      </div>
    </section>
  );
};

export default Benefits;
