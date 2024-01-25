import styles from "@/style";

const Application = ({ darkMode }) => {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className={`${styles.title}`}>Form I-526 Petition</h2>
        <p className={`${styles.subtitle}`}>
          Investors or their legal representatives must file a Form I-526
          petition with the U.S. Citizenship and Immigration Services (USCIS).
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>Conditional Permanent Residency</h2>
        <p className={`${styles.subtitle}`}>
          Upon approval, investors and their eligible family members receive
          conditional permanent residency.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>Form I-829 Petition</h2>
        <p className={`${styles.subtitle}`}>
          Within the conditional period, investors file a Form I-829 to remove
          conditions and obtain permanent residency.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>
          Consular Processing or Adjustment of Status
        </h2>
        <p className={`${styles.subtitle}`}>
          Final steps involve consular processing or adjusting status based on
          location and circumstances.
        </p>
      </div>
    </section>
  );
};

export default Application;
