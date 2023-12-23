import { useState } from "react";
import "/src/styles/TextBox.scss";

// function handleChange(e) {
//   value = e.target.value;
// }

export function TextBox({ type = "text", handleChange, children }) {
  const [value, setValue] = useState("");

  return (
    <label className="TextBox">
      <input
        type={type}
        required
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          handleChange(e.target.value);
        }}
      ></input>
      <span>{children}</span>
    </label>
  );
}
