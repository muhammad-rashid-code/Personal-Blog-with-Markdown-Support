"use client";
type ButtonCompFuncType = { btnLabe: string; btnHandler: () => void };
export default function ButtonCompFunc(btn: ButtonCompFuncType) {
  return <button onClick={btn.btnHandler}>{btn.btnLabe}</button>;
}
