import Projects from "./Projects";
import Footer from "../../components/footer/Footer";
import PortfolioDescription from "./PortfolioDescription";
import ScrollButton from "../../components/ScrollButton";
import { useEffect, React } from "react";
import "./Portfolio.sass";
const Portfolio = () => {
  useEffect(() => {
    document.title = "портфолио | forsifall";
    window.scrollTo(0, 0);
  })
  return (
    <main className="portfolio">
      <PortfolioDescription />
      
      <Footer />
    </main>
  );
};

export default Portfolio;
