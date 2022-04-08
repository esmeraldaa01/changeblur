import "./App.css";
import { Input, Button } from "antd";
import jordanCardo from "./assests/jordanCardo.jpg";
import { useState } from "react";

const App = () => {
  const maxCharacters = 100;
  const ceilingPixels = 12;


  const [password, setPassWord] = useState("");

  const findBlur = () => {
    const nrDivided =  maxCharacters / ceilingPixels ;
   return nrDivided;
  };

  console.log(findBlur(), "count");
  //count / 12
  return (
    <div className="background">
      <img
        style={{
          width: "100vw",
          height: "100vh",
          filter: `blur(${maxCharacters - (findBlur() * password.length)}px) `,
        }}
        src={jordanCardo}
      />

      <div className="form-card">
        <div style={{ marginBottom: "10px" }}>
          <p className="header">Image Password Strength</p>
          <small className="paragraph">
            Change the password to see the effect
          </small>
        </div>
        <label className="label">Email: </label>
        <Input style={{ padding: "6px" }} placeholder="Enter email" />
        <label className="label">Password: </label>
        <Input
          onChange={(e) => setPassWord(e.target.value)}
          style={{ padding: "6px" }}
          placeholder="Enter password"
        />
        <Button
          className="submit"
          value="large"
          shape="rectangle"
          type="primary"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default App;
