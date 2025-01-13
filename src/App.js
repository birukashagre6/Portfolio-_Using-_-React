import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { ThemeProvider } from "./Context/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
