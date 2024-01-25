import styles from "@/style";

import { GrStatusGood } from "react-icons/gr";
import { VscServerProcess } from "react-icons/vsc";
import { MdDashboardCustomize } from "react-icons/md";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { GrCycle } from "react-icons/gr";
import { MdMoreTime } from "react-icons/md";

const cards = [
  {
    id: 1,
    img: <GrStatusGood />,
    title: "Experienced Professionals",
    subtitle:
      "Leverage our wealth of experience and proven methods to expedite the legalization of your immigration status.",
  },
  {
    id: 2,
    img: <VscServerProcess />,
    title: "Agility at the Core",
    subtitle:
      "We craft an efficient, user-friendly process tailored for your ease of understanding and swift navigation.",
  },
  {
    id: 3,
    img: <MdDashboardCustomize />,
    title: "Tailored Solutions",
    subtitle:
      "Recognizing the uniqueness of each case, we provide attentive ears to understand the specific needs of families, companies, and individuals, tailoring solutions accordingly.",
  },
  {
    id: 4,
    img: <HiOutlineDocumentMagnifyingGlass />,
    title: "Comprehensive Oversight",
    subtitle:
      "From form preparation to its successful submission, we ensure thorough and detailed monitoring of the entire process for a successful outcome.	",
  },
  {
    id: 5,
    img: <GrCycle />,
    title: "Holistic Solutions",
    subtitle:
      "Beyond immigration processes, we offer consultations with specialized financial advisors, providing a comprehensive solution.",
  },
  {
    id: 6,
    img: <MdMoreTime />,
    title: "Time and Cost Savings",
    subtitle:
      "Our service not only saves you time but also helps you avoid costly errors that could lead to delays or visa denials, offering a valuable saving of both time and money.",
  },
];

const Advantages = ({ darkMode }) => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div
      className={` red__gradient absolute z-[0] w-[30%] h-[60%] -left-[50%] rounded-full  bottom-40`}
    />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>Advantages</h2>
      {/* <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab esse
          suscipit ipsum laudantium cupiditate voluptatibus
        </p>
      </div> */}
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full  relative z-[1]">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  w-full gap-6 ">
        {cards.map(({ id, img, title, subtitle }) => (
          <div
            key={id}
            className={`flex flex-col  items-start justify-center  md:gap-6 ${
              darkMode
                ? "shadow-sm shadow-white feedback-card "
                : "shadow-md shadow-black hover:scale-105 duration-500"
            }
rounded-[20px]  p-8 `}
          >
            <div
              className={`w-[64px] h-[64px] mask mask-hexagon ${styles.flexCenter} bg-primary `}
            >
              <div className="text-white text-3xl">{img}</div>
            </div>

            <div className=" p-6 sm:px-3 sm:py-0">
              <p className={`${styles.title} mb-1`}>{title}</p>
              <p className={`${styles.subtitle}`}>{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Advantages;
