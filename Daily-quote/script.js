

const api_url = "https://api.quotable.io/random";

const AuthorName = document.getElementById('authorName')
const Quote = document.getElementById('Quote')

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data)
    AuthorName.innerHTML = data.author;
    Quote.innerHTML = data.content;
}
getQuote(api_url)

function tweet(){
    window.open('https://twitter.com/intent/tweet?text='+ Quote.innerHTML +" " +"------by " +  AuthorName.innerHTML, "Tweet window", "width=600 height=300");
}

