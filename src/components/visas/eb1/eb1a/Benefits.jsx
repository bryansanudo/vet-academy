import styles from "@/style";

const Benefits = ({ darkMode }) => {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className={`${styles.title}`}>
          No Job Offer or Labor Certification Required
        </h2>
        <p className={`${styles.subtitle}`}>
          Unlike some other visa categories, the Extraordinary Ability Visa
          doesn't necessitate a specific job offer from a U.S. employer,
          offering flexibility in the application process.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>Permanent Residency</h2>
        <p className={`${styles.subtitle}`}>
          Successfully obtaining the Extraordinary Ability Visa results in the
          granting of permanent residency, allowing individuals to live and work
          in the United States indefinitely.
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
        <h2 className={`${styles.title}`}>Shorter Processing Time</h2>
        <p className={`${styles.subtitle}`}>
          The Extraordinary Ability Visa is often considered advantageous due to
          its potentially shorter processing time, providing a quicker pathway
          to permanent residency.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>No Numerical Cap</h2>
        <p className={`${styles.subtitle}`}>
          While demand can affect processing times, there is no specific
          numerical cap on the Extraordinary Ability Visa, distinguishing it
          from certain other employment-based categories.
        </p>
      </div>
    </section>
  );
};

export default Benefits;
