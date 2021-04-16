console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let submit = document.getElementById("submit") 
let gif = document.getElementById("gif");
let gifSearch = document.getElementById("gifSearch");
const feedback = document.getElementById("feedback");
const apiKey = "ERKg8EG0v7HfCqkYn48dWdSpxI1XHiuQ";

submit.addEventListener("click", fetchGif);

function fetchGif() {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=ERKg8EG0v7HfCqkYn48dWdSpxI1XHiuQ&s=${gifSearch.value}`, 
       { mode: "cors"}
    )
        .then((response) => response.json())
        .then((response) => (gif.src = response.data.images.original.url))
        
        .catch((error) => {
            feedback.classList.add("show");
            feedback.textContent = `No result could be found for "${gifSearch.value}"!`;
            setTimeout(() => feedback.classList.remove("show"), 5000);
            }) 
           
        }
        