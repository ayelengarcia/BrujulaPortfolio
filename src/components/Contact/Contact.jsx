import axios from "axios";
import { Contact } from "./Contact.styled";
import { Skeleton } from "@chakra-ui/react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const mostrarToast = (mensaje) => {
  toast.success(mensaje, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const contact = () => {
  const [loadingSent, setLoadingSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormulario({ ...formulario, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setLoadingSent(true);

    if (
      !formulario.nombre ||
      !formulario.email ||
      !formulario.telefono ||
      !formulario.mensaje
    ) {
      setErrorMsg("Rellena todos los campos.");
      setLoadingSent(false);
      return;
    }

    axios
      .post(
        `https://proyectobackend-production-a5d4.up.railway.app/sent-contacto`,
        formulario
      )
      .then((res) => {
        mostrarToast(`Mensaje enviado. ¡Gracias!`);
        console.log("Mensaje enviado", res);
        setFormulario({
          nombre: "",
          email: "",
          telefono: "",
          mensaje: "",
        });
        setErrorMsg("");
      })
      .then(() => {
        setLoadingSent(false);
      })
      .catch((err) => console.error(err));
  }

  return (
    <Contact id="contact" className="skills ">
      <h2 className="d-flex justify-content-center pt-3 title">CONTACTO</h2>

      <a className="send_top" href="#header">
        <i className="bi bi-arrow-up-circle-fill"></i>
      </a>
      <p className="d-flex justify-content-center pb-3">
        ¡Contactame y trabajá conmigo!
      </p>

      <div className="d-flex justify-content-around align-items-center flex-wrap pb-4 gap-3">
        <div className="d-flex flex-column justify-content-start gap-1">
          <a
            className="m-0 info_style"
            href="https://www.linkedin.com/in/ayelen-garc%C3%ADa-595457232/"
            target="_blank"
          >
            <p className="d-flex align-items-center m-0">
              <i className="bi bi-linkedin pe-1"></i>
              LinkedIn
            </p>
          </a>

          <a
            className="m-0 info_style"
            href="https://api.whatsapp.com/send/?phone=5491124979403&text=%C2%A1Hola+Ayelen!+Me+Contacto+desde+tu+portafolio+personal&type=phone_number&app_absent=0"
            target="_blank"
          >
            <p className="d-flex align-items-center m-0">
              <i className="bi bi-whatsapp pe-1"></i>Whatsapp
            </p>
          </a>

          <p
            ref={(ref) => {
              if (ref) {
                ref.addEventListener("click", () => {
                  navigator.clipboard.writeText("ayelengarcia7@gmail.com");
                  mostrarToast(`¡Copiado!`);
                });
              }
            }}
            className="d-flex align-items-center m-0 info_style"
          >
            <i className="bi bi-envelope-at-fill pe-1"></i>
            ayelengarcia7@gmail.com
          </p>
        </div>

        <div className="d-flex flex-column justify-content-center">
          <form className="d-flex flex-column gap-1" onSubmit={handleSubmit}>
            <div className="d-flex flex-column flex-md-row gap-1">
              <input
                id="nombre"
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formulario.nombre}
                onChange={handleInput}
              />

              <input
                id="email"
                type="text"
                name="email"
                placeholder="Email"
                value={formulario.email}
                onChange={handleInput}
              />

              <input
                id="telefono"
                type="number"
                name="telefono"
                placeholder="Teléfono"
                min="0"
                value={formulario.telefono}
                onChange={handleInput}
              />
            </div>

            <textarea
              id="mensaje"
              type="text"
              name="mensaje"
              placeholder="Mensaje"
              value={formulario.mensaje}
              onChange={handleInput}
            />

            {loadingSent ? (
              <Skeleton
                className="button d-flex justify-content-center"
                startColor="#9b59b6"
                endColor="#ce87ec"
                width="100%"
              >
                Enviando...
              </Skeleton>
            ) : (
              <button className="button" type="submit">
                Enviar
              </button>
            )}
            <p className="msg_error m-0">{errorMsg}</p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </Contact>
  );
};

export default contact;
