import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import '../style/footer.css';

const Footer = () => {
  return (
    <div id="Footer" className="footer-container">
      <div className="footer-left">
        <h1 className="footer-heading">Contact</h1>
        <h3 className="footer-subheading">Feel Free To reach out!</h3>
      </div>

      <ul className="footer-list">
        <li className="footer-item">
          <MdOutlineEmail size={20} />
          <a href="mailto:pinkyshergill1986@gmail.com?subject=Subject%20Here&body=Hello%2C%20I'd%20like%20to%20...">Send me an Email </a>

        </li>
        <li className="footer-item">
          <FaGithub />
         <a href="https:/github.com/AnamShergill" target="_blank"> github.com/AnamShergill</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
