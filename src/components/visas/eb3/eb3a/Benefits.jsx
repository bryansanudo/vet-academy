import styles from "@/style";

const Benefits = ({ darkMode }) => {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className={`${styles.title}`}>Skilled Workers Category</h2>
        <p className={`${styles.subtitle}`}>
          The Skilled Workers Visa falls under the "Skilled Workers" category,
          providing a pathway for individuals with a specific skill set and at
          least two years of training or experience.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>Permanent Residency</h2>
        <p className={`${styles.subtitle}`}>
          Successful approval of the Skilled Workers Visa results in the
          granting of permanent residency, allowing recipients to reside and
          work in the United States indefinitely.
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
        <h2 className={`${styles.title}`}> Labor Certification Required</h2>
        <p className={`${styles.subtitle}`}>
          Applicants typically need to undergo the labor certification process,
          where their U.S. employer verifies the unavailability of qualified
          U.S. workers for the position.
        </p>
      </div>
    </section>
  );
};

export default Benefits;
