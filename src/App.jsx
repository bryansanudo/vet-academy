import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

import Home from "@/components/home/Home";
import About from "@/components/about/About";
import Courses from "@/components/courses/Courses";
import Contact from "@/components/Contact";
import Bovinos from "@/components/bovinos/Bovinos";
import ManejoDelDolor from "@/components/courseInscriptions/manejoDelDolor/ManejoDelDolor";
import Etologia from "@/components/courseInscriptions/etologia/Etologia";
import Oftalmologia from "@/components/courseInscriptions/oftalmologia/Oftalmologia";
import Endocrinologia from "@/components/courseInscriptions/endocrinologia/Endocrinologia";
import Oncologia from "@/components/courseInscriptions/oncologia/Oncologia";
import Hospitalizacion from "@/components/courseInscriptions/hospitalizacion/Hospitalizacion";
import Enfermedades from "@/components/courseInscriptions/enfermedades/Enfermedades";
import Emergencias from "@/components/courseInscriptions/emergencias/Emergencias";
import Enfermeria from "@/components/courseInscriptions/enfermeria/Enfermeria";
import Paciente from "@/components/courseInscriptions/paciente/Paciente";
import Mascotas from "@/components/courseInscriptions/mascotas/Mascotas";
import Resistencia from "@/components/courseInscriptions/resistencia/Resistencia";
import Equinos from "@/components/courseInscriptions/equinos/Equinos";
import Admin from "@/components/adminPanel/Admin";

import Masterclass from "@/components/masterclass/Masterclass";
import { ShowOnLogin, ShowOnLogout } from "@/components/HiddenLink";
import AdminOnlyRoute from "@/components/AdminOnlyRoute";

import Terms from "@/components/TermsOfServices";
import Privacy from "@/components/PrivacyPolicy";

import Login from "@/components/login/Login";
import Register from "@/components/register/Register";

import styles from "@/style";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StudyPlan from "@/components/studyPlan/StudyPlan";
import Faq from "@/components/faq/Faq";
import BovinosLayout from "@/components/studyPlan/bovinosLayout/BovinosLayout";

const App = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [b, setB] = useState(true);

  return (
    <>
      <ToastContainer position="bottom-center" />
      <div className={darkMode && "dark"}>
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          isMenuShown={isMenuShown}
          setIsMenuShown={setIsMenuShown}
        />

        <div className="dark:bg-accent w-full overflow-hidden">
          <Routes>
            <Route
              path="/"
              element={<Home b={b} setB={setB} darkMode={darkMode} />}
            />
            <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route path="/bovinos" element={<Bovinos darkMode={darkMode} />} />
            <Route
              path="/manejo-del-dolor"
              element={<ManejoDelDolor darkMode={darkMode} />}
            />
            <Route path="/courses" element={<Courses darkMode={darkMode} />} />
            <Route
              path="/etologia"
              element={<Etologia darkMode={darkMode} />}
            />
            <Route
              path="/oftalmologia"
              element={<Oftalmologia darkMode={darkMode} />}
            />
            <Route
              path="/endocrinologia"
              element={<Endocrinologia darkMode={darkMode} />}
            />
            <Route
              path="/oncologia"
              element={<Oncologia darkMode={darkMode} />}
            />
            <Route
              path="/hospitalizacion"
              element={<Hospitalizacion darkMode={darkMode} />}
            />
            <Route
              path="/enfermedades"
              element={<Enfermedades darkMode={darkMode} />}
            />
            <Route
              path="/emergencias"
              element={<Emergencias darkMode={darkMode} />}
            />
            <Route
              path="/enfermeria"
              element={<Enfermeria darkMode={darkMode} />}
            />
            <Route
              path="/paciente"
              element={<Paciente darkMode={darkMode} />}
            />
            <Route
              path="/mascotas"
              element={<Mascotas darkMode={darkMode} />}
            />
            <Route
              path="/resistencia"
              element={<Resistencia darkMode={darkMode} />}
            />
            <Route path="/equinos" element={<Equinos darkMode={darkMode} />} />
            <Route path="/courses" element={<Courses darkMode={darkMode} />} />
            <Route
              path="/masterclass/*"
              element={<Masterclass darkMode={darkMode} />}
            />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
            <Route path="/faq" element={<Faq darkMode={darkMode} />} />

            <Route path="/login" element={<Login darkMode={darkMode} />} />
            <Route
              path="/register"
              element={<Register darkMode={darkMode} />}
            />

            <Route
              path="/study-plan/*"
              element={
                <ShowOnLogin>
                  <StudyPlan darkMode={darkMode} />
                </ShowOnLogin>
              }
            />
            <Route
              path="/bovinos-class/*"
              element={
                <ShowOnLogin>
                  <BovinosLayout darkMode={darkMode} />
                </ShowOnLogin>
              }
            />
            <Route
              path="/admin/*"
              element={
                <AdminOnlyRoute>
                  <Admin darkMode={darkMode} />
                </AdminOnlyRoute>
              }
            />

            {/*  <Route path="/faq" element={<Faq darkMode={darkMode} />} /> */}
            <Route path="/terms" element={<Terms darkMode={darkMode} />} />
            <Route path="/privacy" element={<Privacy darkMode={darkMode} />} />
          </Routes>

          <div
            className={`dark:bg-accent  ${isMenuShown ? "hidden" : ""}  ${
              styles.paddingX
            } ${styles.flexCenter}`}
          >
            <div className={`${styles.boxWidth}`}>
              <Footer darkMode={darkMode} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed flex items-center justify-center hover:scale-110 duration-700 rounded-full w-14 h-14 bg-[#00E676] text-yellow-500 z-[100] right-6 bottom-6   `}
      >
        <a
          href="https://api.whatsapp.com/send?phone=573243291412"
          className=""
          target="_blank"
        >
          <FaWhatsapp className="text-white text-3xl" />
        </a>
      </div>
    </>
  );
};

export default App;
