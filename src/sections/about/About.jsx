import { AiOutlineDownload } from "react-icons/ai";
import Card from "../../components/Card";
import data from "./data";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src="/public/portrait.jpg" alt="Portrait" />
          </div>
        </div>
        <div className="about__right">
          <h2>{t("description.part4")}</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
          Geek passionné des nouvelles technologies, je peux occuper des fonctions allant de développeur Web Full Stack, UI/UX designer à Intégrateur web.
          Je possède également une compétence avant vente qui me permet d'être à l'écoute des besoins métier et de savoir rédiger des documents de travail.
          </p>
          <p>
            Développeur full stack web avec assimilation rapide des qualités
            nécessaires et globales du développement et de la conception
            d'application. Je me définis comme quelqu'un voulant toujours
            trouver le moyen le plus efficace d'effectuer une tâche (best
            practice)."
          </p>
          <a href="/public/CV.pdf" download className="btn primary">
            {" "}
            {t("description.part5")} <AiOutlineDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
