// on document load make a request to the unsplash API
// remove unwanted images
// pick random image
// display random image on website
// can replace main header or put it under my main section, create a new div.
// use object fit to style photo - CSS
// google, stack overflow, previous projects


console.log("Musty");
document.addEventListener("DOMContentLoaded", function () {
  const apiURL =
    "https://api.unsplash.com/search/photos/?client_id=Z51eg4jqHrAftoboipjvStieKcYNbFjmMAeOiq19ptg&query=kobe%20bryant";

  fetch(`${apiURL}`)
    .then((response) => {
      return response.json();
    })
    .then((responseJSON) => {
      console.log(responseJSON);
    });
});
