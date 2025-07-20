// Element references
const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");

// Handle button click
checkButton.addEventListener("click", () => {
  const userInput = textInput.value.trim();
  if (!userInput){
    alert("Please input a value")
    return;
  }
  displayPalindromeResult(userInput);
});

// Core logic to check for palindrome
function displayPalindromeResult(input) {
  const normalizedInput = normalizeString(input);
  const reverseInput = reverseString(normalizedInput);
  const isPalindrome = (normalizedInput === reverseInput);

  resultText.innerText =`${input} ${isPalindrome ? "is" : "is not"} a palindrome.`;
  resultText.style.display = "block";
}

// Normalize input (lowercase, remove non-alphanumerics)
function normalizeString(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "")
}

// Reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}


