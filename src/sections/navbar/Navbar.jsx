import React from "react";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";



function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);


  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || largeur > 600) && (
        <ul className="liste">
        
          <a href="#about" className="items">
            About
          </a>
          <a href="#services" className="items">
            Services
          </a>
          <a href="#portfolio" className="items">
            Portfolio
          </a>
          <a href="#faqs" className="items">
            FAQ
          </a>
        </ul>
      )}
      
      <button onClick={toggleNav} className="btn-nav">
        <RxHamburgerMenu />
      </button>
    </nav>
  );
}

export default Navbar;
