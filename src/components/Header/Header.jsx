import s from "./Header.module.css";
import Button from "../../ui/Button/Button";

export default function Header({ arrTitle }) {
  const styleBtn = {
    width: "16vw",
    height: "2.6vw",
    backgroundColor: "rgb(255, 237, 203)",
    fontSize: "1.6vw",
  };
  return (
    <header>
      {arrTitle.map((elem) => (
        <Button styleBtn={styleBtn}>{elem}</Button>
      ))}
    </header>
  );
}
