import { useEffect, React } from "react";
import { Footer } from "../../components";
import ContactForm from "./ContactForm";
import "./Contact.sass";
const Contact = () => {
  useEffect(() => {
    document.title = "Contact | forsifall";
    window.scrollTo(0, 0);
  });
  return (
    <main className="contact">
      <h2 className="title-font pink-text h2-tag">Связь со мной</h2>
      <p className="white-text p-tag">
        Если вы заинтересованы в найме меня, я всегда открыт для новых
        возможностей и интересных проектов! Не стесняйтесь обращаться ко мне,
        если у вас есть какие-либо другие запросы или вопросы относительно
        веб-разработки.
      </p>
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Contact;
