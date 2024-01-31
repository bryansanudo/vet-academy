import React, { useEffect, useState } from "react";
import styles from "@/style";

const CountDown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-02-19 20:00:00"); // Puedes ajustar esta fecha y hora según tus necesidades
    const difference = targetDate - new Date();
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (difference > 0) {
      days = Math.floor(difference / (1000 * 60 * 60 * 24));
      hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((difference / 1000 / 60) % 60);
      seconds = Math.floor((difference / 1000) % 60);
    }

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--days", timeLeft.days);
    root.style.setProperty("--hours", timeLeft.hours);
    root.style.setProperty("--minutes", timeLeft.minutes);
    root.style.setProperty("--seconds", timeLeft.seconds);
  }, [timeLeft]);

  return (
    <>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max mt-4">
        <div className={`${styles.subtitle} flex flex-col`}>
          <span className="text-primary font-bold">Días</span>
          <span className={`countdown ${styles.title}`}>
            <span style={{ "--value": timeLeft.days }}></span>
          </span>
        </div>
        <div className={`${styles.subtitle} flex flex-col`}>
          <span className="text-primary font-bold">Horas</span>
          <span className={`countdown ${styles.title}`}>
            <span style={{ "--value": timeLeft.hours }}></span>
          </span>
        </div>
        <div className={`${styles.subtitle} flex flex-col`}>
          <span className="text-primary font-bold">Min</span>
          <span className={`countdown ${styles.title}`}>
            <span style={{ "--value": timeLeft.minutes }}></span>
          </span>
        </div>
        <div className={`${styles.subtitle} flex flex-col`}>
          <span className="text-primary font-bold">Segs</span>
          <span className={`countdown ${styles.title}`}>
            <span style={{ "--value": timeLeft.seconds }}></span>
          </span>
        </div>
      </div>
    </>
  );
};

export default CountDown;
