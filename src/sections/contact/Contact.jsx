import data from "./data"

const Contact  = () => {
return (
  <section id="contact">
    <div className="job">
    <h2>CONTACTEZ-MOI </h2>
  <h5>Actuellement à la recherche d'un nouvel emploi/stage, je suis interéssé par les poste de : </h5>
    <p>Developpeur full-stack - Developpeur front-end - Intégrateur web</p>
 </div>
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