import React from "react";
import "./Question.css";

export function Question(Props) {
  return (
    <div id="g1">
      <h1>{Props.q1}</h1>
      <input type="radio" name={Props.name} value={Props.op1} />
      {Props.op1}
      <input type="radio" name={Props.name} value={Props.op2} />
      {Props.op2}
      <input type="radio" name={Props.name} value={Props.op3} />
      {Props.op3}
      <input type="radio" name={Props.name} value={Props.op4} />
      {Props.op4}
    </div>
  );
}
