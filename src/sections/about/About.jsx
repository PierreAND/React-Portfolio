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
            <img src="images/photo2.jpg" alt="Portrait" />
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
         {t("description.part9")}
          </p>
          <p>
    
          </p>
          <a href="https://www.cjoint.com/doc/23_04/MDCnYh4SQ30_CV---Alternance.pdf" download target="_blank" rel="noopener noreferer" className="btn primary">
        
            {t("description.part5")} <AiOutlineDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
