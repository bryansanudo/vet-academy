import styles from "@/style";

const Requirements = ({ darkMode }) => {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className={`${styles.title}`}>Outstanding Achievements</h2>
        <p className={`${styles.subtitle}`}>
          Applicants must showcase outstanding achievements in the academic or
          research field, surpassing what is commonly encountered.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>
          Evidence of Outstanding Achievements
        </h2>
        <p className={`${styles.subtitle}`}>
          Substantial evidence, such as scholarly publications, awards, and
          letters of recommendation, is required to substantiate the claim of
          outstanding achievements.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>Sustained Recognition</h2>
        <p className={`${styles.subtitle}`}>
          Applicants need to demonstrate sustained recognition in their specific
          academic or research domain at a level significantly above their
          peers.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>
          Categories of Outstanding Achievements
        </h2>
        <p className={`${styles.subtitle}`}>
          Outstanding achievements can encompass a range of contributions to
          academia or research, emphasizing the impact and significance of the
          applicant's work.
        </p>
      </div>
    </section>
  );
};

export default Requirements;
