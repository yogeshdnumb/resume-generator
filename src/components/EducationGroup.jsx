import { v4 as uuidv4 } from "uuid";
import { TextBox } from "./TextBox";
import "../styles/EducationGroup.scss";
import { useState } from "react";
import { EducationForm } from "./EducationForm";

export function EducationGroup({ setData, data, updateEducation }) {
  const [addStatus, setAddStatus] = useState(false);

  if (addStatus) {
    return (
      <div className="Accordion-child">
        <EducationForm
          setData={setData}
          updateEducation={updateEducation}
          data={data}
          onClick={setAddStatus}
        ></EducationForm>
      </div>
    );
  }

  return (
    <div className="EducationGroup flex form-group Accordion-child">
      <button className="button" onClick={() => setAddStatus(!addStatus)}>
        Add+
      </button>
      {data.education.map((edu) => {
        if (edu.name) {
          return (
            <div key={edu.id} className="eduation-container">
              <button
                onClick={() => {
                  let newEducation = data.education.filter((ed) => {
                    if (ed.id != edu.id) {
                      return true;
                    }
                  });
                  setData({ ...data, education: newEducation });
                }}
              >
                del
              </button>
              <p>{edu.name}</p>
              <p>{edu.year}</p>
            </div>
          );
        }
      })}
    </div>
  );
}
