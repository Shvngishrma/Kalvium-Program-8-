import React, { useState } from 'react';
import './App.css';
import questions from './questions';
import Result from './components/Result';
import QuestionBox from './components/QuestionBox';
import Darkbutton from './components/Darkbutton';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

<<<<<<< HEAD
  // Handle option click and progress to next question
  const optionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1); // Increment score if the answer is correct
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1); // Move to the next question
    } else {
      setShowResult(true); // Show the result after the last question
    }
  };

  // Restart the quiz
  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
=======
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
>>>>>>> f3dd48d07f32b2cdec588d90401761ae00e0e6c8
  };

  return (
    <div>
      <h3>Score: {score}</h3>
      {showResult ? (
        <Result score={score} len={questions.length} restartQuiz={restartQuiz} />
      ) : (
        <>
          <Darkbutton />
          <QuestionBox
            questions={questions}
            query={currentQuestion}
            selectchoice={optionClick}
          />
        </>
      )}
    </div>
  );
}

export default App;