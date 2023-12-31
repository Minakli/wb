import { useState } from "react";

//Data
import { arrTitle } from "../Data/Data.js";
import { arrHello } from "../Data/Data.js";
import { arrSum } from "../Data/Data.js";
import { arrItems } from "../Data/Data.js";

//components
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

export default function App() {
  const [btnIsActive, setBtnIsActive] = useState("Home");

  return (
    <>
      <Header
        arrTitle={arrTitle}
        btnIsActive={btnIsActive}
        setBtnIsActive={setBtnIsActive}
      />
      <Main
        arrHello={arrHello}
        arrSum={arrSum}
        arrItems={arrItems}
        btnIsActive={btnIsActive}
      />
    </>
  );
}
