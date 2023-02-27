import data from "./data"

const Contact  = () => {
return (
  <section id="contact">
    <h2>CONTACTEZ-MOI !</h2>
  <p>Actuellement à la recherche d'un nouvel emploi/stage, je suis interéssé par les poste de :</p><br/>
  <p>Developpeur full-stack <span>.</span> Developpeur front-end<span>.</span> Intégrateur web</p>
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