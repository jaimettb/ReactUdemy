import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "Dot Net",
    level: "advanced",
    color: "aqua",
  },
  {
    skill: "Restfull APIs",
    level: "intermediate",
    color: "BlueViolet",
  },
  {
    skill: "Microservices",
    level: "beginner",
    color: "Chartreuse",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList skillList={skills} />
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

function SkillList({ skillList }) {
  return (
    <div className="skill-list">
      {skillList.map((skill) => (
        <Skill skill={skill} />
      ))}{" "}
    </div>
  );
}

function Skill({ skill }) {
  return (
    <div className="skill" color style={{ backgroundColor: skill.color }}>
      <span>{skill.skill}</span>
      <span>
        {skill.level === "beginner"
          ? "😥"
          : skill.level == "intermediate"
          ? "😊"
          : "😁"}
      </span>
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
