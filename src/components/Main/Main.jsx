import s from "./Main.module.css";
import Line from "../Line/Line";

export default function Main({ arrHello, arrSum, arrItems }) {
  console.log(arrItems);
  return (
    <main>
      <ul>
        {arrHello.map((elem) => (
          <li key={Math.random()}>
            <div className={s.block}>
              <span>{elem}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className={s.line}></div>
      <ul>
        {arrSum.map((elem) => (
          <li key={Math.random()}>
            <div className={s.block}>
              <span>{elem}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className={s.data__wrapper}>
        {arrItems.map((elem, index) => (
          <Line elem={elem} index={index} key={index} />
        ))}
      </div>
    </main>
  );
}
