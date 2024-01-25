import styles from "@/style";

import { Link } from "react-router-dom";

const cards = [
  {
    id: 1,
    img: "",
    title: "EB-1 Visa",
    subtitle:
      "Designed for those with extraordinary abilities, outstanding professors, researchers, and certain executives or managers, the EB-1 Visa is a preferred option that doesn't require labor certification. ",
    link: "/eb1a",
  },
  {
    id: 2,
    img: "",
    title: "EB-2 Visa",
    subtitle:
      "The EB-2 Visa targets individuals with advanced degrees or exceptional abilities in fields like science, arts, business, or education. It may require labor certification but offers a National Interest Waiver (NIW) option for exceptional qualifications.",
    link: "/eb2",
  },
  {
    id: 3,
    img: "",
    title: "EB-3 Visa",
    subtitle:
      "Split into subcategories, EB-3 covers skilled workers, professionals, and unskilled workers. This visa accommodates diverse skill levels, providing pathways for individuals with varying qualifications seeking employment-based immigration.",
    link: "/eb3a",
  },
  {
    id: 4,
    img: "",
    title: "EB-5 Visa",
    subtitle:
      " The EB-5 Visa, part of the U.S. immigration system, is designed for investors seeking to make a significant investment in a new commercial enterprise in the United States.",
    link: "/eb5",
  },
];

const Practices = ({ darkMode }) => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div
      className={`  red__gradient absolute z-[0] w-[30%] h-[70%] -right-[50%] rounded-full  bottom-0`}
    />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Featured Practice <br className="sm:block hidden" /> Areas
      </h2>
    </div>

    <div className="grid md:grid-cols-3 grid-cols-1  w-full gap-10  ">
      {cards.map(({ id, img, title, subtitle, link }) => (
        <div
          key={id}
          className={`flex flex-col  items-center    rounded-[20px] ${
            darkMode
              ? "shadow-sm shadow-white feedback-card  "
              : "shadow-md shadow-black"
          }
`}
        >
          <div className="flex flex-col justify-between h-full   ">
            <div className="p-10">
              <p className={`${styles.title} mb-3 `}>{title}</p>
              <p className={`${styles.subtitle}`}>{subtitle}</p>
            </div>
            <div className="flex items-center justify-end  mr-4 mb-6  ">
              <button
                className={`font-semibold text-[18px] link link-primary  `}
              >
                <Link to={link}>know more</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Practices;
