import React from "react";
import data from "./data";
import { AiOutlinePrinter } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="footer__copyright">
        <small>ANDRIEU Pierre &copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
