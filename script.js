let timeLeft = 180; // 3-minute timer (180 seconds)
const timerElement = document.getElementById('timer');
const submitButton = document.getElementById('submitBtn');

// Timer countdown function
const timerInterval = setInterval(function() {
  if (timeLeft <= 0) {
    clearInterval(timerInterval);  // Stop the timer when time runs out
    document.getElementById("quizForm").submit();  // Auto-submit the form
    alert("Time's up! The quiz has been submitted."); // Alert to let user know
  } else {
    timerElement.textContent = 'Time Left: ' + timeLeft + ' seconds';
  }
  timeLeft--;
}, 1000);

// This function will be triggered when the quiz is submitted (manually or automatically)
document.getElementById("quizForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let score = 0;
  let correctAnswers = 0;
  let incorrectAnswers = 0;

  // Square Numbers Section
  if (document.querySelector('input[name="sq1"]:checked')?.value === "1") { score++; correctAnswers++; } else { incorrectAnswers++; }
  if (document.querySelector('input[name="sq2"]:checked')?.value === "2") { score++; correctAnswers++; } else { incorrectAnswers++; }
  if (document.querySelector('input[name="sq3"]:checked')?.value === "2") { score++; correctAnswers++; } else { incorrectAnswers++; }
  if (document.querySelector('input[name="sq4"]:checked')?.value === "2") { score++; correctAnswers++; } else { incorrectAnswers++; }
  if (document.querySelector('input[name="sq5"]:checked')?.value === "2") { score++; correctAnswers++; } else { incorrectAnswers++; }
  if (document.querySelector('input[name="sq6"]:checked')?.value === "1") { score++; correctAnswers++; } else { incorrectAnswers++; }
  if (document.querySelector('input[name="sq7"]:checked')?.value === "1") { score++; correctAnswers++; } else { incorrectAnswers++; }
  if (document.querySelector('input[name="sq8"]:checked')?.value === "1") { score++; correctAnswers++; } else { incorrectAnswers++; }
  if (document.querySelector('input[name="sq9"]:checked')?.value === "2") { score++; correctAnswers++; } else { incorrectAnswers++; }
  if (document.querySelector('input[name="sq10"]:checked')?.value === "1") { score++; correctAnswers++; } else { incorrectAnswers++; }

  // Sequence of Shapes Section
  if (document.querySelector('input[name="shape1"]:checked')?.value === "1") { score++; correctAnswers++; } else { incorrectAnswers++; }
  if (document.querySelector('input[name="shape2"]:checked')?.value === "1") { score++; correctAnswers++; } else { incorrectAnswers++; }
  if (document.querySelector('input[name="shape3"]:checked')?.value === "1") { score++; correctAnswers++; } else { incorrectAnswers++; }
  if (document.querySelector('input[name="shape4"]:checked')?.value === "1") { score++; correctAnswers++; } else { incorrectAnswers++; }
  if (document.querySelector('input[name="shape5"]:checked')?.value === "1") { score++; correctAnswers++; } else { incorrectAnswers++; }

  // Algebra Section
  if (document.querySelector('input[name="algebra1"]:checked')?.value === "1") { score++; correctAnswers++; } else { incorrectAnswers++; }
  if (document.querySelector('input[name="algebra2"]:checked')?.value === "1") { score++; correctAnswers++; } else { incorrectAnswers++; }
  if (document.querySelector('input[name="algebra3"]:checked')?.value === "1") { score++; correctAnswers++; } else { incorrectAnswers++; }
  if (document.querySelector('input[name="algebra4"]:checked')?.value === "1") { score++; correctAnswers++; } else { incorrectAnswers++; }
  if (document.querySelector('input[name="algebra5"]:checked')?.value === "1") { score++; correctAnswers++; } else { incorrectAnswers++; }

  // Calculate percentage
  const totalQuestions = 25;
  const percentage = ((score / totalQuestions) * 100).toFixed(2);

  // Display results
  document.getElementById("score").textContent = `Your score: ${score} out of ${totalQuestions}`;
  document.getElementById("percentage").textContent = `Your percentage: ${percentage}%`;
  document.getElementById("correctAnswers").textContent = `Correct answers: ${correctAnswers}`;
  document.getElementById("incorrectAnswers").textContent = `Incorrect answers: ${incorrectAnswers}`;
  document.getElementById("result").classList.remove("hidden");
});
