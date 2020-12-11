/* **************************************** 
			Open Redirect Function  
***************************************** */
function openRedirect(url) {
    window.location.href = url;
}

/* **************************************** 
		Modal Box for Contact Info  
***************************************** */
// Get the modal
var modal = document.getElementById("CntcModal");

// Get the button that opens the modal
var btn = document.getElementById("CntcMdlBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* **************************************** 
			Map Animated Modal  
***************************************** */   
// Get the modal
var mamModal = document.getElementById("mamModalId");

// Get the button that opens the modal
var btn = document.getElementById("mamBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("mamClose")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  mamModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  mamModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == mamModal) {
    mamModal.style.display = "none";
  }
}

/* ********************************************** 
		Responsive Topnav with Dropdown	 
*********************************************** */
//Get the button:
mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function topNavIconClk() {
  var x = document.getElementById("dbTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* ********************************************** 
		Lightbox (Modal Image Gallery) 	 
*********************************************** */
// Open the Modal
function openModalLightbox() {
  document.getElementById("theModalLightbox").style.display = "block";
}

// Close the Modal
function closeModalLightbox() {
  document.getElementById("theModalLightbox").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlidesLightbox(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlideLightbox(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("theSlidesLightbox");
  var dots = document.getElementsByClassName("lightboxModal");
  var captionText = document.getElementById("captionLightbox");
  
  if (n > slides.length) {slideIndex = 1}
  
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



  
const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('placeofbirth'))
        .split('=')[1]; 
      
    function alertCookieValue() {
      document.getElementById("place_of_birth").style.display = "block";
              document.getElementById("place_of_birth").innerHTML = cookieValue;
      
        
      }  
  
  
  // Google Map with Geocoding
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: { lat: 39.8283, lng: -98.5795 },
    });
    const geocoder = new google.maps.Geocoder();
      geocodeAddress(geocoder, map);
  }

function geocodeAddress(geocoder, resultsMap) {

  const address = document.cookie
        .split('; ')
        .find(row => row.startsWith('placeofbirth'))
        .split('=')[1];;
	
  geocoder.geocode({ address: address }, (results, status) => {
    if (status === "OK") {
      resultsMap.setCenter(results[0].geometry.location);
      new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location,
      });
    } else {
      alert(
        "Geocode was not successful for the following reason: " + status
      );
    }
  });
}
  

