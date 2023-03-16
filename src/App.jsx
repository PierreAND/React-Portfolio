import React from "react";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import FAQs from "./sections/faqs/FAQs";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import Theme from "./theme/Theme";
import Modal from "./components/Modal";
import i18n from "./i18n";
import { useState } from "react";
import {FaTools} from "react-icons/fa"
import { useModalContext } from '../src/context/modal-context'

function App() {
  const [toggle, setToggle] = useState();
  const {showModalHandler} = useModalContext();
 
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <main>
      <button
        className="btn-langage"
        onClick={() => setToggle((prev) => !prev)}
      >
        {toggle ? "EN" : "FR"}
      </button>

      <button className="btn-tools" onClick={showModalHandler}>
        <FaTools/>
      </button>



      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <FAQs />
      <Contact />
      <Footer />
      <Modal/>
      <Theme />

      {toggle ? changeLanguage("fr") : changeLanguage("en")}
    </main>
  );
}

export default App;
