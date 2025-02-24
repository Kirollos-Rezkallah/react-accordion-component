import { useState } from "react";
import { AccordionItem } from "./AccordionItem";

export function Accordion({ data }) {
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
