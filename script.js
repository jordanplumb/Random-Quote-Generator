// A collection of Agile Quotes.

const quotes = [
{
  "quote": "Scrum is like your mother in law, it points out ALL of your faults!",
  "source": "Ken Schwaber",
  "citation": "Google",
  "year": 2016,

},
{
  "quote": "Any Scrum without working product at the end is failed Scrum!",
  "source": "Ken Sutherland",
  "citation": "Google",
  "year": 2014,

},
{
  "quote": "It's not a testing problem. It's usually a Design Problem manifesting as a testing problem, usually.",
  "source": "Kent Beck",
  "citation": "Google",
  "year": 1999,

},
{
  "quote": "Lack of clarity is always the number one time waster!",
  "source": "Brian Tracy",
  "citation": "Google",
  "year": 2000,

},
{
  "quote": "You were the chosen one! You were supposed to be the servant leader. But now all we have is a Gantt Chart of Index Cards!",
  "source": "An Agile Coach",
  "citation": "Overheard in a group of Agile Coaches with their quarterly intake of hatted-role Scrum Masters",
  "year": 2020,

},
]

// A function to generate a single Agile Quote with it's properties from the quotes array.

function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];  
}


// A function to generate a Random Quote and push this information to the DOM.

function printQuote() {
  const randomQuote = getRandomQuote();
  let html = 
  `<p class="quote">${randomQuote.quote}</p> 
  <p class="source">${randomQuote.source}`;

  if (randomQuote.citation) {
  html += `<span class="citation">${randomQuote.citation}</span>`
  }

  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`
    }

  if (randomQuote.tags) {
      html += `<span class="tags">${randomQuote.tags}</span>`
      }
  
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html; 
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);