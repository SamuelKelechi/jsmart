import React, { useState, useEffect } from "react";
import { TextTransition } from "react-text-transition";

const TEXTS = ["Welcome to my site", "I am a React Developer", "Let's build amazing apps!"];

const App = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % TEXTS.length); // Rotate through texts
    }, 2000); // Change every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval
  }, [index]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontSize: "24px" }}>
      <TextTransition springConfig={{ stiffness: 50, damping: 20 }}>
        {TEXTS[index]}
      </TextTransition>
    </div>
  );
};

export default App;