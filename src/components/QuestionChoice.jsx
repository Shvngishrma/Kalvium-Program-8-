import React from 'react';

const QuestionChoice = ({ options, selectchoice }) => {
  return (
    <div className="choice">
      {options &&
        options.map(({ id, text, isCorrect }) => (
          <div key={id}>
            <button
              className="options btn-9"
              onClick={() => selectchoice(isCorrect)}
            >
              {text}
            </button>
          </div>
        ))}
    </div>
  );
};

export default QuestionChoice;
