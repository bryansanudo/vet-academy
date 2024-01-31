import styles from "@/style";
import doc1 from "@/assets/gallery/doc1.png";
import doc2 from "@/assets/gallery/doc2.png";
import doc3 from "@/assets/gallery/doc3.png";
import doc4 from "@/assets/gallery/doc4.png";
import doc5 from "@/assets/gallery/doc5.png";
import doc6 from "@/assets/gallery/doc6.png";
import doc7 from "@/assets/gallery/doc7.png";
import doc8 from "@/assets/gallery/doc8.png";
import doc9 from "@/assets/gallery/doc9.png";
import { FaBars, FaTimes } from "react-icons/fa";

import d1 from "@/assets/gallery/d1.png";
import d2 from "@/assets/gallery/d2.png";
import d3 from "@/assets/gallery/d3.png";
import d4 from "@/assets/gallery/d4.png";
import d5 from "@/assets/gallery/d5.png";
import d6 from "@/assets/gallery/d6.png";
import d7 from "@/assets/gallery/d7.png";
import d8 from "@/assets/gallery/d8.png";
import d9 from "@/assets/gallery/d9.png";

const Clients = () => (
  <section className={`${styles.flexCenter} my-20  `}>
    <div className="flex overflow-hidden  group ">
      <div
        className="flex items-center justify-center space-x-16 animate-loop-scroll group-hover:paused "
        aria-hidden="true"
      >
        {/* doc1 */}
        <div className="w-[200px] flex-col flex items-center justify-center">
          <img
            src={doc1}
            alt=""
            className="rounded-xl  hover:scale-105 duration-700 cursor-pointer"
            onClick={() => document.getElementById("doc1").showModal()}
          />
          <dialog id="doc1" className="modal ">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white w-[280px] sm:w-[600px] md:w-[800px] lg:w-[1000px] h-auto  rounded-lg p-8  relative">
              <div className="flex justify-end absolute top-0 right-0 m-2">
                <button
                  className="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
                  onClick={() => document.getElementById("doc1").close()}
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
              <figure className="mt-2">
                <img src={d1} alt="" className="w-[100%] rounded-2xl" />
              </figure>
            </div>
          </dialog>
          <h1 className={`${styles.title} mt-4`}>Diego Suárez</h1>
          <h2 className={`${styles.subtitle} mt-4`}>Médico Veterinario</h2>
        </div>
        {/* doc2 */}
        <div className="w-[200px] flex-col flex items-center justify-center">
          <img
            src={doc2}
            alt=""
            className="rounded-xl  hover:scale-105 duration-700 cursor-pointer"
            onClick={() => document.getElementById("doc2").showModal()}
          />
          <dialog id="doc2" className="modal ">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white w-[280px] sm:w-[600px] md:w-[800px] lg:w-[1000px] h-auto  rounded-lg p-8  relative">
              <div className="flex justify-end absolute top-0 right-0 m-2">
                <button
                  className="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
                  onClick={() => document.getElementById("doc2").close()}
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
              <figure className="mt-2">
                <img src={d2} alt="" className="w-[100%] rounded-2xl" />
              </figure>
            </div>
          </dialog>
          <h1 className={`${styles.title} mt-4`}>Nicolás Arias</h1>
          <h2 className={`${styles.subtitle} mt-4`}>Zootecnista</h2>
        </div>
        {/* doc3 */}
        <div className="w-[200px] flex-col flex items-center justify-center">
          <img
            src={doc3}
            alt=""
            className="rounded-xl  hover:scale-105 duration-700 cursor-pointer"
            onClick={() => document.getElementById("doc3").showModal()}
          />
          <dialog id="doc3" className="modal ">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white w-[280px] sm:w-[600px] md:w-[800px] lg:w-[1000px] h-auto  rounded-lg p-8  relative">
              <div className="flex justify-end absolute top-0 right-0 m-2">
                <button
                  className="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
                  onClick={() => document.getElementById("doc3").close()}
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
              <figure className="mt-2">
                <img src={d3} alt="" className="w-[100%] rounded-2xl" />
              </figure>
            </div>
          </dialog>
          <h1 className={`${styles.title} mt-4`}>Brahian Tuberquia</h1>
          <h2 className={`${styles.subtitle} mt-4`}>Médico Veterinario</h2>
        </div>
        {/* doc4 */}
        <div className="w-[200px] flex-col flex items-center justify-center">
          <img
            src={doc4}
            alt=""
            className="rounded-xl  hover:scale-105 duration-700 cursor-pointer"
            onClick={() => document.getElementById("doc4").showModal()}
          />
          <dialog id="doc4" className="modal ">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white w-[280px] sm:w-[600px] md:w-[800px] lg:w-[1000px] h-auto  rounded-lg p-8  relative">
              <div className="flex justify-end absolute top-0 right-0 m-2">
                <button
                  className="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
                  onClick={() => document.getElementById("doc4").close()}
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
              <figure className="mt-2">
                <img src={d4} alt="" className="w-[100%] rounded-2xl" />
              </figure>
            </div>
          </dialog>
          <h1 className={`${styles.title} mt-4`}>Nathalia Correa</h1>
          <h2 className={`${styles.subtitle} mt-4`}>Médica Veterinaria</h2>
        </div>
        {/* doc5 */}
        <div className="w-[200px] flex-col flex items-center justify-center">
          <img
            src={doc5}
            alt=""
            className="rounded-xl  hover:scale-105 duration-700 cursor-pointer"
            onClick={() => document.getElementById("doc5").showModal()}
          />
          <dialog id="doc5" className="modal ">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white w-[280px] sm:w-[600px] md:w-[800px] lg:w-[1000px] h-auto  rounded-lg p-8  relative">
              <div className="flex justify-end absolute top-0 right-0 m-2">
                <button
                  className="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
                  onClick={() => document.getElementById("doc5").close()}
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
              <figure className="mt-2">
                <img src={d5} alt="" className="w-[100%] rounded-2xl" />
              </figure>
            </div>
          </dialog>
          <h1 className={`${styles.title} mt-4`}>Sofía Agredo</h1>
          <h2 className={`${styles.subtitle} mt-4`}>Médica Veterinaria</h2>
        </div>
        {/* doc6 */}
        <div className="w-[200px] flex-col flex items-center justify-center">
          <img
            src={doc6}
            alt=""
            className="rounded-xl  hover:scale-105 duration-700 cursor-pointer"
            onClick={() => document.getElementById("doc6").showModal()}
          />
          <dialog id="doc6" className="modal ">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white w-[280px] sm:w-[600px] md:w-[800px] lg:w-[1000px] h-auto  rounded-lg p-8  relative">
              <div className="flex justify-end absolute top-0 right-0 m-2">
                <button
                  className="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
                  onClick={() => document.getElementById("doc6").close()}
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
              <figure className="mt-2">
                <img src={d6} alt="" className="w-[100%] rounded-2xl" />
              </figure>
            </div>
          </dialog>
          <h1 className={`${styles.title} mt-4`}>Ferney Arango</h1>
          <h2 className={`${styles.subtitle} mt-4`}>Médico Veterinario</h2>
        </div>
        {/* doc7 */}
        <div className="w-[200px] flex-col flex items-center justify-center">
          <img
            src={doc7}
            alt=""
            className="rounded-xl  hover:scale-105 duration-700 cursor-pointer"
            onClick={() => document.getElementById("doc7").showModal()}
          />
          <dialog id="doc7" className="modal ">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white w-[280px] sm:w-[600px] md:w-[800px] lg:w-[1000px] h-auto  rounded-lg p-8  relative">
              <div className="flex justify-end absolute top-0 right-0 m-2">
                <button
                  className="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
                  onClick={() => document.getElementById("doc7").close()}
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
              <figure className="mt-2">
                <img src={d7} alt="" className="w-[100%] rounded-2xl" />
              </figure>
            </div>
          </dialog>
          <h1 className={`${styles.title} mt-4`}>Carlos Oviedo</h1>
          <h2 className={`${styles.subtitle} mt-4`}>Médico Veterinario</h2>
        </div>
        {/* doc8 */}
        <div className="w-[200px] flex-col flex items-center justify-center">
          <img
            src={doc8}
            alt=""
            className="rounded-xl  hover:scale-105 duration-700 cursor-pointer"
            onClick={() => document.getElementById("doc8").showModal()}
          />
          <dialog id="doc8" className="modal ">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white w-[280px] sm:w-[600px] md:w-[800px] lg:w-[1000px] h-auto  rounded-lg p-8  relative">
              <div className="flex justify-end absolute top-0 right-0 m-2">
                <button
                  className="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
                  onClick={() => document.getElementById("doc8").close()}
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
              <figure className="mt-2">
                <img src={d8} alt="" className="w-[100%] rounded-2xl" />
              </figure>
            </div>
          </dialog>
          <h1 className={`${styles.title} mt-4`}>Iván Castaño</h1>
          <h2 className={`${styles.subtitle} mt-4`}>Zootecnista</h2>
        </div>
        {/* doc9 */}
        <div className="w-[200px] flex-col flex items-center justify-center">
          <img
            src={doc9}
            alt=""
            className="rounded-xl  hover:scale-105 duration-700 cursor-pointer"
            onClick={() => document.getElementById("doc9").showModal()}
          />
          <dialog id="doc9" className="modal ">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white w-[280px] sm:w-[600px] md:w-[800px] lg:w-[1000px] h-auto  rounded-lg p-8  relative">
              <div className="flex justify-end absolute top-0 right-0 m-2">
                <button
                  className="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
                  onClick={() => document.getElementById("doc9").close()}
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
              <figure className="mt-2">
                <img src={d9} alt="" className="w-[100%] rounded-2xl" />
              </figure>
            </div>
          </dialog>
          <h1 className={`${styles.title} mt-4`}>Andrés Mejía</h1>
          <h2 className={`${styles.subtitle} mt-4`}>Médico Veterinario</h2>
        </div>
      </div>
    </div>
  </section>
);

export default Clients;
