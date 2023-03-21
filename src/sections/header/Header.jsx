
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
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-up">
          <img src="images/Pierreprofile.jpg" alt="Header Portrait" />
        </div>
        <h3 data-aos="fade-up">Pierre Andrieu</h3>
        <p data-aos="fade-up"> {t("description.part1")}</p>
        <p data-aos="fade-up">{t("description.part16")}</p>
        <p data-aos="fade-up">
          <strong>"{t("description.part17")}"</strong>
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#portfolio" className="btn light">
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
