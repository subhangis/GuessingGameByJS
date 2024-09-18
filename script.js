document.addEventListener('DOMContentLoaded', () => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
  
    const guessInput = document.getElementById('guess-input');
    const submitBtn = document.getElementById('submit-btn');
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');
    const restartBtn = document.getElementById('restart-btn');
  
    submitBtn.addEventListener('click', () => {
      const userGuess = parseInt(guessInput.value);
      attempts++;
  
      if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Please enter a number between 1 and 100.";
        return;
      }
  
      if (userGuess === randomNumber) {
        feedback.textContent = `Congratulations! You've guessed the number ${randomNumber} correctly in ${attempts} attempts!`;
        submitBtn.disabled = true;
        restartBtn.classList.remove('hidden');
      } else if (userGuess > randomNumber) {
        feedback.textContent = "Too high! Try again.";
      } else {
        feedback.textContent = "Too low! Try again.";
      }
  
      attemptsDisplay.textContent = attempts;
    });
  
    restartBtn.addEventListener('click', () => {
      randomNumber = Math.floor(Math.random() * 100) + 1;
      attempts = 0;
      feedback.textContent = '';
      attemptsDisplay.textContent = attempts;
      submitBtn.disabled = false;
      guessInput.value = '';
      restartBtn.classList.add('hidden');
    });
  });
  