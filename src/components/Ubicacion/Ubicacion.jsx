import { Ubicacion } from "./Ubicacion.styled";
import React, { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";

const ubicacion = () => {
  //CUENTA REGRESIVA
  const targetDate = new Date("2023-11-26T19:00:00"); // Fecha objetivo

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance > 0) {
        const daysRemaining = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutesRemaining = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const secondsRemaining = Math.floor((distance % (1000 * 60)) / 1000);

        setDays(daysRemaining);
        setHours(hoursRemaining);
        setMinutes(minutesRemaining);
        setSeconds(secondsRemaining);
      } else {
        // El contador ha llegado a cero, hacer algo acá si es necesario
        clearInterval(intervalId);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, [targetDate]);

  //COPIAR AL PORTAPAPELES
  const [copiado, setCopiado] = useState(false); // Estado para controlar copiado

  const copiarAlPortapapeles = (texto) => {
    const textField = document.createElement("textarea");
    textField.innerText = texto;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    setCopiado(true);

    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };
  
  return (
    <Ubicacion
      id="ubicacion"
      className="container-fluid d-flex justify-content-center align-items-center  m-0 pb-5"
    >
      <div className="container-ubica d-flex flex-column justify-content-center align-items-center pb-1 py-5 gap-1">
        <div className="d-flex contador py-3 px-5 gap-4">
          <div className="d-flex flex-column align-items-center">
            <p className="cont">{days}</p>
            <span className="text">DÍAS</span>
          </div>
          <div className="d-flex flex-column align-items-center">
            <p className="cont">{hours}</p>
            <span className="text">HRS</span>
          </div>
          <div className="d-flex flex-column align-items-center">
            <p className="cont">{minutes}</p>
            <span className="text">MIN</span>
          </div>
          <div className="d-flex flex-column align-items-center">
            <p className="cont">{seconds}</p>
            <span className="text">SEG</span>
          </div>
        </div>

        <div className="ubica d-flex flex-column justify-content-center align-items-center pt-4">
          <p className="text-2 m-0">Esperamos su presencia en</p>
          <p className="text-3 m-0">"Dinastia Park Recepciones"</p>
          <p className="wpp" title="copiar" onClick={() => copiarAlPortapapeles("11 4696-2697")}>
            <i class="bi bi-whatsapp"></i> 11 4696-2697 <i class="bi bi-clipboard"></i>
          </p>
          {copiado && <p className="copiado">¡Copiado!</p>}

          <p className="text-4 mt-3 mb-1">¿Cómo llegar?</p>
        </div>

        <a
          className="d-flex flex-column justify-content-center align-items-center"
          href="https://www.google.com/maps/place/Dinastia+Park+Recepciones/@-34.6615201,-58.6042137,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcc863573f7fad:0xdfaea8dd5a559ee8!8m2!3d-34.6615201!4d-58.6042137!16s%2Fg%2F11bbrh87ym?hl=es-AR&entry=ttu"
          target="_blank"
        >
          <button className="btn px-4">
            <i className="bi bi-geo-alt-fill pe-1"></i>
            Ver ubicación
          </button>
        </a>
      </div>
    </Ubicacion>
  );
};

export default ubicacion;
