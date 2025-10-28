import React from 'react'
import logo from '../assets/img/logo.svg'
const Header = () => {
  return (
    <div>
      <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <img src={logo}/>
        </div>

        <nav className="main-nav">
          <ul>
            <li>Home</li>
            <li>How it works</li>
            <li>What we do</li>
            <li>Who we help</li>
            <li>Resources</li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="btn btn-outline">Login</button>
          <button className="btn btn-primary">Talk to an Expert</button>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Header