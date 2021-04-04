import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <ul>
          <li>Advertising</li>
          <li>Business</li>
          <li>How Search Works</li>
        </ul>
      </div>
      <div className='text'>🍃 carbon neutral since 2007</div>
      <div classname='footer-links'>
        <ul>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Setting</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
