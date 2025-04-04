import { React } from 'react';

const PortfolioDescription = () => {
  return (
    <section className="portfolio-content">
      <h2 className="title-font pink-text h2-tag">Портфолио</h2>
      <p className="white-text p-tag">
      Я с головой погрузился в веб-разработку, посвящая много времени созданию проектов с нуля и прокачке своих навыков. Особенно нравится сам процесс — от идеи до работающего интерфейса. За это время я сделал множество небольших проектов: как учебных, так и выполненных в рамках фриланс-заказов. Каждый из них помог мне лучше понять, как устроен фронтенд, как работают современные инструменты и как превратить макет в живой сайт. Некоторые из них я выкладываю на свой GitHub — заглядывайте!        <span>
          <a
            href="https://github.com/forsifall"
            className="pink-text"
            target="_blank"
            rel="noopener noreferrer">
            GitHub
          </a>
        </span>
      </p>
    </section>
  );
};

export default PortfolioDescription;