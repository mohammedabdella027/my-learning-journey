import React from "react";
import MyCounter from "./Components/MyCounter"
import IncreaseDecreaseCount from "./Components/IncreaseDecreaseCount";
import UseEffectForTitle from "./Components/UseEffectForTitle";

function App() {
  return (
    <div>
      <MyCounter />
      <hr />
      <IncreaseDecreaseCount />
      <hr />
      <UseEffectForTitle />
    </div>
  );
}

export default App;