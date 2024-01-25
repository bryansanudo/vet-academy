import styles, { layout } from "@/style";

import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import { GrUserExpert } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";

export const features = [
  {
    id: "feature-1",
    icon: <HiUserGroup />,
    title: "Unlocking Legal Excellence",
    content:
      "Discover enticing assortments of legal promotions and professional rewards through our array of expert legal services.",
  },
  {
    id: "feature-2",
    icon: <MdOutlineSecurity />,
    title: "Complete Legal Assurance",
    content:
      "We take proactive measures to safeguard your confidential information and legal transactions, offering you a shield against any potential legal concerns.",
  },
  {
    id: "feature-3",
    icon: <BiTransfer />,
    title: "Seamless Case Transfers",
    content:
      "Effortlessly entrust your legal cases to our expert handling. Our streamlined process can save you time and resources in the management of legal matters.",
  },
];

const FeatureCard = ({ icon, title, content, index, darkMode }) => (
  <div
    className={`flex items-center md:flex-row flex-col gap-2 md:gap-0 p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } ${
      darkMode
        ? "shadow-sm shadow-white feedback-card  "
        : "shadow-md shadow-black hover:scale-105 duration-500"
    } `}
  >
    <div
      className={`w-[64px] h-[64px] mask mask-hexagon ${styles.flexCenter} bg-primary `}
    >
      <span className="text-white text-3xl">{icon}</span>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className={`${styles.title} mb-1`}>{title}</h4>
      <p className={`${styles.subtitle}`}>{content}</p>
    </div>
  </div>
);

const Business = ({ darkMode }) => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Your Immigration Journey, Our Legal Expertise
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Navigate employment-based immigration effortlessly with our skilled
        attorneys. From visas to green cards, we've got you covered for a smooth
        journey to your U.S. professional goals.
      </p>

      <Link to="/contact">
        <button className={`${styles.button} bg-primary `}>Get Started</button>
      </Link>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.id}
          {...feature}
          index={index}
          darkMode={darkMode}
        />
      ))}
    </div>
  </section>
);

export default Business;
