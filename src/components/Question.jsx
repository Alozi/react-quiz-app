import QuestionTimer from "../components/QuestionTimer";
import Answers from "../components/Answers";

export default function Question({
  questionText,
  answers,
  selectedAnswer,
  answeredState,
  onSkipAnswer,
  onSelectAnswer
}) {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answeredState={answeredState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
