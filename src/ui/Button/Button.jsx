import s from "./Button.module.css";

// export default function Button({ content, width, height, bgc, isActive }) {
export default function Button({
  styleBtn,
  styleBtnActive,
  btnIsActive,
  setBtnIsActive,
  elem,
}) {
  return (
    <button
      style={btnIsActive === elem ? styleBtnActive : styleBtn}
      onClick={() => {
        setBtnIsActive(elem);
      }}
    >
      {elem}
    </button>
  );
}
