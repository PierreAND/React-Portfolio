
import data from "./data";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(()=> { 
    AOS.init({duration: 2000})

  },[])
  const { t, i18n } = useTranslation();
  return (
    <header id="header">
      <div className="container header__container" data-aos="fade-up">
        <div className="header__profile">
          <img src="https://iili.io/2OatGZQ.jpg" />
        </div>
        <h2 >Pierre Andrieu</h2>
        <p > {t("description.part1")}</p>
        <p >{t("description.part16")} <br/>
        
          <strong> "{t("description.part17")}"</strong>
        </p>
        <div className="header__cta">
          <a href="#portfolio" className="btn primary">
            {t("description.part2")}
          </a>
          <a href="#contact" className="btn primary">
            {t("description.part3")}
          </a>
        </div>

        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
