
let button =document.getElementById('button');

let search = document.getElementById('search');

button.addEventListener("click", function (){

  let bar = "https://recipepuppyproxy.herokuapp.com/api/?q=" + search;

  fetch(bar)
    .then(

   // The promise returns a response from the server.
   function(response) {
     // We process the response accordingly.
     if (response.status !== 200) {
       console.log(response.status);
       return;
     }
     response.json().then(function(data) {
       displayfunction(data);
       console.log("Here is the data:", data.results);
     });
   }
 )
 .catch(function(err) {
   console.log("Fetch Error :-S", err);
 });
 });

let display1 = document.querySelector('.container');


 function displayfunction(data) {

for (var i = 0; i < data.results.length; i++) {

  let template = '';

    template += `
    <article>
    <div class="Recipes">
    <img src="${data.results[i].thumbnail}">
    <h4>${data.results[i].title}</h4>
 <a href="${data.results[i].href}">Link To Recipe</a>
    </div>
    </article>
    `;
    display1.innerHTML += template;

}

}
