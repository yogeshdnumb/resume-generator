import { TextBox } from "./TextBox";
import "../styles/PersonalGroup.scss";

export function PersonalGroup({ data, handleChange }) {
  return (
    <div className="PersonalGroup Accordion-child flex form-group">
      <TextBox handleChange={handleChange} name="name" value={data.name}>
        Name
      </TextBox>
      <TextBox handleChange={handleChange} name="email" value={data.email}>
        Email
      </TextBox>
      <TextBox handleChange={handleChange} name="number" value={data.number}>
        Mobile Number
      </TextBox>
      <TextBox handleChange={handleChange} name="address" value={data.address}>
        Address
      </TextBox>
    </div>
  );
}
