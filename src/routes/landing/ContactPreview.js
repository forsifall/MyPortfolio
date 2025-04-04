import ContactForm from "../contact/ContactForm";
import { React } from 'react';

const ContactPreview = () => {
  return (
    <article className="landing__contact">
      <h2 className="title-font pink-text h2-tag">Связь со мной</h2>
      <p className="white-text p-tag">
      Если вы заинтересованы в найме меня, я всегда открыт для новых возможностей и интересных проектов! Не стесняйтесь обращаться ко мне, если у вас есть какие-либо другие запросы или вопросы относительно веб-разработки.
      </p>
      <ContactForm />
    </article>
  );
};

export default ContactPreview;