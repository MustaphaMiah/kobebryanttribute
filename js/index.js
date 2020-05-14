// on document load make a request to the unsplash API
// remove unwanted images
// pick random image
// display random image on website
// can replace main header or put it under my main section, create a new div.
// use object fit to style photo - CSS
// TOOLKIT: google, stack overflow, previous projects

// CLUES: Use dot notation. All i need is a place holder in HTML.
// focus on manipulating what images are returned from the GET request
// use the id to remove pictures I don't want

console.log("Musty");
document.addEventListener("DOMContentLoaded", function () {
  const apiURL =
    "https://api.unsplash.com/search/photos/?client_id=Z51eg4jqHrAftoboipjvStieKcYNbFjmMAeOiq19ptg&query=kobe_bryant&per_page=20";
  const unwantedPhotos = [
    "BFx977n6xdw",
    "D86EPYMO6iE",
    "A5ZIwaPGevM",
    "56XYfmP-NGs",
  ];

  fetch(`${apiURL}`)
    .then((response) => {
      return response.json();
    })
    .then((responseJSON) => {
      const wantedPhotos = responseJSON.results.filter(function (item) {
        return unwantedPhotos.indexOf(item.id) === -1;
      });
      console.log(wantedPhotos);
      const randomImage =
        wantedPhotos[Math.floor(Math.random() * wantedPhotos.length)];
      console.log(randomImage);
      console.log(randomImage.urls.raw);
      document.getElementById("myImg").src = randomImage.urls.raw;
    });
});
