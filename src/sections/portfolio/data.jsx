import Image1 from "../../../public/images/DailyPortfolio.png"
import Image2 from "../../../public/images/fondprarify.png"
import Image3 from "../../../public/images/Terragreenportfolio.png"
import Image4 from "../../../public/images/finalefondgamer.png"


const data = [
    {
        id: 1,
        category:"Personal",
        image: Image3,
        title:"TerraGreen",
        desc: "FullStack Application ReactJS avec Ruby on rails. TerraGreen est un site qui permet de localiser des zones à depolluer. ",
        demo: "https://terra-green.vercel.app/",
        github: "https://github.com/Samsou1/TerraGreen_Front"
    
   },
   {
       id: 2,
       category:"Personal",
       image: Image1,
       title:"DailyThink",
       desc: "FullStack Application (PWA) ReactJS avec Ruby on rails. DailyThink est un édito personnel dans lequel j'écris des articles selon différentes thématiques.",
       demo: "https://www.dailythink.eu/",
       github: "https://github.com/PierreAND/DailyThink"
       
    },
       {
           id: 3,
           category:"-s",
           image: Image2,
           title:"Prairify",
           desc: "Application Rails framework : AlpineJS / TailwindCss. Ce projet nait à l'origine d'un thread Reddit sur la nécessité de changer la conception de nos jardins",
           demo: "https://prairify.me/en",
           github: "https://github.com/PierreAND/prairify.me"
       
      },
      {
        id: 4,
        category:"-s",
        image: Image4,
        title:"Gamerscon",
        desc: "Application Javascript / Sass. Projet de notation de jeux vidéos selon les plateformes grâce à l'API RAWG Video Games Database ",
        demo: "http://localhost:5170/",
        github: "https://github.com/Samsou1/JS_rawg"
    
   }


 
]

export default data