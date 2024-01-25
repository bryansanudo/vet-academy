import styles from "@/style";

const Benefits = ({ darkMode }) => {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className={`${styles.title}`}>Investor Category</h2>
        <p className={`${styles.subtitle}`}>
          The EB-5 Visa is geared towards investors willing to make a
          substantial financial investment in a qualifying business venture.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>Job Creation</h2>
        <p className={`${styles.subtitle}`}>
          Successful EB-5 applicants contribute to job creation by investing in
          projects that lead to the creation or preservation of at least 10
          full-time jobs for qualifying U.S. workers.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>Conditional Permanent Residency</h2>
        <p className={`${styles.subtitle}`}>
          Initial approval grants conditional permanent residency for the
          investor, spouse, and unmarried children under 21.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>Path to Citizenship</h2>
        <p className={`${styles.subtitle}`}>
          After meeting specific criteria, investors can apply for the removal
          of conditional status and pursue U.S. citizenship.
        </p>
      </div>
    </section>
  );
};

export default Benefits;
