# Quiz App Assignment

## Overview

This project is a simple quiz application with basic functionality already implemented. The goal of this assignment is to help you practice working with React by completing the missing functionality in the app.

You are provided with a base project, but certain features are incomplete. Your task is to implement the required features within the provided files. Follow the instructions given below.

---

## Task Breakdown

### Task 1: Handle Option Clicks

- **File:** `App.jsx`
- **Instructions:**
  - Write the logic inside the `optionClick` function. When the user clicks an option:
    - If the option is correct, increase the score by 1.
    - Move to the next question.

---

### Task 2: Implement Restart Logic

- **File:** `App.jsx`
- **Instructions:**
  - Write logic in the `restartQuiz` function that resets the quiz:
    - Reset the score to 0.
    - Reset the current question to the first one.

---

### Task 3: Highlight the Question Text

- **File:** `components/QuestionBox.jsx`
- **Instructions:**
  - Implement logic to highlight the question text when the user clicks the "Highlight" button:
    - When highlighted, the text should be red.
    - When "Remove Highlight" is clicked, the text should turn blue.

---

### Task 4: Implement Dark Mode

- **File:** `components/Darkbutton.jsx`
- **Instructions:**
  - Write logic in the `toggleDarkMode` function:
    - When dark mode is active, change the `background` to black and the text color to white.
    - When light mode is active, change the `background` to white and the text color to black.

---

### Task 5: Display Custom Message Based on Score

- **File:** `components/Result.jsx`
- **Instructions:**
  - Display the score with the total number of questions .
  - Write logic to display a custom message based on the user's score:
    - If the score is more than 50% of the total questions, display "Great job!"
    - If the score is 50% or less, display "Better luck next time!"

---

## Time Limit

- This milestone should be completed within **1 hour**.
- You will be required to compress and upload the file, requesting to keep an eye on the timer as well.
