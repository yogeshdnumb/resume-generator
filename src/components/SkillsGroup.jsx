import { useState } from "react";
import { TextBox } from "./TextBox";
import { v4 as uuidv4 } from "uuid";

export function SkillsGroup({ data, addSkills, setData }) {
  const [typingSkill, setTypingSkill] = useState("");
  return (
    <div className="Accordion-child">
      <TextBox
        handleChange={(value) => {
          setTypingSkill(value);
        }}
      ></TextBox>
      <button
        className=""
        onClick={() => {
          // addSkills(typingSkill);

          setData({
            ...data,
            skills: [...data.skills, { name: typingSkill, id: uuidv4() }],
          });
        }}
      >
        +
      </button>
      <ul>
        {data.skills.map((skill) => {
          if (skill.name)
            return (
              <li key={skill.id}>
                {skill.name}
                <button
                  id={skill.id}
                  onClick={(e) => {
                    const newSkills = data.skills.filter((currentSkill) => {
                      if (currentSkill.id != skill.id) {
                        return true;
                      }
                    });

                    setData({ ...data, skills: newSkills });
                    // for (const currentSkill of oldData.skills) {
                    //   let id = 0;
                    //   if (currentSkill.id == skill.id) {
                    //     console.log(oldData.skills[id]);
                    //     delete oldData.skills[id];
                    //     console.log(oldData.skills[id]);
                    //     console.log(oldData);
                    //     setData(oldData);
                    //   }
                    //   id++;
                    // }
                  }}
                >
                  Del
                </button>
              </li>
            );
        })}
      </ul>
    </div>
  );
}
