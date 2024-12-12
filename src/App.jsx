import React, { useState } from 'react';
import './App.css';
import questions from './questions';
import Result from './components/Result';
import QuestionBox from './components/QuestionBox';
import Darkbutton from './components/Darkbutton';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const optionClick = (isCorrect) => {
    console.log('Option clicked:', isCorrect);
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
  };

  return (
    <div>
      <h3>Score: {score}</h3>
      {currentQuestion < questions.length ? (
        <>
          <Darkbutton />
          <QuestionBox
            questions={questions}
            query={currentQuestion}
            selectchoice={optionClick}
          />
        </>
      ) : (
        <Result
          score={score}
          len={questions.length}
          restartQuiz={restartQuiz}
        />
      )}
    </div>
  );
}

export default App;
