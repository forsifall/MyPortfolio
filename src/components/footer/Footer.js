import "./Footer.sass";
import { React } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <article className="footer">
      <a
        href="https://github.com/forsifall"
        target="_blank"
        rel="noopener noreferrer">
        forsifall &copy;{currentYear}
      </a>
    </article>
  );
};

export default Footer;
