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

console.log("connected to JavaScript");
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
      const randomImage =
        wantedPhotos[Math.floor(Math.random() * wantedPhotos.length)];
      document
        .getElementById("myImg")
        .setAttribute("data-src", randomImage.urls.raw);
    });

  // Get our lazy-loaded images
  const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  // Do this only if IntersectionObserver is supported
  if ("IntersectionObserver" in window) {
    // Create new observer object
    let lazyImageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      // Loop through IntersectionObserverEntry objects
      entries.forEach(function (entry) {
        // Do these if the target intersects with the root
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    // Loop through and observe each image
    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
});
