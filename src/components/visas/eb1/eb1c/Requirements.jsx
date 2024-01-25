import styles from "@/style";

const Requirements = ({ darkMode }) => {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className={`${styles.title}`}>Managerial or Executive Role</h2>
        <p className={`${styles.subtitle}`}>
          Applicants must hold a managerial or executive position within the
          multinational company, involving significant decision-making
          authority.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>One Year of Employment</h2>
        <p className={`${styles.subtitle}`}>
          The applicant must have been employed with the multinational company
          for at least one continuous year in the three years preceding the
          transfer to the U.S.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>Relationship Between Entities</h2>
        <p className={`${styles.subtitle}`}>
          There must be a qualifying relationship between the U.S. office and
          the foreign entity, typically involving parent, subsidiary, affiliate,
          or branch relationships.
        </p>
      </div>
    </section>
  );
};

export default Requirements;
