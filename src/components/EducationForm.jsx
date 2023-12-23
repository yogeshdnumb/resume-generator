import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextBox } from "./TextBox";

export function EducationForm({ setData, data, onClick }) {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  return (
    <div className="education__form flex form-group">
      <TextBox handleChange={setName}>College Name</TextBox>
      <TextBox handleChange={setYear}> Year</TextBox>
      <div className="button__container">
        <button
          className="button"
          onClick={() => {
            onClick(false);
          }}
        >
          Cancel
        </button>
        <button
          className="button"
          onClick={() => {
            onClick(false);
            // updateEducation(name, area, year);
            setData({
              ...data,
              education: [...data.education, { name, year, id: uuidv4() }],
            });
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
