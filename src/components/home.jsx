// import { useState } from "react";
// import "./Home.css";

// export default function Home() {
//   const [display, setDisplay] = useState("");

//   function handleClick(value) {
//     setDisplay(display + value);
//   }

//   function calculate() {
//     try {
//       setDisplay(eval(display).toString());
//     } catch {
//       setDisplay("Error");
//     }
//   }

//   function clearDisplay() {
//     setDisplay("");
//   }

//   return (
//     <div className="calculator">
//       <input type="text" value={display} readOnly />

//       <div className="buttons">
//         <button onClick={() => handleClick("7")}>7</button>
//         <button onClick={() => handleClick("8")}>8</button>
//         <button onClick={() => handleClick("9")}>9</button>
//         <button onClick={() => handleClick("/")}>/</button>

//         <button onClick={() => handleClick("4")}>4</button>
//         <button onClick={() => handleClick("5")}>5</button>
//         <button onClick={() => handleClick("6")}>6</button>
//         <button onClick={() => handleClick("*")}>*</button>

//         <button onClick={() => handleClick("1")}>1</button>
//         <button onClick={() => handleClick("2")}>2</button>
//         <button onClick={() => handleClick("3")}>3</button>
//         <button onClick={() => handleClick("-")}>-</button>

//         <button onClick={clearDisplay}>C</button>
//         <button onClick={() => handleClick("0")}>0</button>
//         <button onClick={calculate}>=</button>
//         <button onClick={() => handleClick("+")}>+</button>
//       </div>
//     </div>
//   );
// }


// -----------------------------------------------------------------

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