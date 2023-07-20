// const displayQuote = () => {
//     fetch('https://api.kanye.rest/')
//         .then(res => res.json())
//         .then(data => displayQuote2(data))
// }

// const displayQuote2 = quote => {
//     const blockQuote = document.getElementById('quote-click');
//     blockQuote.innerText = quote.quote;
// }



const displayQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote2(data))
}
const displayQuote2 = quote => {
    const blockQuote = document.getElementById('quote-click');
    blockQuote.innerText = quote.quote;
}