/* ********************************************** 
				Function MovieSearch	 
*********************************************** */
function MovieSearch() { 
  /* Get the movie name for the form */
  var moviename = document.getElementById("moviename").value;
  /* Build up the parameters for the URL */
  var api_key = "e5e088b9fdaef1249c47887b5e5eef39"; // add your TMDb API key // add your TMDb API key
  var language = "en-US";
  var page = "1";
  var include_adult = "false";
  var query = encodeURI(moviename);  // encode moviename since it might have blanks
  var myURL = "https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&language=" + language + "&query=" + query + "&page="  + page + "&include_adult=" + include_adult;
  
  /* Display the URL - toggle display between "none" and "block" to show or hide the URL on the webpage */
  document.getElementById("url1").style.display = "none";
  document.getElementById("url1").innerHTML = myURL;
  
  /* AJAX Method - Use GET since the parameters are in the URL */
  var myMethod = "GET";
  
  /* Make sure the document is ready */
  $(document).ready(function() {
    
	/* Perform AJAX call - Pass to it the Method (GET) and the URL*/
    $.ajax({
      method: myMethod,
      url: myURL
    })
    
	// AJAX complete - result is in msg variable
    .done(function(msg) {
      
	  // Loop through the first 25 results  
      for (i = 0; i < 24; i++) {
        // Display the result
		// Toggle display between "none" and "block" to show or hide the result 
        if (i < msg.results.length) {
          document.getElementById("title" + i).style.display = "block";
          document.getElementById("title" + i).innerHTML = "<h4>" + msg.results[i].title + "</h4>";
          
		  // Some movies don't have an overview
          if (msg.results[i].overview != "") {
            document.getElementById("overview" + i).style.display = "none";
            document.getElementById("overview" + i).innerHTML = "Movie overview:" + msg.results[i].overview;
          } else {  // No overview - display a message
            document.getElementById("overview" + i).style.display = "none";
            document.getElementById("overview" + i).innerHTML = "<br>No overview available.";
          }
          
		  document.getElementById("release_date" + i).style.display = "block";
          document.getElementById("release_date" + i).innerHTML ="<p>" + msg.results[i].release_date + "</p>";
          
		  // Some movies don't have a poster - null is returned 
          if (msg.results[i].poster_path != null) {
            document.getElementById("poster_path" + i).style.display = "block";
            document.getElementById("poster_path" + i).src = "https://image.tmdb.org/t/p/w342" + msg.results[i].poster_path;
		  } else {  // null move poster - don't display an empty value 
            document.getElementById("poster_path" + i).style.display = "block";
            document.getElementById("poster_path" + i).src = "assets/images/no_image_available_movie.jpg";       
          }
          
		  // Some movies don't have a backdrop_path - null is returned 
          if (msg.results[i].backdrop_path != null) {
            document.getElementById("backdrop_path" + i).style.display = "none";
            document.getElementById("backdrop_path" + i).src = "https://image.tmdb.org/t/p/w780" + msg.results[i].backdrop_path;
		  } else {  // null move poster - don't display an empty value
            document.getElementById("backdrop_path" + i).style.display = "none";
            document.getElementById("backdrop_path" + i).src = "";       
          }
          
          document.getElementById("popularity" + i).style.display = "none";
          document.getElementById("popularity" + i).innerHTML ="Movie popularity:" + msg.results[i].popularity;
          
          document.getElementById("movie_id" + i).style.display = "none";
          document.getElementById("movie_id" + i).innerHTML ="Movie id:" + msg.results[i].id;
          
          document.getElementById("adult_content" + i).style.display = "none";
          document.getElementById("adult_content" + i).innerHTML ="Movie adult content:" + msg.results[i].adult;
          
          document.getElementById("original_language" + i).style.display = "none";
          document.getElementById("original_language" + i).innerHTML ="Movie original_language:" + msg.results[i].original_language;
        
		} else {  // Less that 25 movies returned - blank out the rest of the values
          document.getElementById("poster_path" + i).src = "";       
          document.getElementById("poster_path" + i).style.display = "none";
          
          document.getElementById("backdrop_path" + i).src = "";       
          document.getElementById("backdrop_path" + i).style.display = "none";
          
          document.getElementById("title" + i).innerHTML =  "";
          document.getElementById("title" + i).style.display = "none";
          
          document.getElementById("overview" + i).innerHTML =  "";
          document.getElementById("overview" + i).style.display = "none";
          
          document.getElementById("release_date" + i).innerHTML =  "";
          document.getElementById("release_date" + i).style.display = "none";
          
          document.getElementById("popularity" + i).innerHTML =  "";
          document.getElementById("popularity" + i).style.display = "none";	
          
          document.getElementById("movie_id" + i).innerHTML =  "";
          document.getElementById("movie_id" + i).style.display = "none";
          
          document.getElementById("adult_content" + i).innerHTML =  "";
          document.getElementById("adult_content" + i).style.display = "none";
          
          document.getElementById("original_language" + i).innerHTML =  "";
          document.getElementById("original_language" + i).style.display = "none";
        }
      }
    });
  });
}
 
