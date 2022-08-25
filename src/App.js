import React, { useState } from "react";

let sum = 0;
let pre = 0;
let sumCheck = false;
let subCheck = false;
let mulCheck = false;
let divCheck = false;

export default function App() {
  const [value, setValue] = useState(0);
  const [store, setstore] = useState(0);

  function getValue(digit) {
    setValue(value + digit);

    setstore(store + digit);

    console.log(store + digit);

    if (digit === "reset") {
      setValue(0);
      setstore(0);
      pre = 0;
    }

    if (sumCheck) {
      sumCheck = false;
      setValue(sum + parseInt(digit));
    } else if (subCheck) {
      setValue(sum - parseInt(digit));
      subCheck = false;
    } else if (mulCheck) {
      setValue(sum * parseInt(digit));
      mulCheck = false;
    } else if (divCheck) {
      setValue(sum / parseInt(digit));
      divCheck = false;
    }

    if (digit === "+") {
      sumCheck = true;
    } else if (digit === "-") {
      subCheck = true;
    } else if (digit === "*") {
      mulCheck = true;
    } else if (digit === "/") {
      divCheck = true;
    }

    if (pre === 0) {
      sum = parseInt(digit);
      pre = 1;
    } else {
      sum = value;
    }
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span
            className="answer"
            style={{ marginLeft: "15px", color: "white" }}
          >
            {value}
          </span>
        </div>

        <hr />

        <div className="digits">
          <button onClick={() => getValue(1)}>1</button>
          <button onClick={() => getValue(2)}>2</button>
          <button onClick={() => getValue(3)}>3</button>
          <button onClick={() => getValue("-")}>-</button>
          <br />
          <button onClick={() => getValue(4)}>4</button>
          <button onClick={() => getValue(5)}>5</button>
          <button onClick={() => getValue(6)}>6</button>
          <button onClick={() => getValue("/")}>/</button>
          <br />
          <button onClick={() => getValue(7)}>7</button>
          <button onClick={() => getValue(8)}>8</button>
          <button onClick={() => getValue(9)}>9</button>
          <button onClick={() => getValue("*")}>*</button>
          <br />
          {/* <button></button> */}
          <button onClick={() => getValue(0)}>0</button>
          <button onClick={() => getValue("reset")}>R</button>
          <button onClick={() => getValue("=")}>=</button>
          <button onClick={() => getValue("+")}>+</button>
        </div>
      </div>
    </div>
  );
}
