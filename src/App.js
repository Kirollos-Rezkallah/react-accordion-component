import { useState } from "react";
import { faqs } from "./data";

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, idx) => (
        <AccordionItem
          num={idx}
          title={el.title}
          key={el.title}
          curOpen={curOpen}
          onOpen={setCurOpen}>
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = curOpen === num;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }
  return (
    <div className={isOpen ? "item open" : "item"} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