/* **********************************************
			Function MovieDtlCrdSearch
*********************************************** */
function MovieDtlCrdSearch() {
  //Grab the value from local storage for the movieid variable 
  var movieid = localStorage.getItem("movieIdPass");
  /* Build up the parameters for the URL */
  var txt
  var api_key = "e5e088b9fdaef1249c47887b5e5eef39"; // add your TMDb API key
  var language = "en-US";
  var page = "1";
  var include_adult = "false";
  var query = movieid;  /* encode moviename since it might have blanks */  
  var myURL = "https://api.themoviedb.org/3/movie/" + query + "?api_key=" + api_key + "&language=" + language + "&append_to_response=credits";
  
  /* Display the URL - toggle display between "none" and "block" to show or hide the URL on the webpage */
  document.getElementById("url1").style.display = "none";
  document.getElementById("url1").innerHTML = myURL;
  
  /* AJAX Method - Use GET since the parameters are in the URL */
  var myMethod = "GET";
  
  /* Make sure the document is ready */
  $(document).ready(function() { 
    
	/* Perform AJAX call - Pass to it the Method (GET) and the URL*/
    $.ajax({
      method: myMethod,
      url: myURL
	})
    
	/* AJAX complete - result is in msg */
    .done(function(msg) {
      
	  // Display the result
      // Toggle display between "none" and "block" to show or hide the result  
      document.getElementById("homepage").style.display = "none";
      document.getElementById("homepage").innerHTML = "<br><strong>Homepage</strong><br>" + msg.homepage;
      
      document.getElementById("movieid").style.display = "none";
      document.getElementById("movieid").innerHTML = "<br><strong>Id</strong><br>" + msg.id;
      
      document.getElementById("budget").style.display = "block";
      document.getElementById("budget").innerHTML = "<br><strong>Budget</strong><br>" + msg.budget;
      
      document.getElementById("imdb_id").style.display = "block";
      document.getElementById("imdb_id").innerHTML = "<p>Find out more about <a href='https://www.imdb.com/title/" + msg.imdb_id + "/' target='_blank'>" + msg.title + "</a> on IMDb.</p>";
      
      document.getElementById("original_language").style.display = "none";
      document.getElementById("original_language").innerHTML = "<br><strong>Original language</strong><br>" + msg.original_language;
      
      document.getElementById("original_title").style.display = "none";
      document.getElementById("original_title").innerHTML = "<br><strong>Original title</strong><br>" + msg.original_title;
      
      // Some movies don't have an overview 
      if (msg.overview != "") {
        document.getElementById("overview").style.display = "block";
		document.getElementById("overview").innerHTML = msg.overview;
      } else {  // No overview - display message
        document.getElementById("overview" + i).style.display = "block";
        document.getElementById("overview" + i).innerHTML = "No overview available.";
      }			
      
      document.getElementById("popularity").style.display = "none";
      document.getElementById("popularity").innerHTML = "<br><strong>Popularity</strong><br>" + msg.popularity;
      
      document.getElementById("release_date").style.display = "block";
      document.getElementById("release_date").innerHTML = "<strong>Release date</strong><br>" + msg.release_date;
      
      document.getElementById("revenue").style.display = "block";
      document.getElementById("revenue").innerHTML = "<br><strong>Revenue</strong><br>" + msg.revenue;
      
      document.getElementById("runtime").style.display = "block";
      document.getElementById("runtime").innerHTML = "<br><strong>Runtime</strong><br>" + msg.runtime + " min<br><br>"; 
      
      document.getElementById("status").style.display = "none";
      document.getElementById("status").innerHTML = "<br><strong>Status</strong><br>" + msg.status;
      
      document.getElementById("tagline").style.display = "none";
      document.getElementById("tagline").innerHTML = "<br><strong>Tagline</strong><br>" + msg.tagline;
      
      document.getElementById("title").style.display = "block";
      document.getElementById("title").innerHTML = "<h2>" + msg.title + "</h2>";
      
      // Get Movie Genres
      // Loop through the first 8 results  
      for (i = 0; i < 7; i++) {
      	/* Display the result */
      	if (i < msg.genres.length) {
      	  document.getElementById("genres" + i).style.display = "block";
      	  document.getElementById("genres" + i).innerHTML = "  " + msg.genres[i].name;
		} else {  /* Less that 7 movie genres returned - blank out the rest of the values */
      	  document.getElementById("genres" + i).innerHTML = "";
		  document.getElementById("genres" + i).style.display = "none";
        }
      }
      
      // Some movies don't have a poster - null is returned  
      if (msg.poster_path != null) {
        document.getElementById("poster_path").style.display = "block";
        document.getElementById("poster_path").src = "https://image.tmdb.org/t/p/w185" + msg.poster_path;
	  } else {  // null movie poster - don't display an empty value
        document.getElementById("poster_path").src = "assets/images/no_image_available_movie.jpg";       
        document.getElementById("poster_path").style.display = "block";
	  }
      
      // Get Movie Credits
      // Loop through the first 25 results
      for (i = 0; i < 24; i++) {
        /* Display the result */
        if (i < msg.credits.cast.length) { 
          document.getElementById("name" + i).style.display = "block";
          document.getElementById("name" + i).innerHTML = "<h4>" + msg.credits.cast[i].name + "</h4>";
          
          document.getElementById("character" + i).style.display = "block";
          document.getElementById("character" + i).innerHTML = "<p>" + msg.credits.cast[i].character + "</p>";
          
          // Some movies don't have a profile path - null is returned - use loop
          // example url for profilr image https://image.tmdb.org/t/p/w300/vgLTcq1nYcNmIr3yLxS7sk84sav.jpg
          if (msg.credits.cast[i].profile_path != null) {
          	document.getElementById("profilepath" + i).style.display = "block";
          	document.getElementById("profilepath" + i).src = "https://image.tmdb.org/t/p/w185" + msg.credits.cast[i].profile_path;
		  } else {  // null movie poster - don't display an empty value
          	document.getElementById("profilepath" + i).src = "assets/images/no_image_available_celeb.jpg";       
          	document.getElementById("profilepath" + i).style.display = "block";
		  }
          	
          document.getElementById("cast_id" + i).style.display = "none";
          document.getElementById("cast_id" + i).innerHTML = "Id: " + msg.credits.cast[i].cast_id; 
          
          document.getElementById("order" + i).style.display = "none";
          document.getElementById("order" + i).innerHTML = "Person order: " + msg.credits.cast[i].order;
          
          document.getElementById("credit_id" + i).style.display = "none";
          document.getElementById("credit_id" + i).innerHTML = "Credit id: " + msg.credits.cast[i].credit_id;
          
          document.getElementById("gender" + i).style.display = "none";
          document.getElementById("gender" + i).innerHTML = "Gender: " + msg.credits.cast[i].gender;
		  
        } else {  // Less that 5 movies returned - blank out the rest of the values
        document.getElementById("name" + i).innerHTML = "";
        document.getElementById("name" + i).style.display = "none";
        
        document.getElementById("character" + i).innerHTML = "";
        document.getElementById("character" + i).style.display = "none";
        
        document.getElementById("profilepath" + i).src = "";
        document.getElementById("profilepath" + i).style.display = "none";
        
        document.getElementById("cast_id" + i).innerHTML = "";
        document.getElementById("cast_id" + i).style.display = "none";
        
        document.getElementById("order" + i).innerHTML = "";
        document.getElementById("order" + i).style.display = "none";
        
        document.getElementById("credit_id" + i).innerHTML = "";
        document.getElementById("credit_id" + i).style.display = "none";
        
        document.getElementById("gender" + i).innerHTML = "";
        document.getElementById("gender" + i).style.display = "none";
        }
      }	 
    });
  }); 
}

