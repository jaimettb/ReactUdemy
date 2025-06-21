import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={5}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  collapsedNumWords = 10,
  expanded = false,
  expandButtonText = "Expand",
  collapseButtonText = "Collapse",
  buttonColor,
  className,
}) {
  let [getExpanded, setExpanded] = useState(expanded);

  function handleExpand(expanded) {
    setExpanded((e) => (e = !expanded));
  }

  return (
    <div className={className}>
      {getExpanded
        ? children
        : truncateTextByWords(children, collapsedNumWords)}
      <ExpandButton
        expandButtonText={expandButtonText}
        collapseButtonText={collapseButtonText}
        buttonColor={buttonColor}
        expanded={getExpanded}
        onExpanded={handleExpand}
      />
    </div>
  );
}

function ExpandButton({
  expanded,
  expandButtonText,
  collapseButtonText,
  buttonColor,
  onExpanded,
}) {
  let buttonStyle = {
    color: buttonColor ? buttonColor : "blue",
    marginLeft: "5px",
    border: "0px",
    background: "none",
    fontSize: "15px",
    fontWeight: "bold",
  };

  return (
    <button style={buttonStyle} onClick={() => onExpanded(expanded)}>
      {expanded ? collapseButtonText : expandButtonText}
    </button>
  );
}

function truncateTextByWords(text, numWords) {
  const words = text.trim().split(/\s+/);
  const truncatedWords = words.slice(0, numWords);
  let result = truncatedWords.join(" ");

  if (words.length > numWords) {
    result += "...";
  }

  return result;
}
