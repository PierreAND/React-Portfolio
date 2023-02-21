import {AiOutlineDownload} from "react-icons/ai"
import Card from "../../components/Card"
import data from "./data"


const About = () => {
  return (
    <section id="about">
       <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src="/public/portrait.jpg" alt="Portrait" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {

              data.map(item=>(
                <Card key={item.id} className="about__card">
                  <span className="about__card-icon">{item.icon}</span>*
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }

          </div>
          <p>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ab deserunt distinctio? Sunt quas est repellendus, saepe illum necessitatibus dolorem autem unde ducimus excepturi voluptate fuga animi? Soluta, in magni. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus reprehenderit asperiores corporis eaque ab dolorum soluta sed aut quo ipsum temporibus sit nam praesentium officiis alias nostrum dolores ex repudiandae ipsam vitae, possimus minima? Rerum, nostrum delectus sunt quas repudiandae totam, ut beatae eaque, suscipit a placeat saepe commodi dolore!
          </p>
        </div>
<a href="/public/CV.pdf" download className="btn primary">Download CV <AiOutlineDownload/></a>
       </div>
    </section>
  )
  
}

export default About
