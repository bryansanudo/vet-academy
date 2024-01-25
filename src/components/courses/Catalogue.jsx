import styles from "@/style";

import { Link } from "react-router-dom";
import curso from "@/assets/curso.jpg";
import logo from "@/assets/vet-academy-logo.jpg";
import { CiSearch } from "react-icons/ci";

import medicinaInterna from "@/assets/c_medicina_interna_felina.jpg";

const catalogue = [
  {
    id: 1,
    img: curso,
    logo: logo,
    title: "EB-1 Visa",
    subtitle:
      "Designed for those with extraordinary abilities, outstanding professors, researchers, and certain executives or managers, the EB-1 Visa is a preferred option that doesn't require labor certification. ",
    link: "/eb1a",
    price: "130.000",
  },
  {
    id: 2,
    img: curso,
    title: "EB-1 Visa",
    subtitle:
      "Designed for those with extraordinary abilities, outstanding professors, researchers, and certain executives or managers, the EB-1 Visa is a preferred option that doesn't require labor certification. ",
    link: "/eb1a",
    price: "130.000",
  },
  {
    id: 3,
    img: curso,
    title: "EB-1 Visa",
    subtitle:
      "Designed for those with extraordinary abilities, outstanding professors, researchers, and certain executives or managers, the EB-1 Visa is a preferred option that doesn't require labor certification. ",
    link: "/eb1a",
    price: "130.000",
  },
  {
    id: 4,
    img: curso,
    title: "EB-1 Visa",
    subtitle:
      "Designed for those with extraordinary abilities, outstanding professors, researchers, and certain executives or managers, the EB-1 Visa is a preferred option that doesn't require labor certification. ",
    link: "/eb1a",
    price: "130.000",
  },
];

const Catalogue = ({ darkMode }) => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div
      className={`  red__gradient absolute z-[0] w-[30%] h-[70%] -right-[50%] rounded-full  bottom-0`}
    />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Todos los Cursos
        <br className="sm:block hidden" />
      </h2>
    </div>
    <div className="max-w-md shadow-black shadow-md rounded-xl mb-6">
      <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300">
          <CiSearch />
        </div>

        <input
          className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
          type="text"
          id="search"
          placeholder="Buscar..."
        />
      </div>
    </div>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  w-full gap-10  ">
      {/* {cards.map(({ id, img, title, subtitle, link }) => (
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
      ))} */}

      {catalogue.map(({ id, img, logo, title, subtitle, price, link }) => (
        <div key={id} className="card bg-base-100  shadow-sm shadow-primary">
          <figure className="relative">
            <img src={img} alt="Shoes" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <button className="btn btn-primary">Más Información</button>
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div>
                <span className="text-primary">${price}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Catalogue;
