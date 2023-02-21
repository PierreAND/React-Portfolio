import React from 'react'
import data from './data'


const Header = () => {
  return (
    <header id="header">
     <div className="container header__container">
      <div className="header__profile">
        <img src="/public/zappa.jpg" alt="Header Portrait" />
      </div>
      <h3>Pierre Andrieu</h3>
      <p>
        You are a click away from building your best website or web app. Im fully available for building modern, mobile responsive, highly performant website today !
      </p>
      <div className="header__cta">
        <a href="#portfolio" className='btn light'>My Work</a>
        <a href="#contact" className='btn primary'>Let's Talk</a>
      </div>
      
      
      <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
  
     
     </div>

    </header>
  )
}

export default Header