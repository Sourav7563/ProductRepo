import React from "react";
import { Question } from "./Question";

export function Content() {
  function getResults(event) {
    event.preventDefault();
    let marks = 0;
    const form = event.target;

    const checkAnswer = (questionName, correctAnswer) => {
      const selectedAnswer = form.querySelector(
        `input[name="${questionName}"]:checked`
      ).value;
      if (selectedAnswer === correctAnswer) {
        marks++;
      }
    };

    checkAnswer("Question1", "OOPS");
    checkAnswer("Question2", "QL");
    checkAnswer("Question3", "PL");
    checkAnswer("Question4", "ML");
    checkAnswer("Question5", "Styling");
    alert(marks);
  }
  return (
    <form onSubmit={getResults}>
      <div>
        <Question
          q1="What is Java?"
          name="Question1"
          op1="OOPS"
          op2="ORPS"
          op3="OTPS"
          op4="OIPS"
        />
        <Question
          q1="What is SQL?"
          name="Question2"
          op1="QL"
          op2="ML"
          op3="TL"
          op4="DL"
        />
        <Question
          q1="What is Python?"
          name="Question3"
          op1="SL"
          op2="PL"
          op3="DL"
          op4="ML"
        />
        <Question
          q1="What is HTML?"
          name="Question4"
          op1="PL"
          op2="TL"
          op3="ML"
          op4="SL"
        />
        <Question
          q1="CSS used for____?"
          name="Question5"
          op1="Styling"
          op2="Programming"
          op3="ALL"
          op4="NONE"
        />
      </div>
      <br />
      <input type="submit" value="SUBMIT" />
    </form>
  );
}
