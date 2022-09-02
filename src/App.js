import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Home from "./Home";
import Contact from "./Contact";
import Program from "./Program";
import Appoinment from "./Appoinment";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Accordion from "./Accordion";
import { Routes, Route, Navigate } from "react-router-dom";
import { SliderData } from "./SliderData";
import { InfoData } from "./InfoData";
import BlogSection from "./BlogSection";
import About from "./About";
import AllBlogs from "./AllBlogs";
import Programs from "./Programs";
import ProgramSection from "./ProgramSection";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home slides={SliderData} />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/Programs" element={<Programs/>} />
        <Route exact path="/appointment" element={<Appoinment />} />
        <Route exact path="/faq" element={<Accordion />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blogs" element={<AllBlogs />} />
        {/* <Route exact path="/blogs" element={<BlogSection {...InfoData} />} /> */}
        <Route exact path="/blog/:id" element={<BlogSection />} />
        <Route exact path="/program/:id" element={<ProgramSection />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
