//this array of objects contain the quotes and each authors
const quotes = [
    {
        quote: "Faith is not belief without proof, but trust without reservation.",
        author: "D. Elton Trueblood"
    },
    {
        quote: "I couldn't wait for success, so I went ahead without it.",
        author: "Jonathan Winters"
    },
    {
        quote: "There's an important difference between giving up and letting go.",
        author: "Jessica Hatchigan"
    },
    {
        quote: "Why not go out on a limb? Isn't that where the fruit is?",
        author: "Frank Scully"
    },
    {
        quote: "Every problem has a gift for you in its hands.",
        author: "Richard Bach"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: " Mahatma Gandhi"
    }

];

const newQuote = document.getElementById('newQuoteBtn');
newQuote.addEventListener('click', newQuoteClick);

function newQuoteClick(){
    //generate random number btween 0 and 5
    let i = Math.floor(Math.random() * quotes.length);
    const quoteInput = document.getElementById('quote');
    const authorInput = document.getElementById('author');
    //give text box empty string as a default value
    quoteInput.value = '';
    authorInput.value = '';
    //give text box random values from the quotes array
    quoteInput.value += quotes[i].quote;
    authorInput.value += quotes[i].author;
}
