import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn } from "@/utils/motion";

const images = [
  "https://i.ibb.co/dBv7XkS/male-veterinarian-with-blue-scrubs-gloves-using-stethoscope-listen-heart-beagle-dog-woman-vet-holdin.jpg",
  "https://i.ibb.co/FVJWyk2/close-up-veterinarian-taking-care-pet.jpg",
  "https://i.ibb.co/bzmbxqc/high-angle-careful-doctors-helping-sick-dog.jpg",
  "https://i.ibb.co/mD8Gy8S/caucasian-hispanic-veterinarians-smiling-while-examining-beagle-dog-exam-table-happy-vets-with-steth.jpg",
  // Agrega más URLs de imágenes según sea necesario
];

function preloadImages(urls) {
  urls.forEach((url) => {
    new Image().src = url;
  });
}
const HeroHome = () => {
  const language = "es";
  const messages = {
    en: [
      "Unlock Your American Dream: Choose the EB-3 Visa Path Today!",
      "Why Settle for Less? Elevate Your Future with an EB-3 Visa.",
      "Open Doors in the U.S. – Make the EB-3 Visa Your Key.",
      "Step into a World of Opportunities: Get Your EB-3 Visa Now.",
      "EB-3 Visa: Your Gateway to Permanent Residency and Beyond.",
      "Discover the Fastest Path to Your American Life with an EB-3 Visa.",
      "Chart Your Course to Success: The EB-3 Visa Awaits.",
      "Be Part of America's Growth Story with an EB-3 Visa.",
      "Achieve the Unthinkable: U.S. Residency Through the EB-3 Visa.",
      "Your Journey to a Better Future Begins with an EB-3 Visa.",
    ],
    es: [
      "¡Explora el mundo del conocimiento veterinario con un solo clic! Explora nuestros cursos.",
    ],
    por: [
      "Desbloqueie o seu sonho americano: Escolha o caminho do visto EB-3 hoje!",
      "Porquê contentar-se com menos? Eleve o seu futuro com um visto EB-3.",
      "Abra Portas nos EUA - Faça do Visto EB-3 a sua Chave.",
      "Entre num mundo de oportunidades: Obtenha já o seu visto EB-3.",
      "Visto EB-3: A sua porta de entrada para a residência permanente e mais além.",
      "Descubra o caminho mais rápido para a sua vida americana com um visto EB-3.",
      "Trace a sua rota para o sucesso: O visto EB-3 aguarda-o.",
      "Faça parte da história de crescimento da América com um visto EB-3.",
      "Alcance o impensável: Residência nos EUA através do Visto EB-3.",
      "A sua viagem para um futuro melhor começa com um visto EB-3",
    ],
    fr: [
      "Débloquez votre rêve américain : Choisissez la voie du visa EB-3 dès aujourd'hui",
      "Pourquoi se contenter de moins ? Améliorez votre avenir avec un visa EB-3",
      "Ouvrez les portes aux États-Unis - Faites du visa EB-3 votre clé",

      "Entrez dans un monde d'opportunités : Obtenez votre visa EB-3 maintenant",
      "Visa EB-3 : Votre porte d'entrée vers la résidence permanente et au-delà",
      "Découvrez le chemin le plus rapide vers votre vie américaine avec un visa EB-3",
      "Tracez votre route vers le succès : Le visa EB-3 vous attend",
      "Faites partie de l'histoire de la croissance de l'Amérique avec un visa EB-3",
      "Réalisez l'impensable : La résidence aux États-Unis grâce au visa EB-3",
      "Votre voyage vers un avenir meilleur commence avec un visa EB-3",
    ],
  };

  const btn = {
    en: {
      title: "Check if I'm elegible",
    },
    es: {
      title: "Comprobar si soy admisible",
    },
    por: {
      title: "Verificar se sou elegível",
    },
    fr: {
      title: "Vérifier si je suis éligible",
    },
  };
  const btnContent = btn[language];
  const [randomMessage, setRandomMessage] = useState("");

  useEffect(() => {
    const messagesForLanguage = messages[language];
    if (messagesForLanguage) {
      const randomIndex = Math.floor(
        Math.random() * messagesForLanguage.length
      );
      setRandomMessage(messagesForLanguage[randomIndex]);
    }
  }, [language]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    preloadImages(images);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const currentImageStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    transition: "background-image 1.5s linear",
  };
  return (
    <>
      <div className="hero min-h-[100vh]" style={currentImageStyle}>
        <div className="hero-overlay bg-black opacity-30" />
        <div className="hero-content text-center text-white">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-5xl"
          >
            <motion.h1
              variants={zoomIn(0, 2)}
              className="my-5 lg:text-5xl md:text-3xl text-2xl font-bold tracking-wider"
            >
              {randomMessage}
            </motion.h1>

            {/*  <a
              href="https://form.jotform.com/EB3_Recruiter/eligibility-eb3wfs"
              target="_blank"
            >
              <button className="btn hover:scale-105 capitalize btn-primary tracking-wider">
                {btnContent.title}
              </button>
            </a> */}
          </motion.div>
          <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center cursor-pointer">
            <Link to="scrol" smooth duration={50} className="hidden sm:flex">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2 mb-56">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-white mb-1"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroHome;
