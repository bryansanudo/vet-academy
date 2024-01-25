import styles from "@/style";

const Application = ({ darkMode }) => {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className={`${styles.title}`}>Documentation</h2>
        <p className={`${styles.subtitle}`}>
          Thorough documentation supporting the claim of advanced degrees or
          exceptional abilities is crucial, including academic credentials,
          publications, awards, and letters of recommendation.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>Form I-140 Petition</h2>
        <p className={`${styles.subtitle}`}>
          The applicant or their U.S. employer must file a Form I-140 petition
          with the U.S. Citizenship and Immigration Services (USCIS).
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>Premium Processing Option</h2>
        <p className={`${styles.subtitle}`}>
          Expedited processing is available through the premium processing
          option for those willing to pay an additional fee.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>
          Consular Processing or Adjustment of Status
        </h2>
        <p className={`${styles.subtitle}`}>
          Once the petition is approved, the applicant can undergo consular
          processing if outside the U.S. or adjust their status if already
          present in the country.
        </p>
      </div>
    </section>
  );
};

export default Application;
