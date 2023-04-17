import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./context/themeContext";
import Blog from "./pages/Blog";
import BlogSingle from "./pages/BlogSingle";
import Home from "./pages/Home";

const styles = {
  dark: {
    background: "#111",
    color: "#fff"
  },
  light: {
    background: "#fff",
    color: "#111"
  }
}

// {state.darktheme && darkMode.background == "light"}
function App() {
  const { state, darkMode } = useContext(ThemeContext);
 
  // console.log(darkMode.background)
  return (
    <>
      <Navbar themes={styles} />
      <main style={state.darktheme ? styles.dark : styles.light} >
      <Routes>
        <Route exact path="/" element={<Home themes={styles}/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog:id" element={<BlogSingle/>}/>
      </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