/* **********************************************
				Function PersonSearch
*********************************************** */  
function PersonSearch() {
  /* Get the person name for the form */
  var personname = document.getElementById("personname").value;
  /* Build up the parameters for the URL */
  var api_key = "e5e088b9fdaef1249c47887b5e5eef39"; // add your TMDb API key
  var language = "en-US";
  var page = "1";
  var include_adult = "false";
  var query = encodeURI(personname);  /* encode moviename since it might have blanks */  
  var myURL = "https://api.themoviedb.org/3/search/person?api_key=" + api_key + "&language=" + language + "&query=" + query + "&page="  + page + "&include_adult=" + include_adult;
  
  /* Display the URL - toggle display between "none" and "block" to show or hide the URL on the webpage */
  document.getElementById("url1").style.display = "none";
  document.getElementById("url1").innerHTML = myURL;
  
  /* AJAX Method - Use GET since the parameters are in the URL */
  var myMethod = "GET";
  
  /* Make sure the document is ready */
  $(document).ready(function() { 
    
	/* Perform AJAX call - Pass to it the Method (GET) and the URL*/
    $.ajax({
      method: myMethod,
      url: myURL
    })
    
	/* AJAX complete - result is in msg */
    .done(function(msg) {
      
	  /* Loop through the first 25 results */
      for (i = 0; i < 24; i++) {
        
		// Display the result
        // Toggle display between "none" and "block" to show or hide the result
        if (i < msg.results.length) {
          /* Set the Title to Visible and set title to value in database */
          document.getElementById("name" + i).style.display = "block";
          document.getElementById("name" + i).innerHTML ="<h4>" + msg.results[i].name + "</h4>";
          
          // Some persons don't have a profile path - null is returned  
          if (msg.results[i].profile_path != null) {
            document.getElementById("profile_path" + i).style.display = "block";
            document.getElementById("profile_path" + i).src = "https://image.tmdb.org/t/p/w185" + msg.results[i].profile_path;
		  } else {  // null profile - don't display an empty value
            document.getElementById("profile_path" + i).style.display = "block";
            document.getElementById("profile_path" + i).src = "assets/images/no_image_available_celeb.jpg";       
          }
          
          document.getElementById("popularity" + i).style.display = "none";
          document.getElementById("popularity" + i).innerHTML = "Popularity: " + msg.results[i].popularity;
          
          document.getElementById("known_for_department" + i).style.display = "block";
          document.getElementById("known_for_department" + i).innerHTML = "<p>" + msg.results[i].known_for_department + "</strong>";
          
          document.getElementById("gender" + i).style.display = "none";
          document.getElementById("gender" + i).innerHTML = "Gender: " + msg.results[i].gender;
          
          document.getElementById("id" + i).style.display = "none";
          document.getElementById("id" + i).innerHTML = "Id: " + msg.results[i].id;
          
          document.getElementById("adult" + i).style.display = "none";
          document.getElementById("adult" + i).innerHTML = "Adult content: " + msg.results[i].adult;
		  
        } else {  /* Less that 24 movies returned - blank out the rest of the values */
        document.getElementById("name" + i).innerHTML = "";
        document.getElementById("name" + i).style.display = "none";
        
        document.getElementById("profile_path" + i).src = "";       
        document.getElementById("profile_path" + i).style.display = "none";
        
        document.getElementById("popularity" + i).style.display = "none";
        document.getElementById("popularity" + i).innerHTML = "";
        
        document.getElementById("known_for_department" + i).style.display = "none";
        document.getElementById("known_for_department" + i).innerHTML = "";
        
        document.getElementById("gender" + i).style.display = "none";
        document.getElementById("gender" + i).innerHTML = "";
        
        document.getElementById("id" + i).style.display = "none";
        document.getElementById("id" + i).innerHTML = "";
        
        document.getElementById("adult" + i).style.display = "none";
        document.getElementById("adult" + i).innerHTML = "";
        }
      }
    });
  });
}

