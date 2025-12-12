import { React } from 'react'
const stack = [
  "HTML5",
  "CSS3",
  "Bootstrap",
  "SCSS/SASS",
  "JavaScript ES5+",
  "React.js",
  "WordPress",
  "Tilda",
  "Drupal",
  "TypeScript",
  "MODX",
  "Joomla",
  "Bitrix",
  "OpenCart",
];


const Stack = () => {
  return (
    <section>
      <h3 className="title-font white-text ">
      Вот несколько инструментов и технологий, с которыми я работаю:
      </h3>
      <ol className="stack-list">
        {stack.map((item, index) =>
          (<li key={index}>{item}</li>)
        )}
      </ol>
    </section>
  );
};

export default Stack;
