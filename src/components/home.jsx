
import { useState } from "react";
import "./home.css";

export default function Home() {
  const [display, setDisplay] = useState("");

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "C", "0", "=", "+"
  ];

  function handleClick(value) {
    setDisplay(display + value);
  }

  function calculate() {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  }

  function clearDisplay() {
    setDisplay("");
  }

  return (
    <div className="bgrnd">
    

    <div className="calculator">
      <input type="text" value={display} readOnly />

      <div className="buttons">
        {buttons.map((button) => (
          <button
            key={button}
            onClick={() => {
              if (button === "C") {
                clearDisplay();
              } else if (button === "=") {
                calculate();
              } else {
                handleClick(button);
              }
            }}
          >
            {button}
          </button>
        ))}
      </div>
    </div>

   </div> 
  );
}