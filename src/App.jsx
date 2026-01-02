import { useState } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Certificate from "./components/Certificate/Certificate";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Project/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import { Animations } from "./Keyframes.styled";
import { StyledApp } from "./App.styled";
import Themes from "./components/Themes";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={Themes[theme]}>
      <StyledApp>
        <Header theme={theme} setTheme={setTheme} />
        <About />
        <Certificate />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Animations />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
