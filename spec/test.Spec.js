import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../src/App.jsx';
import Darkbutton from '../src/components/Darkbutton.jsx';
import QuestionBox from '../src/components/QuestionBox.jsx';
import Result from '../src/components/Result.jsx';

const mockQuestions = [
  {
    id: 1,
    text: 'What is the capital of France?',
    options: [
      { id: 1, text: 'Berlin', isCorrect: false },
      { id: 2, text: 'Paris', isCorrect: true },
      { id: 3, text: 'Madrid', isCorrect: false },
      { id: 4, text: 'Lisbon', isCorrect: false },
    ],
  },
  {
    id: 2,
    text: 'Which planet is known as the Red Planet?',
    options: [
      { id: 1, text: 'Earth', isCorrect: false },
      { id: 2, text: 'Mars', isCorrect: true },
      { id: 3, text: 'Jupiter', isCorrect: false },
      { id: 4, text: 'Saturn', isCorrect: false },
    ],
  },
];

describe('Quiz App', () => {
  it('should move to the next question when the correct answer is clicked', () => {
    const { getByText, queryByText } = render(<App />);

    fireEvent.click(getByText('user interface framework'));

    expect(queryByText('What is ReactJS?')).toBeNull();

    expect(
      getByText('React.js is written in which of the following language?')
    ).toBeTruthy();
  });

  it('should reset the quiz when the "Restart Quiz" button is clicked after completing all questions', () => {
    const { getByText } = render(<App />);

    fireEvent.click(getByText('user interface framework'));
    fireEvent.click(getByText('JavaScript'));
    fireEvent.click(getByText('Internal storage of the component.'));
    fireEvent.click(
      getByText('Pair of current state and function updating it')
    );
    fireEvent.click(getByText('1'));

    expect(getByText(/Your Score: 5 \/ 5/i)).toBeTruthy();

    fireEvent.click(getByText('Restart Quiz'));

    expect(getByText(/Score: 0/i)).toBeTruthy();
  });

  it('should highlight the question text when the highlight button is clicked', () => {
    const { getByText, container } = render(
      <QuestionBox
        questions={mockQuestions}
        query={0}
        selectchoice={() => {}}
      />
    );
    fireEvent.click(getByText('Highlight'));
    expect(container.querySelector('h2').style.color).toBe('red');
  });

  it('should toggle dark mode when the dark mode button is clicked', () => {
    const { getByLabelText } = render(<Darkbutton />);
    const toggle = getByLabelText('Toggle Dark Mode');

    fireEvent.click(toggle);

    expect(document.body.style.background).toBe('rgb(24, 24, 24)');
    expect(document.body.style.color).toBe('rgb(240, 240, 240)');

    fireEvent.click(toggle);

    expect(document.body.style.background).toBe('rgb(240, 240, 240)');
    expect(document.body.style.color).toBe('rgb(0, 0, 0)');
  });

  it('should display "Great job!" if score is more than 50%', () => {
    const { getByText } = render(
      <Result score={2} len={3} restartQuiz={() => {}} />
    );
    expect(getByText('Great job!')).toBeTruthy();
  });
});
