import React, { useState } from "react";
import Toggle from "./Toggle";



function App() {
  function Toggle(){
  let [isOn,setIsOn] = useState(false);

    function handleClick() {
      setIsOn((isOn) => !isOn);
    }
    const color = isOn ? "red" : "white";
    return(
    <button style={{ background:"red" }}onClick={handleClick}>{isOn ?
       "ON" : "OF"}</button>
       )
  }
  return (
    <div>
      <h3>Toggle</h3>
      <Toggle />
    </div>
  );
}

export default App;
