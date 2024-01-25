import styles, { layout } from "@/style";

import { Link } from "react-router-dom";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { IoIdCardSharp } from "react-icons/io5";

const cards = [
  {
    id: 1,
    logo: <FaMoneyBillTrendUp />,
    title: "How to invest in the USA?",
  },
  {
    id: 2,
    logo: <MdFamilyRestroom />,
    title: "Family Petitions and Citizenship",
  },
  {
    id: 3,
    logo: <FaAddressCard />,
    title: "Special Visas for Everyone",
  },
  {
    id: 4,
    logo: <IoIdCardSharp />,
    title: "Visas for Entrepreneurs",
  },
];

const Services = ({ darkMode }) => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Our services <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        At EB Visa Law, we make the dream of immigrating to the United States
        come true completely and safely. Our specialization covers everything
        from family applications to special or business visas, ensuring security
        throughout the process. With our experience and personalized attention,
        we can help you reach new horizons in the United States.
      </p>

      <Link to="/contact">
        <button className={`${styles.button} bg-primary `}>Get Started</button>
      </Link>
    </div>

    <div className={layout.sectionImg}>
      <div className="grid md:grid-cols-2 grid-cols-1  w-full gap-6 ">
        {cards.map(({ id, logo, title }) => (
          <div
            key={id}
            className={` ${
              darkMode
                ? "shadow-sm shadow-white feedback-card  "
                : "shadow-md shadow-black hover:scale-105 duration-500"
            } p-6  flex flex-col gap-6  rounded-xl `}
          >
            <div
              className={`w-[64px] h-[64px] mask mask-hexagon ${styles.flexCenter}  bg-primary`}
            >
              <div className="text-white text-3xl">{logo}</div>
            </div>
            <p className="font-poppins font-semibold text-[20px] leading-[32px] dark:text-white ml-6">
              {title}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
