import { useState } from "react";
import "../styles/Accordion.scss";

export function Accordion({ className, title, children }) {
  const [open, setOpen] = useState(true);
  return (
    <div className={open ? "Accordion" : "Accordion-closed"}>
      <h2 className="Accordion-header">{title}</h2>
      <button className="chevron" onClick={() => setOpen(!open)}>
        {open ? (
          <img src="/src/assets/chevron-up.svg "></img>
        ) : (
          <img src="/src/assets/chevron-down.svg"></img>
        )}
      </button>
      {children}
    </div>
  );
}
