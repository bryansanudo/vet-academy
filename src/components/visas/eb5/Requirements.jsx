import styles from "@/style";

const Requirements = ({ darkMode }) => {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className={`${styles.title}`}>Minimum Investment</h2>
        <p className={`${styles.subtitle}`}>
          Investors must meet the minimum investment threshold, which varies
          depending on the location of the investment.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>Job Creation or Preservation</h2>
        <p className={`${styles.subtitle}`}>
          Investments must lead to the creation or preservation of at least 10
          full-time jobs for qualifying U.S. workers within a designated
          timeframe.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>Targeted Employment Area (TEA)</h2>
        <p className={`${styles.subtitle}`}>
          Investors may benefit from a reduced investment threshold if their
          investment is in a TEA, which includes rural areas or locations with
          high unemployment.
        </p>
      </div>
    </section>
  );
};

export default Requirements;
