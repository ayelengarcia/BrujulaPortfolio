import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import Invitation from "./components/Invitation/Invitation";
import Ubicacion from "./components/Ubicacion/Ubicacion";
import Asistencia from "./components/Asistencia/Asistencia";
import Regalos from "./components/Regalos/Regalos";
import Footer from "./components/Footer/Footer";
import { Animations } from "./Keyframes.styled";

function App() {
  return (
    <div>
      <Header />
      <Title />
      <Invitation />
      <Ubicacion />
      <Asistencia />
      <Regalos />
      <Footer />
      <Animations />
    </div>
  );
}

export default App;
