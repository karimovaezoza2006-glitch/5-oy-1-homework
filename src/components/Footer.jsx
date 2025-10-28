import React from 'react'
import accaLogo from '../assets/img/algologo.png'
const Footer = () => {
  return (
    <div>
        <footer className="footer">
      <div className="footer-top container">
        <div className="footer-logo">
           <img src={accaLogo} alt="ACCA" />
          <p>Your new finance team</p>
        </div>

        <div className="footer-columns">
          

          <div className="footer-col">
            <h4>What we do</h4>
            <ul>
              <li><a href="#">Finance Teams</a></li>
              <li><a href="#">Tax</a></li>
              <li><a href="#">R&D Tax Credits</a></li>
              <li><a href="#">A platform for success</a></li>
              <li><a href="#">Software Integrations</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Who we help</h4>
            <ul>
              <li><a href="#">Startups</a></li>
              <li><a href="#">Small Business</a></li>
              <li><a href="#">Medium Business</a></li>
              <li><a href="#">CFO & Head of Finance</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">Podcasts</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>

        

       
      </div>

      <div className="footer-bottom container">
        <p>© Accountancy Cloud 2021</p>
        <p>
          <a href="#">Privacy Policy & Cookies</a> |{" "}
          <a href="#">Terms of Service</a>
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer