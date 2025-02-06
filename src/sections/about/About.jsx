import { AiOutlineDownload } from "react-icons/ai";
import Card from "../../components/Card";
import data from "./data";
import { useTranslation } from "react-i18next";

const About = () => {
  
  const { t, i18n } = useTranslation();
  return (
    <section id="about">
      <div className="container about__container">
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
         {t("description.part9")}
          </p>
       
          <a href="https://www.cjoint.com/doc/25_02/OBglPzmQpVj_PierreA-CV-3-.pdf" download target="_blank" rel="noopener noreferer" className="btn primary">
        
            {t("description.part5")} <AiOutlineDownload />
          </a>
          <a href="https://www.cjoint.com/doc/25_01/OAwrKJq6Uvj_DP-Pierre-Andrieu-CDA-1-.pdf" download target="_blank" rel="noopener noreferer" className="btn primary">
        
            Dossier Pro <AiOutlineDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
