import "./App.css";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const handlePrevious = function handlePrevious() {
    setStep((s) => s + 1);
  };

  const handleNext = function handlePrevious() {
    setStep((s) => s - 1);
  };

  const handlePreviousCount = function handlePrevious() {
    setCount((c) => c + 1);
  };

  const handleNextCount = function handlePrevious() {
    setCount((c) => c - 1);
  };

  return (
    <div className="App">
      <StepLine
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        step={step}
      />
      <CountLine
        handleNext={handleNextCount}
        handlePrevious={handlePreviousCount}
        count={count}
      />
      <LabelLine step={step} count={count} />
    </div>
  );
}

function StepLine({ handleNext, handlePrevious, step }) {
  return (
    <div>
      <button onClick={handleNext}>-</button>
      Step: {step}
      <button onClick={handlePrevious}>+</button>
    </div>
  );
}

function CountLine({ handleNext, handlePrevious, count }) {
  return (
    <div>
      <button onClick={handleNext}>-</button>
      Count: {count}
      <button onClick={handlePrevious}>+</button>
    </div>
  );
}

function LabelLine({ step, count }) {
  const dateIncrement = count * step;

  console.log(dateIncrement);

  const date = new Date();
  const updatedDate = date.setDate(date.getDate() + dateIncrement);
  const formattedDate = new Date(updatedDate).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  console.log(formattedDate);

  return (
    <div>
      {dateIncrement === 0
        ? "Today is"
        : `${dateIncrement} days from today is `}{" "}
      {formattedDate}
    </div>
  );
}
