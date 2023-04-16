import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./context/themeContext";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogSingle from "./pages/BlogSingle";
import Contact from "./pages/Contact";
import Counts from "./components/Counts";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Tags from "./components/Tags";
import Team from "./pages/Team";
import Testimonials from "./components/Testimonials";

const styles= {
  dark:{
      background:"#111111",
      color:"white"
  },
  light:{
      background:"white",
      color:"#111111"
  }
}

function App() {
  const {state}= useContext(ThemeContext);
  return (
    <>
      <Navbar themes={styles} />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog:id" element={<BlogSingle />} />
        </Routes>
      <main style={state.darktheme? styles.dark : styles.light} >
        <About />
        <Counts />
        <Tags themes={styles} />
        <Services />
        <Portfolio />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
