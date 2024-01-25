import styles from "@/style";

const Requirements = ({ darkMode }) => {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className={`${styles.title}`}>Extraordinary Ability</h2>
        <p className={`${styles.subtitle}`}>
          Applicants must demonstrate extraordinary abilities in their field,
          indicating a level of expertise and recognition significantly above
          the norm.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>Evidence of Extraordinary Ability</h2>
        <p className={`${styles.subtitle}`}>
          Substantial evidence, such as national or international awards,
          significant achievements, and recognition from peers, is required to
          support the claim of extraordinary ability.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>
          Sustained National or International Recognition
        </h2>
        <p className={`${styles.subtitle}`}>
          The applicant must showcase sustained national or international
          recognition in their particular domain, whether it be in science,
          arts, education, business, or athletics.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>
          Categories of Extraordinary Ability
        </h2>
        <p className={`${styles.subtitle}`}>
          Extraordinary ability can be demonstrated in various fields,
          emphasizing achievements that have had a substantial impact on the
          industry.
        </p>
      </div>
    </section>
  );
};

export default Requirements;
