import React from "react";
import data from "./data";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src="images/zappa.jpg" alt="Header Portrait" />
        </div>
        <h3>Pierre Andrieu</h3>
        <p>{t("description.part1")}</p>
        <p>{t("description.part16")}</p>
        <p>
          <strong>"{t("description.part17")}"</strong>
        </p>
        <div className="header__cta">
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
