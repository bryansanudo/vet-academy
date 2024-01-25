import styles from "@/style";

const Requirements = ({ darkMode }) => {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className={`${styles.title}`}>
          Advanced Degrees or Exceptional Abilities
        </h2>
        <p className={`${styles.subtitle}`}>
          Applicants must hold an advanced degree (master's degree or higher) or
          demonstrate exceptional abilities in their field, significantly
          surpassing the norm.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>
          Labor Certification (in some cases)
        </h2>
        <p className={`${styles.subtitle}`}>
          While not required for those with exceptional abilities, individuals
          with advanced degrees may need to undergo a labor certification
          process unless eligible for a National Interest Waiver (NIW).
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>
          National Interest Waiver (NIW) Criteria:
        </h2>
        <p className={`${styles.subtitle}`}>
          For those seeking a NIW, they must prove that their work is of
          substantial benefit to the United States, and it is in the national
          interest to waive the labor certification requirement.
        </p>
      </div>
    </section>
  );
};

export default Requirements;
