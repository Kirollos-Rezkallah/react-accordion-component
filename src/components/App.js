import { faqs } from "../data";
import { Accordion } from "./Accordion";

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
