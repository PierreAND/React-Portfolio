import React from 'react'
import Projects from './Projects'
import ProjectsCategories from './ProjectsCategories'
import data from "./data"
import { useState } from 'react'
import { useTranslation } from "react-i18next";


const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState(data)
  return (
    <section id="portfolio">
      <h2>{t("description.part11")}</h2>
      <p>{t("description.part12")}</p>
    <div className="container portfolio__container">
      <ProjectsCategories/>
      <Projects projects={projects}/>

    </div>
    </section>
  )
}

export default Portfolio