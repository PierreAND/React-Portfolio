import Image1 from "../../../public/images/DailyPortfolio.png"
import Image2 from "../../../public/images/prarify5.png"
import Image3 from "../../../public/images/Terragreenportfolio.png"
import Image4 from "../../../public/images/rando.png"

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
        title:"RandoTrack",
        desc: "Application en clean architecture back et front, AdonisJs et Angullar typeScript :  Cette application permet aux utilisateurs de pré-tracer leurs itinéraires, de marquer des points d’intérêt, de visualiser la courbe des dénivelés. Grâce au suivi GPS, on bénéficie d’un suivi de position en temps réel lors des sorties.  ",
        demo: "https://randotrack.vercel.app/",
        github: ""
    
   }


 
]

export default data