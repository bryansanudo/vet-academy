import styles from "@/style";

const Benefits = ({ darkMode }) => {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className={`${styles.title}`}>Unskilled Workers Category</h2>
        <p className={`${styles.subtitle}`}>
          The Unskilled Workers Visa is specifically tailored for individuals
          classified as "Other Workers," encompassing those with less than two
          years of training or experience in a designated field
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>Permanent Residency</h2>
        <p className={`${styles.subtitle}`}>
          Successful approval of the Unskilled Workers Visa results in the
          granting of permanent residency, allowing recipients to reside and
          work in the United States indefinitely.
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
        <h2 className={`${styles.title}`}> Labor Certification Required</h2>
        <p className={`${styles.subtitle}`}>
          Similar to other EB-3 subcategories, applicants typically need to
          undergo the labor certification process. This involves the U.S.
          employer verifying the unavailability of qualified U.S. workers for
          the position.
        </p>
      </div>
    </section>
  );
};

export default Benefits;
