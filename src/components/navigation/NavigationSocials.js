import Linkedin from "../../assets/images/socials/linkedin-pink.svg";
import Github from "../../assets/images/socials/github-pink.svg";
import Codepen from "../../assets/images/socials/codepen-pink.svg";
import { React } from 'react';

const NavigationSocials = () => {
  return (
    <section className="navigation__socials">
      <a
        href="https://leetcode.com/u/forsifall/"
        target="_blank"
        rel="noopener noreferrer"
      > 
        <img src={Linkedin} alt="лит код" />
      </a>
      <a
        href="https://github.com/forsifall"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Github} alt="GitHub" />
      </a>
      <a
        href="https://t.me/oven_ro"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Codepen} alt="телеграмм" />
      </a>
    </section>
  );
};

export default NavigationSocials;