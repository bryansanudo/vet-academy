import styles from "@/style";

const Benefits = ({ darkMode }) => {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className={`${styles.title}`}>Intra-Company Transfer</h2>
        <p className={`${styles.subtitle}`}>
          The Multinational Manager or Executive Visa facilitates the
          intra-company transfer of multinational managers or executives to a
          U.S.-based office.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>Permanent Residency</h2>
        <p className={`${styles.subtitle}`}>
          Successful approval of the Multinational Manager or Executive Visa
          leads to the grant of permanent residency, allowing recipients to live
          and work in the United States indefinitely.
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
        <h2 className={`${styles.title}`}> Expedited Processing</h2>
        <p className={`${styles.subtitle}`}>
          The Multinational Manager or Executive Visa is often processed more
          expeditiously compared to some other immigrant visa categories,
          offering a quicker pathway to permanent residency.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>No Numerical Cap</h2>
        <p className={`${styles.subtitle}`}>
          Similar to other multinational visas, there is no specific numerical
          cap on the Multinational Manager or Executive Visa, distinguishing it
          from certain other employment-based categories.
        </p>
      </div>
    </section>
  );
};

export default Benefits;
