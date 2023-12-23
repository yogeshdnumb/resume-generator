import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextBox } from "./TextBox";
export function ExperienceGroup({ data, updateExperience }) {
  const [addStatus, setAddStatus] = useState(false);
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  if (addStatus) {
    return (
      <div className="education__form flex form-group">
        <TextBox handleChange={setName}>Name</TextBox>
        <TextBox handleChange={setPosition}>Position</TextBox>
        <TextBox handleChange={setYear}>Year</TextBox>
        <TextBox handleChange={setDescription}>Description</TextBox>
        <div className="education__buttons">
          <button
            className="button"
            onClick={() => {
              setAddStatus(false);
            }}
          >
            Cancel
          </button>
          <button
            className="button"
            onClick={() => {
              setAddStatus(false);
              updateExperience(name, position, year, description);
            }}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="experience Accordion-child">
      <button
        className="button"
        onClick={() => {
          setAddStatus(!addStatus);
        }}
      >
        add+
      </button>
      {data.experience.map((exp) => {
        if (exp.name) {
          return (
            <div key={uuidv4()} className="eduation-container form-group">
              <p>{exp.name}</p>
              <p>{exp.position}</p>
              <p>{exp.year}</p>
              <p>{exp.description}</p>
            </div>
          );
        }
      })}
    </div>
  );
}
