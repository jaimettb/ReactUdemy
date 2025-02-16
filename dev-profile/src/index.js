import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <div className="skill-list">
          <Skill skill="Dot Net" color="aqua" moji="./strong.gif" />
          <Skill skill="Restfull APIs" color="BlueViolet" moji="./strong.gif" />
          <Skill skill="Microservices" color="Chartreuse" moji="./strong.gif" />
          <Skill skill="Playwright" color="DarkCyan" moji="./strong.gif" />
          <Skill skill="Azure" color="Gold" moji="./strong.gif" />
          <Skill skill="Angular" color="Green" moji="./strong.gif" />
          <Skill skill="Blazor" color="Khaki" moji="./strong.gif" />
          <Skill
            skill="JavaScript"
            color="LightSeaGreen"
            moji="./thumbs-up.gif"
          />
          <Skill skill="Typescript" color="RosyBrown" moji="./scared.gif" />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="./photo.jpg" className="avatar" alt="Jaime" />;
}

function Intro() {
  return (
    <div>
      <h1>Jaime Batista</h1>
      <IntroText />
    </div>
  );
}

function IntroText() {
  return (
    <div>
      Software specialist and Scrum Master. I love playing Video Games and spend
      time with my kids. Also I'm an investidor and options trade in my free
      time.
    </div>
  );
}

function Skill(props) {
  return (
    <button
      className="skill data"
      style={{ backgroundColor: props.color, fontWeight: "bold" }}
    >
      {props.skill}
      <img src={props.moji} style={{ height: "20px" }} />
    </button>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
