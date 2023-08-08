import { useState, useEffect } from "react";

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
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://statistics-api.wildberries.ru/api/v1/supplier/stocks?dateFrom=2023-04-12",
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NJRCI6ImNkZDNjNDg1LTkxYmItNDNiNi1iYzExLTQ1MzAzM2E3MDliOCJ9.TwQESCgtVYLIClyTh0A3zRI715V1YRN4hc9wb69H0Vw",
        },
      }
    )
      .then((response) => response.json())
      .then((actualData) => setData(actualData));
  }, []);
  console.log(data);
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
