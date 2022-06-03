const quote = document.getElementById("quote");
const jokeBtn = document.getElementById("quoteBtn");
const cite = document.querySelector(".blockquote-footer");
jokeBtn.addEventListener("click", generateQuote);

// Using Async/Await Method
async function generateQuote() {
  const res = await fetch("https://api.quotable.io/random");
  const data = await res.json();

  // Update DOM elements
  quote.innerHTML = data.content;
  cite.textContent = data.author;
}

generateQuote();

//
