import React from 'react';
import '../footer.css'; 
import logo from '../logo/logo.png'
const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <img src ={logo}/>
        <p className="footer-links">
          <a href="#" className="link-1">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </p>
        <p className="footer-company-name">Net Fly © 2023</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p><span>NetFly Tunisie</span></p>
        </div>
        <div>
        
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">support@Net Fly.com</a></p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About Us</span>
         Welcome to Net Fly  ! here you can find your dreamer films and you can sell your favorite one . Enjoy with us !
        </p>
       
      </div>
    </footer>
  );
};

export default Footer;