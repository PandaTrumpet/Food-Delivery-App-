import { assets } from "../../assets/assets.js";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio ab
            animi mollitia iure, deserunt earum? Quis autem neque optio
            excepturi ducimus expedita quidem sunt consequuntur minima, veniam
            aspernatur inventore. Beatae.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook Icon" />
            <img src={assets.twitter_icon} alt="Twitter Icon" />
            <img src={assets.linkedin_icon} alt="Linkedin Icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <address>
            <ul>
              <li>
                <a href="tel:+121211122214">+1-212-111-22214</a>
              </li>
              <li>
                <a href="mailto:contactme@res.com">contactme@res.com</a>
              </li>
            </ul>
          </address>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Res.com- All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
