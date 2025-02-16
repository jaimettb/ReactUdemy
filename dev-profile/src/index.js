import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="photo.jpg" className="avatar" alt="Jaime" />;
}

function Intro() {
  return (
    <div>
      <h1>Jaime Batista</h1>
      <p>
        Software specialist and Scrum Master. I love playing Video Games and
        spend time with my kids. Also I'm an investidor and options trade in my
        free time.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Dot Net" color="aqua" emoji="🤣" />
      <Skill skill="Restfull APIs" color="BlueViolet" emoji="😂" />
      <Skill skill="Microservices" color="Chartreuse" emoji="😊" />
      <Skill skill="Playwright" color="DarkCyan" emoji="✌" />
      <Skill skill="Azure" color="Gold" emoji="👍" />
      <Skill skill="Angular" color="Green" emoji="😎" />
      <Skill skill="Blazor" color="Khaki" emoji="👊" />
      <Skill skill="JavaScript" color="LightSeaGreen" emoji="💪" />
      <Skill skill="Typescript" color="RosyBrown" emoji="😜" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" color style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
