import { IoCall, IoGlobe } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <a href="tel:1800200234" target="_blank" className="footer-info">
        <IoCall className="footer-icon1" />
        <p className="footer-text">
          Toll free <b>1800 200 1234</b>
        </p>
      </a>
      <a
        href="https://www.facebook.com/cripumps"
        target="_blank"
        className="footer-info"
      >
        <FaFacebook className="footer-icon2" />
        <p className="footer-text">www.facebook.com/cripumps</p>
      </a>
      <a
        href="https://www.crigroups.com"
        target="_blank"
        className="footer-info"
      >
        <IoGlobe className="footer-icon3" />
        <p className="footer-text">www.crigroups.com</p>
      </a>
    </div>
  );
}
