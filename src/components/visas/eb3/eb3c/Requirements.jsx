import styles from "@/style";

const Requirements = ({ darkMode }) => {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className={`${styles.title}`}>Unskilled Worker Qualifications</h2>
        <p className={`${styles.subtitle}`}>
          Applicants must possess skills that require less than two years of
          training or experience in the respective field.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>Job Offer from U.S. Employer</h2>
        <p className={`${styles.subtitle}`}>
          A U.S. employer must offer a permanent, full-time job to the
          applicant, demonstrating the need for the specific skills they bring.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>Labor Certification Process</h2>
        <p className={`${styles.subtitle}`}>
          The U.S. employer must obtain a labor certification from the
          Department of Labor, verifying the shortage of qualified U.S. workers
          for the position.
        </p>
      </div>
    </section>
  );
};

export default Requirements;
