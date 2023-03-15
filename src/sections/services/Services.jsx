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
      <h2 className='title-outil'>Mes Outils</h2>
      <div className="outil">
      
        <a href="https://rubyonrails.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg"/></a>
<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"/></a>
<a href="https://www.w3.org/css/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"/></a>
<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"/></a>
<a href="https://www.postgresql.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"/></a>
<a href="https://www.ruby-lang.org/fr/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg"/></a>
<a href="https://www.heroku.com/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg"/></a>
<a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"/></a>
<a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/></a>
<a href="https://fr.reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/></a>
<a href="https://fr.reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"/></a>
        
      </div>
    </section>
  )
}

export default Services