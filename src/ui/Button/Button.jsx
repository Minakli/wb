import s from "./Button.module.css";

// export default function Button({ content, width, height, bgc, isActive }) {
export default function Button({ styleBtn, children }) {
  return (
    <button style={styleBtn} onClick={() => {}}>
      {children}
    </button>
  );
}
