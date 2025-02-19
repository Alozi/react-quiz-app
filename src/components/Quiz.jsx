import { useCallback, useState } from "react";

import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";

export default function Quiz() {
  const [answeredState, setAnsweredState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  console.log(answeredState);

  const activeQuestionIndex =
    answeredState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectedAnswer = useCallback(
    function handleSelectedAnswer(selectedAnswer) {
      setAnsweredState("answered");
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnsweredState("correct");
        } else {
          setAnsweredState("wrong");
        }

        setTimeout(() => {
          setAnsweredState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer]
  );

  if (quizComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answeredState={answeredState}
        onSkipAnswer={handleSkipAnswer}
        onSelectAnswer={handleSelectedAnswer}
      />
    </div>
  );
}
