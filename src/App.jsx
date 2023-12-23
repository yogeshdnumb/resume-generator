import { useState } from "react";
import { useImmer } from "use-immer";
import { Preview } from "./components/Preview.jsx";
import { TextBox } from "./components/TextBox.jsx";
import { Accordion } from "./components/Accordion.jsx";
import { PersonalGroup } from "./components/PersonalGroup.jsx";
import { EducationGroup } from "./components/EducationGroup.jsx";
import { SkillsGroup } from "./components/SkillsGroup.jsx";
import { ExperienceGroup } from "./components/ExperienceGroup.jsx";
import "/src/styles/App.scss";
import "/src/styles/utils.scss";

export default function App() {
  const [data, setData] = useState({
    name: "Yogi",
    email: "yogi@gmail.com",
    number: "877223267",
    address: "No.1 London Yok",
    skills: [
      { name: "Python", id: "1" },
      { name: "Javascript", id: "2" },
      { name: "Go", id: "3" },
      { name: "Ruby", id: "4" },
    ],
    education: [
      { name: "Oxford", year: "2021-2023", id: 1 },
      { name: "Vel Tech High Tech", year: "2021-2023", id: 2 },
    ],
    experience: [
      {
        name: "Google",
        year: "2020-2021",
        position: "Juinior Dev",
        description: "I worked as a senior dev",
      },
    ],
  });

  function handleChange(key, value) {
    setData({ ...data, [key]: value });
  }
  function addSkills(value) {
    // console.log(data);
    setData({ ...data, skills: [...data.skills, value] });
  }

  function updateEducation(name, area, year) {
    setData({ ...data, education: [...data.education, { name, area, year }] });
  }
  function updateExperience(name, position, year, description) {
    setData({
      ...data,
      experience: [...data.education, { name, position, year, description }],
    });
  }
  return (
    <div className="App">
      {/* <TextBox handleChange={handleChange}>Name</TextBox> */}
      <div className="Form">
        <Accordion title={"Personal Info"}>
          <PersonalGroup
            data={data}
            handleChange={handleChange}
          ></PersonalGroup>
        </Accordion>
        <Accordion title={"Education"}>
          <EducationGroup
            data={data}
            updateEducation={updateEducation}
            setData={setData}
          ></EducationGroup>
        </Accordion>
        <Accordion title="Skills">
          <SkillsGroup
            data={data}
            setData={setData}
            handleChange={addSkills}
          ></SkillsGroup>
        </Accordion>
        <Accordion title="Experience">
          <ExperienceGroup
            data={data}
            updateExperience={updateExperience}
          ></ExperienceGroup>
        </Accordion>
      </div>
      {/* <p>{data.name}</p> */}
      <Preview data={data}></Preview>
    </div>
  );
}
