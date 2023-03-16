import React from 'react'
import data from "./data"
import Card from '../../components/Card'
import { useTranslation } from 'react-i18next'


const Services = () => {
  const { t, i18n} = useTranslation();

  return (
    <section id="services">
      <h2>{t("description.part7")}</h2>
      <p> {t("description.part8")} </p>
      <div className="container services__container">
        {
          data.map(item => (
     
            <Card key={item.id} className="service light">
              <div className="service__icon">{item.icon}</div>
              <div className="service__details">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </Card>
          ))
        }
      </div>
    </section>
  )
}

export default Services