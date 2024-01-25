import styles from "@/style";

const Application = ({ darkMode }) => {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className={`${styles.title}`}>Documentation</h2>
        <p className={`${styles.subtitle}`}>
          Thorough documentation supporting the applicant's qualifications, job
          offer, and the labor certification process is crucial. This may
          include educational credentials, work experience, and job offer
          letters.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>Form I-140 Petition</h2>
        <p className={`${styles.subtitle}`}>
          The U.S. employer must file a Form I-140 petition on behalf of the
          applicant with the U.S. Citizenship and Immigration Services (USCIS).
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>Priority Date</h2>
        <p className={`${styles.subtitle}`}>
          The priority date, established when the Form I-140 is filed,
          determines the applicant's place in the queue for visa processing.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>
          Consular Processing or Adjustment of Status:
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
