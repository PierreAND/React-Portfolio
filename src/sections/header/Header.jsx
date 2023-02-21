import React from 'react'
import data from './data'

const Header = () => {
  return (
    <header id="header">
     <div className="container header__container">
      <div className="header__profile">
        <img src="/public/zappa.jpg" alt="Header Portrait" />
      </div>
      <h3>ANDRIEU Pierre</h3>
      <p>
        You are a click away from building your best website or web app. Im fully available for building modern, mobile responsive, highly performant website today !
      </p>
      <div className="header__cta">
        <a href="#contact">Let's Talk</a>
        <a href="#portfolio">My Work</a>
      </div>
      <div className="header__socials">
        {
          data.map((item) => (
          <a href={item.link} key={item.id}>{item.icon}</a> 
           

          ))
        }
      </div>
     </div>

    </header>
  )
}

export default Header