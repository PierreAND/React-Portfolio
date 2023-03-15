import faqs from "./data"
import FAQ from "./FAQ"
import { useTranslation } from "react-i18next";

const FAQs = () => {
  const { t, i18n } = useTranslation();
 return (
    <section id="faqs">
      <h2>{t("description.part13")}</h2>
      <p>
        {t("description.part14")}
      </p>
      <div className="container faqs__container">
      {
        faqs.map(faq => (
          <FAQ key={faq.id} faq={faq}/>

        ))
      }
      </div>
    </section>
  )
}

export default FAQs