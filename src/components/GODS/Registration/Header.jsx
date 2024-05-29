import React from 'react'
import './Header.css'
import Logo from "./Vector1.png"

const Header = () => {
  return (
        
    <div className="title">
      <br/>
    <div className="all"><span className="highlight">R</span >egister</div>
    <img  src={Logo} alt='img' />
</div>
  )
}

export default Header
