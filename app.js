// document.querySelector(".get-jokes").addEventListener("click",function(e)
// {
//  fetch("https://sv443.net/jokeapi/v2")
//  .then(response => console.log(response))
// e.preventDefault()
// })

const box = document.getElementById("box");
const p = document.createElement("P");
 
const url = "https://api.chucknorris.io/jokes/random";
const newimage = document.createElement("img")
function quotegen(){
  fetch(url)
    .then(response => {
      return response.json()
    })
    .then(data => {console.log(data);
      console.log(data.icon_url);
      // Work with JSON data here
    p.innerHTML = data.value;
    box.appendChild(p);
    newimage.setAttribute("src",data.icon_url)
    box.appendChild(newimage)
    })
}
