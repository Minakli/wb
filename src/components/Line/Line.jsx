import s from "./Line.module.css";

export default function Line({ elem, index, bgc }) {
  return (
    <div className={s.wrapper}>
      <div className={s.num}>
        <span>{index + 1 + "."}</span>
      </div>
      <div className={s.value}>{elem.a}</div>
      <div className={s.value}>{elem.b}</div>
      <div className={s.value}>{elem.c}</div>
      <div className={s.value}>{elem.d}</div>
      <div className={s.value}>{elem.e}</div>
      <div className={s.value}>{elem.f}</div>
      <div className={s.value}>{elem.g}</div>
      <div className={s.value}>{elem.h}</div>
      <div className={s.value}>{elem.i}</div>
      <div className={s.value}>{elem.j}</div>
    </div>
  );
}
