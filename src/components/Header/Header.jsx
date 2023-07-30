import s from "./Header.module.css";
import Button from "../../ui/Button/Button";

export default function Header({ arrTitle, btnIsActive, setBtnIsActive }) {
  const styleBtn = {
    width: "16vw",
    height: "2.6vw",
    backgroundColor: "rgb(255, 237, 203)",
    fontSize: "1.6vw",
  };

  const styleBtnActive = {
    width: "16vw",
    height: "2.6vw",
    backgroundColor: "rgb(255, 209, 120)",
    fontSize: "1.6vw",
  };
  return (
    <header>
      {arrTitle.map((elem) => (
        <Button
          key={Math.random()}
          styleBtn={styleBtn}
          styleBtnActive={styleBtnActive}
          btnIsActive={btnIsActive}
          setBtnIsActive={setBtnIsActive}
          elem={elem}
        />
      ))}
    </header>
  );
}
