import React from "react";
import "./style.css";

function Footer() {
  return (
    <div className="myFooter">   
    <a className = "footerLinks" href="contact.html"> Contact </a>
    <i className="fas fa-envelope"></i>
    <a className = "footerLinks" href="portfolio.html"> Portfolio </a>
    <i className="fas fa-envelope"></i>
    <a className = "footerLinks" href="index.html"> About </a> 
    <i className="fas fa-user-circle"></i>  
  </div>
  );
}

export default Footer;
