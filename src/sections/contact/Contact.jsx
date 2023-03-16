import data from "./data"
import { useTranslation } from "react-i18next";

const Contact  = () => {
  const { t, i18n } = useTranslation();
return (
  <section id="contact">
    <div className="job">
    <h2>{t("description.part15")} </h2></div>
  <div className="container contact__container">
    {
      data.map(item => (
        <a  key={item.id} href={item.link} target="_blank" rel='noopener noreferrer'>{item.icon}</a>
      ))
    }

  </div>
  </section>
)

}

export default Contact