/* ********************************************** 
		Function PersonDtlCrdSearch 	 
*********************************************** */
function PersonDtlCrdSearch() {
  //Grab the value from local storage for the personid variable 
  var personid = localStorage.getItem("personIdPass");
  /* Build up the parameters for the URL */
  var txt
  var api_key = "e5e088b9fdaef1249c47887b5e5eef39"; // add your TMDb API key
  var language = "en-US";
  var page = "1";
  var include_adult = "false";
  var query = personid;  /* encode the movie name to eliminate possible blank spaces */  
  var myURL = "https://api.themoviedb.org/3/person/" + query + "?api_key=" + api_key + "&language=" + language + "&append_to_response=images,movie_credits";
  
  /* Display the URL - toggle display between "none" and "block" to show or hide the URL on the webpage */
  document.getElementById("url1").style.display = "none";
  document.getElementById("url1").innerHTML = myURL;
  
  /* AJAX Get Method */
  var myMethod = "GET";
  /* Make sure the document is ready */
  $(document).ready(function() { 
    
	/* Perform AJAX call and pass to it the Method (GET) and the URL */
    $.ajax({
      method: myMethod,
      url: myURL
    })
	
    /* AJAX complete - result is in msg variable */
    .done(function(msg) {
      
	  // Display the result
      // Toggle display between "none" and "block" to show or hide the result	
      document.getElementById("name").style.display = "block";
      document.getElementById("name").innerHTML = "<h2>" + msg.name + "</h2>";
	  
      document.getElementById("known_for_department").style.display = "block";
      document.getElementById("known_for_department").innerHTML = "<strong>Known for</strong><br>" + msg.known_for_department;
	  
      document.getElementById("birthday").style.display = "block";
      document.getElementById("birthday").innerHTML = "<br><strong>Birthday</strong><br>" + msg.birthday;
	  
      document.getElementById("birthday").style.display = "block";
      document.getElementById("birthday").innerHTML = "<br><strong>Birthday</strong><br>" + msg.birthday;
	  
      // Some persons don't have a deathday - null is returned  
      if (msg.deathday != null) {
        document.getElementById("deathday").style.display = "block";
        document.getElementById("deathday").innerHTML = "<br><strong>Death</strong><br>" + msg.deathday;
      } else {  // null - don't display an empty value 
        document.getElementById("deathday").innerHTML = "";       
        document.getElementById("deathday").style.display = "none";
      }
	  
      document.getElementById("id").style.display = "none";
      document.getElementById("id").innerHTML = "<br><strong>Id</strong><br>" + msg.id;
	  
      document.getElementById("popularity").style.display = "none";
      document.getElementById("popularity").innerHTML = "<br><strong>Popularity</strong><br>" + msg.popularity;
	  
      document.getElementById("place_of_birth").style.display = "block";
      document.getElementById("place_of_birth").innerHTML = "<br><strong>Place of birth</strong><br>" + msg.place_of_birth;
	  document.cookie = "placeofbirth=" + msg.place_of_birth;
	  
      document.getElementById("gender").style.display = "none";
      document.getElementById("gender").innerHTML = "<br><strong>Gender</strong><br>" + msg.gender;
	  
      document.getElementById("imdb_id").style.display = "block";
      document.getElementById("imdb_id").innerHTML = "<p>Find out more about <a href='https://www.imdb.com/name/" + msg.imdb_id + "/' target='_blank'>" + msg.name + "</a> on IMDb.</p>"; 
	  
      // Some persons don't have a biography eg San Chin
      if (msg.biography != "") {
        document.getElementById("biography").style.display = "block";
        document.getElementById("biography").innerHTML = "<h3>Biography</h3>" + msg.biography;
      } else { // NO biography - out put message 
        document.getElementById("biography").style.display = "block";
        document.getElementById("biography").innerHTML = "<br>No biography available.";
      }
	  
      /* Some persons don't have a profile path - null is returned */
      if (msg.profile_path != null) {
        document.getElementById("profile_path").style.display = "block";
        document.getElementById("profile_path").src = "https://image.tmdb.org/t/p/w185" + msg.profile_path;
      } else {  // null profile path - don't display an empty value
	    document.getElementById("profile_path").style.display = "block";
        document.getElementById("profile_path").src = "assets/images/no_image_available_celeb.jpg";       
      }
	  
      // Get person credits
      // Loop through the first 25 results
      for (i = 0; i < 24; i++) {
        if (i < msg.movie_credits.cast.length) {
          // Set the Title to Visible and set title to value in database //
          document.getElementById("character" + i).style.display = "block";
          document.getElementById("character" + i).innerHTML = "<p>" + msg.movie_credits.cast[i].character + "</p>";
		  
          document.getElementById("title" + i).style.display = "block";
          document.getElementById("title" + i).innerHTML = "<h4>" + msg.movie_credits.cast[i].title + "</h4>";
		  
          document.getElementById("popularity" + i).style.display = "none";
          document.getElementById("popularity" + i).innerHTML ="Movie popularity: " + msg.movie_credits.cast[i].popularity;
		  
          document.getElementById("release_date" + i).style.display = "block";
          document.getElementById("release_date" + i).innerHTML = "<p>" + msg.movie_credits.cast[i].release_date + "</p>";
		  
          document.getElementById("adult" + i).style.display = "none";
          document.getElementById("adult" + i).innerHTML ="Movie adult content: " + msg.movie_credits.cast[i].original_title;
		  
          document.getElementById("id" + i).style.display = "none";
          document.getElementById("id" + i).innerHTML ="Movie id:" + msg.movie_credits.cast[i].id;
		  
          // Some movies don't have an overview
          if (msg.movie_credits.cast[i].overview != "") {
            document.getElementById("overview" + i).style.display = "none";
            document.getElementById("overview" + i).innerHTML ="Movie overview:" + msg.movie_credits.cast[i].overview;
          } else {  // NO overview - out put message
            document.getElementById("overview").style.display = "block";
            document.getElementById("overview").innerHTML = "<br>No overview available.";
          }
		  
          // Some movies don't have a poster - null is returned //
          if (msg.movie_credits.cast[i].poster_path != null) {
            document.getElementById("poster_path" + i).style.display = "block";
            document.getElementById("poster_path" + i).src = "https://image.tmdb.org/t/p/w185" + msg.movie_credits.cast[i].poster_path;
		  } else {  // null movie poster - don't display an empty value //
            document.getElementById("poster_path" + i).style.display = "block";
            document.getElementById("poster_path" + i).src = "assets/images/no_image_available_movie.jpg";       
          }
		  
          // Some movies don't have a backdrop  - null is returned //
          if (msg.movie_credits.cast[i].backdrop_path != null) {
            document.getElementById("backdrop_path" + i).style.display = "none";
            document.getElementById("backdrop_path" + i).src = "https://image.tmdb.org/t/p/w185" + msg.movie_credits.cast[i].backdrop_path;
		  } else {  // null movie backdrop  - don't display an empty value //
            document.getElementById("backdrop_path" + i).style.display = "none";
            document.getElementById("backdrop_path" + i).src = "";       
          }
        } else {  // Less that 24 movies returned - blank out the rest of the values //
        document.getElementById("character" + i).style.display = "none";
        document.getElementById("character" + i).innerHTML = "";
		
        document.getElementById("title" + i).style.display = "none";
        document.getElementById("title" + i).innerHTML = "";
		
        document.getElementById("popularity" + i).style.display = "none";
        document.getElementById("popularity" + i).innerHTML = "";
		
        document.getElementById("adult" + i).style.display = "none";
        document.getElementById("adult" + i).innerHTML = "";
		
        document.getElementById("id" + i).style.display = "none";
        document.getElementById("id" + i).innerHTML = "";
		
        document.getElementById("release_date" + i).style.display = "none";
        document.getElementById("release_date" + i).innerHTML = "";
		
        document.getElementById("overview" + i).style.display = "none";					
        document.getElementById("overview" + i).innerHTML = "";
		
        document.getElementById("posterpath" + i).style.display = "none";
        document.getElementById("posterpath" + i).src = "";
		
        document.getElementById("backdrop_path" + i).style.display = "none"
        document.getElementById("backdrop_path" + i).src = ""; 
        }
      }
    });
  });
}












