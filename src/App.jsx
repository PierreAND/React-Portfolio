import React from 'react'
import Navbar from './sections/navbar/Navbar'
import Header from './sections/header/Header'
import About from './sections/about/About'
import Services from './sections/services/Services'
import Portfolio from './sections/portfolio/Portfolio'
import FAQs from './sections/faqs/FAQs'
import Contact from './sections/contact/Contact'
import Footer from './sections/footer/Footer'
import i18n from './i18n'
import { useState } from 'react'
import { use } from 'i18next'




function App() {
  const [toggle, setToggle] = useState()
  console.log(toggle)
  
  const changeLanguage =(language) => {
    i18n.changeLanguage(language);
  };
  return (
   <main>
    <button className='btn-langage' onClick={()=>setToggle(prev => !prev)}>{toggle ? "EN" : "FR" }</button>
    
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    <Portfolio/>
    <FAQs/>
    <Contact/>
    <Footer/>
    
    {toggle ? changeLanguage("fr") : changeLanguage('en') }
    
   </main>
  )
}

export default App