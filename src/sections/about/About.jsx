import { AiOutlineDownload } from "react-icons/ai";
import Card from "../../components/Card";
import data from "./data";

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
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet facilis cumque doloremque doloribus accusamus ducimus, asperiores quidem iusto ipsam aspernatur atque voluptatum debitis? Ex maxime maiores accusamus veritatis, aut dolorum?
                </p>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium quae qui tenetur excepturi nemo, voluptate, sequi facere soluta delectus dignissimos facilis voluptatum vitae hic ex impedit, veniam repellat suscipit id saepe iure vero! Sapiente excepturi illum iusto sunt veritatis!"
                </p>
                <a href="/public/CV.pdf" download className='btn primary'>Download CV <AiOutlineDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About
