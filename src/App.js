import "./App.css";
import { Input, Button } from "antd";
import jordanCardo from "./assests/jordanCardo.jpg";
import { useState } from "react";

const maxCharacters = 80;
const ceilingPixels = 15;

const App = () => {
  const [password, setPassWord] = useState("");

  const findBlur = () => {
    const ratio = 1 - password.length / maxCharacters;
    const pixels = ceilingPixels * ratio;

    return pixels;
  };

  console.log(findBlur(), "count");

  return (
    <div className="background">
      <img
        style={{
          width: "100vw",
          height: "100vh",
          filter: `blur(${findBlur()}px) `,
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