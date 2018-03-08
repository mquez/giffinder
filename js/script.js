// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
  
  // WRITE A CLICK HANDLER HERE
  /*
    1. click handler function
    2. get the typed input from the search input box
    3. call the functions below!
  */
  $("button").click(function() {
    var searchTerm = $("input").val();
    callGiphyAPIWithSearchTerm(searchTerm);
  })
});
  
  function giphyURLWithSearchTerm(searchTerm) {
      // write a function that will return a url for the giphy API with
      // the searchTerm provided in the parameters
   var firstPart = "api.giphy.com/v1/stickers/search?";
   var secondPart = "q=city&api_key=dc6zaTOxFJmzC";
   var newURL = firstPart + secondPart;
   
   return newURL;
  }

  function appendImageToGallery(srcURL) {
      // write a function that will append an <img> to the div with class="gallery"
      // using the URL provided in the parameters
  }

  function callGiphyAPIWithSearchTerm(searchTerm) {
      // use $.ajax to call the giphy api with the given search term from the parameters.
      // get the first image url from the ajax response
      // use appendImageToGallery to put the image onto the screen
  }
});
