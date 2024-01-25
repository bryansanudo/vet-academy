import styles from "@/style";

import Navbar from "@/components/Navbar";
import { FaArrowUp } from "react-icons/fa";

import Faq from "@/components/Faq";

import Home from "@/components/home/Home";

import Footer from "@/components/Footer";

import Contact from "@/components/Contact";
import Eb1a from "@/components/visas/eb1/eb1a/Eb1a";
import Eb1b from "@/components/visas/eb1/eb1b/Eb1b";
import Eb1c from "@/components/visas/eb1/eb1c/Eb1c";

import Eb2 from "@/components/visas/eb2/Eb2";

import Eb3a from "@/components/visas/eb3/eb3a/Eb3a";
import Eb3b from "@/components/visas/eb3/eb3b/Eb3b";
import Eb3c from "@/components/visas/eb3/eb3c/Eb3c";
import Eb5 from "@/components/visas/eb5/Eb5";

import Terms from "@/components/TermsOfServices";
import Privacy from "@/components/PrivacyPolicy";
import FeedComponent from "@/components/FeedComponent";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode && "dark"}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuShown={isMenuShown}
        setIsMenuShown={setIsMenuShown}
      />
      <div className="dark:bg-accent w-full overflow-hidden">
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />

          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          <Route path="/faq" element={<Faq darkMode={darkMode} />} />
          <Route path="/terms" element={<Terms darkMode={darkMode} />} />
          <Route path="/privacy" element={<Privacy darkMode={darkMode} />} />
          <Route path="/rss" element={<FeedComponent darkMode={darkMode} />} />

          {/* eb1 */}
          <Route path="/eb1a" element={<Eb1a darkMode={darkMode} />} />
          <Route path="/eb1b" element={<Eb1b darkMode={darkMode} />} />
          <Route path="/eb1c" element={<Eb1c darkMode={darkMode} />} />
          {/* eb2 */}
          <Route path="/eb2" element={<Eb2 darkMode={darkMode} />} />
          {/* eb3 */}
          <Route path="/eb3a" element={<Eb3a darkMode={darkMode} />} />
          <Route path="/eb3b" element={<Eb3b darkMode={darkMode} />} />
          <Route path="/eb3c" element={<Eb3c darkMode={darkMode} />} />
          {/* eb5 */}
          <Route path="/eb5" element={<Eb5 darkMode={darkMode} />} />
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
      {/* <div
        onClick={() => window.scrollTo(0, 0)}
        className={`fixed flex items-center justify-center hover:scale-110 duration-700 rounded-full w-8 h-8   z-[100] right-3 bottom-3  cursor-pointer 
          bg-primary
         `}
      >
        <FaArrowUp className="animate-pulse text-white" />
      </div> */}
    </div>
  );
};

export default App;
