import React, { useState } from 'react';
import QuestionChoice from './QuestionChoice';

const QuestionBox = ({ questions, query, selectchoice }) => {
  const [highlighted, setHighlighted] = useState(false);

  const highlightHandler = () => {
    setHighlighted(true);
  };

  const removeHighlightHandler = () => {
    setHighlighted(false);
  };

  return (
    <>
      <div>
        <h1>Kalvium Quiz</h1>
      </div>
      <div className="questionbox">
        <h1>
          Question: {query + 1} out of {questions.length}
        </h1>
        {/* Change color of this text based on highlight */}
        <h2 style={{ color: highlighted ? 'red' : 'blue' }}>
          {questions[query].text}
        </h2>

        <QuestionChoice
          options={questions[query].options}
          selectchoice={selectchoice}
        />

        <button className="btn btn-slide-1" onClick={highlightHandler}>
          Highlight
        </button>
        <button className="btn btn-slide-2" onClick={removeHighlightHandler}>
          Remove Highlight
        </button>
      </div>
    </>
  );
};

export default QuestionBox;
