

 

// Open Redirect Function
function openRedirect(url) {
    window.location.href = url;
}


/* ***************************** 
Create A Modal box for contact info  
****************************** */

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


/* *************************************** 
  Create A Responsive Topnav with Dropdown  
**************************************** */

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


/* *************************************** 
  Create A Responsive Topnav with Dropdown  
**************************************** */

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



/* *********************************************
***				Slideshow Gallery			***
********************************************** */

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("thumnbailtransparency");
  var captionText = document.getElementById("caption");
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


/*
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});
*/

 
//  function MovieSearch 
   
/* Example URL for AJAX Call 
var myURL = "https://api.themoviedb.org/3/search/movie?api_key=1c3df5b73705f054ad8dfe8bc03f7f33&language=en-US&query=Jack%20Reacher&page=1&include_adult=false";
*/
function MovieSearch() { 
    /* Get the movie name for the form */
    var moviename = document.getElementById("moviename").value;
    /* Build up the parameters for the URL */
    var api_key = "e5e088b9fdaef1249c47887b5e5eef39";
    var language = "en-US";
    var page = "1";
    var include_adult = "false";
    var query = encodeURI(moviename);  /* encode the movename since it might have blanks */  
    var myURL = "https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&language=" + language + "&query=" + query + "&page="  + page + "&include_adult=" + include_adult;

    /* Display the URL */
	document.getElementById("url1").style.display = "block";
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

        // AJAX complete - result is in msg  
        .done(function(msg) {

			// Your code to process the result goes here 
			// Loop through the first 25 results  
            for (i = 0; i < 24; i++) {
                
                // Display the result  
                if (i < msg.results.length) {
				document.getElementById("title" + i).style.display = "block";
                document.getElementById("title" + i).innerHTML = "Movie title:" + msg.results[i].title;
				
				document.getElementById("overview" + i).style.display = "block";
                document.getElementById("overview" + i).innerHTML ="Movie overview:" + msg.results[i].overview;
				
				document.getElementById("release_date" + i).style.display = "block";
                document.getElementById("release_date" + i).innerHTML ="Movie release date:" + msg.results[i].release_date;
				
				// Some movies don't have a poster - null is returned 
                if (msg.results[i].poster_path != null) {
                    document.getElementById("poster_path" + i).style.display = "block";
                    document.getElementById("poster_path" + i).src = "https://image.tmdb.org/t/p/w300" + msg.results[i].poster_path;}
				// null move poster - don't display an empty value 
                else	{
                    document.getElementById("poster_path" + i).src = "";       
                    document.getElementById("poster_path" + i).style.display = "none";}
				
				// Some movies don't have a backdrop_path - null is returned 
                if (msg.results[i].backdrop_path != null) {
                    document.getElementById("backdrop_path" + i).style.display = "block";
                    document.getElementById("backdrop_path" + i).src = "https://image.tmdb.org/t/p/w780" + msg.results[i].backdrop_path;}
				// null move poster - don't display an empty value 
                else	{
                    document.getElementById("backdrop_path" + i).src = "";       
                    document.getElementById("backdrop_path" + i).style.display = "none";}
				

				
				document.getElementById("popularity" + i).style.display = "none";
                document.getElementById("popularity" + i).innerHTML ="Movie popularity:" + msg.results[i].popularity;

				document.getElementById("movie_id" + i).style.display = "block";
                document.getElementById("movie_id" + i).innerHTML ="Movie id:" + msg.results[i].id;
				
				document.getElementById("adult_content" + i).style.display = "none";
                document.getElementById("adult_content" + i).innerHTML ="Movie adult content:" + msg.results[i].adult;
				
				document.getElementById("original_language" + i).style.display = "none";
                document.getElementById("original_language" + i).innerHTML ="Movie original_language:" + msg.results[i].original_language;

				


				}
                else
                {
                // Less that 25 movies returned - blank out the rest of the values
				
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
 


// function Movie Details & Credits search

function MovieDtlCrdSearch() {
	//Grab the value from local storage for the movieid variable 
    var movieid = localStorage.getItem("movieIdPass");
    /* Build up the parameters for the URL */
    var txt
    var api_key = "e5e088b9fdaef1249c47887b5e5eef39";
    var language = "en-US";
    var page = "1";
    var include_adult = "false";
    var query = movieid;  /* encode the movename since it might have blanks */  
    var myURL = "https://api.themoviedb.org/3/movie/" + query + "?api_key=" + api_key + "&language=" + language + "&append_to_response=credits";

    /* Display the URL */
	document.getElementById("url1").style.display = "none";
    document.getElementById("url1").innerHTML = myURL;
   /* AJAX Method - Use GET since the parameters are in the URL */
    var myMethod = "GET";

    /* Make sure the document is ready */
    $(document).ready(function() { 

    /* Perform AJAX call - Pass to it the Method (GET) and the URL*/
    $.ajax({
      method: myMethod,
      url: myURL})

        /* AJAX complete - result is in msg */
        .done(function(msg) {
			
			/* Your code to process the result goes here */          
			if (msg.homepage != "") {
				document.getElementById("homepage").style.display = "none";
				document.getElementById("homepage").innerHTML ="Movie homepage: " + msg.homepage;}
			// don't display an empty value
			else {
				document.getElementById("homepage").src = "";       
				document.getElementById("homepage").style.display = "none";}
	
			document.getElementById("movieid").style.display = "none";
			document.getElementById("movieid").innerHTML ="Movie release date: " + msg.id;
			
			document.getElementById("budget").style.display = "block";
			document.getElementById("budget").innerHTML ="Budget: " + msg.budget;
			
			document.getElementById("imdb_id").style.display = "none";
			document.getElementById("imdb_id").innerHTML ="Movie imdb id: " + msg.imdb_id;
			
			document.getElementById("original_language").style.display = "none";
			document.getElementById("original_language").innerHTML ="Movie original language: " + msg.original_language;
			
			document.getElementById("original_title").style.display = "none";
			document.getElementById("original_title").innerHTML ="Movie original title: " + msg.original_title;
			
			document.getElementById("overview").style.display = "block";
			document.getElementById("overview").innerHTML ="Overview: " + msg.overview;
			
			document.getElementById("popularity").style.display = "none";
			document.getElementById("popularity").innerHTML ="Movie popularity: " + msg.popularity;
			
			
			document.getElementById("release_date").style.display = "block";
			document.getElementById("release_date").innerHTML ="Release date: " + msg.release_date;
			
			document.getElementById("revenue").style.display = "block";
			document.getElementById("revenue").innerHTML ="Revenue: " + msg.revenue;
			
			document.getElementById("runtime").style.display = "block";
			document.getElementById("runtime").innerHTML ="Runtime: " + msg.runtime; 
			
			document.getElementById("status").style.display = "none";
			document.getElementById("status").innerHTML ="Movie status: " + msg.status;
			
			document.getElementById("tagline").style.display = "none";
			document.getElementById("tagline").innerHTML ="Movie tagline: " + msg.tagline;
			
			document.getElementById("title").style.display = "block";
			document.getElementById("title").innerHTML ="Title: " + msg.title;
			
							 
					  
			for (i = 0; i < 7; i++) {
			
				/* Display the result */
				if (i < msg.genres.length) {
					/* Set the Title to Visible and set title to value in database */
					document.getElementById("genres" + i).style.display = "block";
				document.getElementById("genres" + i).innerHTML ="Genres: " + msg.genres[i].name;
				}
			else {
					/* Less that 5 movies returned - blank out the rest of the values */
					document.getElementById("genres" + i).innerHTML = "";
			document.getElementById("genres" + i).style.display = "none";
			}
			}
			
			
			
			// Some movies don't have a poster - null is returned  
			if (msg.poster_path != null) {
				document.getElementById("poster_path").style.display = "block";
				document.getElementById("poster_path").src = "https://image.tmdb.org/t/p/w500" + msg.poster_path;}
			// null movie poster - don't display an empty value
			else {
				document.getElementById("poster_path").src = "";       
				document.getElementById("poster_path").style.display = "none";}

			// Get Movie Credits  
			for (i = 0; i < 5; i++) {
			
				/* Display the result */
				if (i < msg.credits.cast.length) {
					/* Set the Title to Visible and set title to value in database */
					document.getElementById("name" + i).style.display = "block";
					document.getElementById("name" + i).innerHTML ="Name: " + msg.credits.cast[i].name;
					
					document.getElementById("character" + i).style.display = "block";
					document.getElementById("character" + i).innerHTML ="Character Name: " + msg.credits.cast[i].character;
					
					/* Some movies don't have a profile path - null is returned - use loop */
					/* example url for profilr image https://image.tmdb.org/t/p/w300/vgLTcq1nYcNmIr3yLxS7sk84sav.jpg */
					if (msg.credits.cast[i].profile_path != null) {
						document.getElementById("profilepath" + i).style.display = "block";
						document.getElementById("profilepath" + i).src = "https://image.tmdb.org/t/p/w185" + msg.credits.cast[i].profile_path;}
					/* null movie poster - don't display an empty value */
					else {
						document.getElementById("profilepath" + i).src = "";       
						document.getElementById("profilepath" + i).style.display = "none";}
						
					document.getElementById("cast_id" + i).style.display = "none";
					document.getElementById("cast_id" + i).innerHTML ="Person id: " + msg.credits.cast[i].cast_id; 
					
					document.getElementById("order" + i).style.display = "none";
					document.getElementById("order" + i).innerHTML ="Person order: " + msg.credits.cast[i].order;
					
					document.getElementById("credit_id" + i).style.display = "none";
					document.getElementById("credit_id" + i).innerHTML ="Person Name: " + msg.credits.cast[i].credit_id;
					
					document.getElementById("gender" + i).style.display = "none";
					document.getElementById("gender" + i).innerHTML ="Person gender: " + msg.credits.cast[i].gender;
				}
				else {
					/* Less that 5 movies returned - blank out the rest of the values */
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

 
 
//  function PersonSearch
  
function PersonSearch() {
    
    /* Get the person name for the form */
    var personname = document.getElementById("personname").value;
    
    /* Build up the parameters for the URL */
    var api_key = "e5e088b9fdaef1249c47887b5e5eef39";
    var language = "en-US";
    var page = "1";
    var include_adult = "false";
    var query = encodeURI(personname);  /* encode the movename since it might have blanks */  
    var myURL = "https://api.themoviedb.org/3/search/person?api_key=" + api_key + "&language=" + language + "&query=" + query + "&page="  + page + "&include_adult=" + include_adult;
    /* Display the URL */
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
            for (i = 0; i < 25; i++) {
                
                /* Display the result */
                if (i < msg.results.length) {

                    /* Set the Title to Visible and set title to value in database */
                    document.getElementById("name" + i).style.display = "block";
                    document.getElementById("name" + i).innerHTML =i + ". Person Name: " + msg.results[i].name;

                    
                    // Some persons don't have a profile path - null is returned  
                    if (msg.results[i].profile_path != null) {
                        document.getElementById("profile_path" + i).style.display = "block";
                        document.getElementById("profile_path" + i).src = "https://image.tmdb.org/t/p/w185" + msg.results[i].profile_path;}
					// null profile - don't display an empty value  
                    else
                    // null profile - don't display an empty value  
                    {
                        document.getElementById("profile_path" + i).src = "";       
                        document.getElementById("profile_path" + i).style.display = "none";}
					
					document.getElementById("popularity" + i).style.display = "none";
					document.getElementById("popularity" + i).innerHTML =i + ". Person popularity: " + msg.results[i].popularity;
					
					document.getElementById("known_for_department" + i).style.display = "block";
					document.getElementById("known_for_department" + i).innerHTML =i + ". Person known_for_department: " + msg.results[i].known_for_department;
					
					document.getElementById("gender" + i).style.display = "none";
					document.getElementById("gender" + i).innerHTML =i + ". Person gender: " + msg.results[i].gender;
					
					document.getElementById("id" + i).style.display = "block";
					document.getElementById("id" + i).innerHTML =i + ". Person id: " + msg.results[i].id;
					
					document.getElementById("adult" + i).style.display = "none";
					document.getElementById("adult" + i).innerHTML =i + ". Person adult content: " + msg.results[i].adult;
                }
                else
                {
                    /* Less that 25 movies returned - blank out the rest of the values */
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
 
 
 
 
 
// function Person Details & Credits search

function PersonDtlCrdSearch() {
    //Grab the value from local storage for the personid variable 
    var personid = localStorage.getItem("personIdPass");
    /* Build up the parameters for the URL */
    var txt
    var api_key = "e5e088b9fdaef1249c47887b5e5eef39";
    var language = "en-US";
    var page = "1";
    var include_adult = "false";
    var query = personid;  /* encode the movie name to eliminate possible blank spaces */  
    var myURL = "https://api.themoviedb.org/3/person/" + query + "?api_key=" + api_key + "&language=" + language + "&append_to_response=images,movie_credits";
	/* Display the URL */
	document.getElementById("url1").style.display = "none";
    document.getElementById("url1").innerHTML = myURL;
    /* AJAX Get Method */
    var myMethod = "GET";
    /* Make sure the document is ready */
    $(document).ready(function() { 
    /* Perform AJAX call and pass to it the Method (GET) and the URL */
    $.ajax({
      method: myMethod,
      url: myURL})
        /* AJAX complete - result is in msg variable */
        .done(function(msg) {
		
		document.getElementById("name").innerHTML = "Name: " + msg.name;
		
		
		document.getElementById("known_for_department").innerHTML = "Known for: " + msg.known_for_department;

		
        document.getElementById("birthday").innerHTML = "Birth day: " + msg.birthday;
		
        // Some persons don't have a deathday - null is returned  
        if (msg.profile_path != "") {
            document.getElementById("deathday").style.display = "block";
            document.getElementById("deathday").src = "https://image.tmdb.org/t/p/w300" + msg.deathday;
			}
        else
        // null - don't display an empty value  
        {
        document.getElementById("deathday").src = "";       
        document.getElementById("deathday").style.display = "none";
		} 
		
				
        document.getElementById("id").style.display = "none";
        document.getElementById("id").innerHTML = "Death day: " + msg.id;
		
        document.getElementById("popularity").style.display = "none";
        document.getElementById("popularity").innerHTML = "Biography: " + msg.popularity;
		
		document.getElementById("place_of_birth").style.display = "block";
        document.getElementById("place_of_birth").innerHTML = "Birth place: " + msg.place_of_birth;
		
        document.getElementById("gender").style.display = "none";
        document.getElementById("gender").innerHTML = "gender: " + msg.gender;
		
		document.getElementById("imdb_id").style.display = "none";
        document.getElementById("imdb_id").innerHTML = "IMDB ID: " + msg.imdb_id;

        document.getElementById("biography").style.display = "block";
        document.getElementById("biography").innerHTML = "Biography: " + msg.biography;		
        
        /* Some persons don't have a profile path - null is returned */
        if (msg.profile_path != null) {
            document.getElementById("profile_path").style.display = "block";
            document.getElementById("profile_path").src = "https://image.tmdb.org/t/p/h632" + msg.profile_path;
        }
        else
        /* null profile path - don't display an empty value */
        {
        document.getElementById("profile_path").src = "";       
        document.getElementById("profile_path").style.display = "none";
        }  

        // Get person credits          

       // Loop through the first 6 results //
            for (i = 0; i < 6; i++) {
           
                // Display the result //
                if (i < msg.movie_credits.cast.length) {

                    // Set the Title to Visible and set title to value in database //
                    document.getElementById("character" + i).style.display = "block";
                    document.getElementById("character" + i).innerHTML ="Character Name: " + msg.movie_credits.cast[i].character;
					
                    document.getElementById("title" + i).style.display = "block";
                    document.getElementById("title" + i).innerHTML ="Movie Title: " + msg.movie_credits.cast[i].title;
					
					document.getElementById("popularity" + i).style.display = "block";
                    document.getElementById("popularity" + i).innerHTML ="Movie popularity: " + msg.movie_credits.cast[i].popularity;
					
										
                    document.getElementById("release_date" + i).style.display = "block";
                    document.getElementById("release_date" + i).innerHTML ="Movie release date:" + msg.movie_credits.cast[i].release_date;
					
                    document.getElementById("adult" + i).style.display = "none";
                    document.getElementById("adult" + i).innerHTML ="Movie adult content: " + msg.movie_credits.cast[i].original_title;
					
					document.getElementById("id" + i).style.display = "none";
                    document.getElementById("id" + i).innerHTML ="Movie id:" + msg.movie_credits.cast[i].id;
					
                    document.getElementById("overview" + i).style.display = "block";
                    document.getElementById("overview" + i).innerHTML ="Movie overview:" + msg.movie_credits.cast[i].overview;
                    
                    
                    
                    // Some don't have a poster - null is returned //
                    if (msg.movie_credits.cast[i].poster_path != null) {
                        document.getElementById("poster_path" + i).style.display = "block";
                        document.getElementById("poster_path" + i).src = "https://image.tmdb.org/t/p/w185" + msg.movie_credits.cast[i].poster_path;}
                    // null movie poster - don't display an empty value //
					else {
                        document.getElementById("poster_path" + i).src = "";       
                        document.getElementById("poster_path" + i).style.display = "none";}
					
					
					// Some don't have a backdrop  - null is returned //
                    if (msg.movie_credits.cast[i].poster_path != null) {
                        document.getElementById("backdrop_path" + i).style.display = "none";
                        document.getElementById("backdrop_path" + i).src = "https://image.tmdb.org/t/p/w185" + msg.movie_credits.cast[i].backdrop_path;}
                    // null movie backdrop  - don't display an empty value //
					else {
						document.getElementById("backdrop_path" + i).src = "";       
						document.getElementById("backdrop_path" + i).style.display = "none";}
					
				
				}
                else
                {
                    // Less that 25 movies returned - blank out the rest of the values //
                    document.getElementById("character" + i).innerHTML = "";
                    document.getElementById("character" + i).style.display = "none";
					document.getElementById("title" + i).innerHTML = "";
                    document.getElementById("title" + i).style.display = "none";
					document.getElementById("popularity" + i).innerHTML = "";
                    document.getElementById("popularity" + i).style.display = "none";
					

                    document.getElementById("adult" + i).style.display = "none";
                    document.getElementById("adult" + i).innerHTML = "";
					
					document.getElementById("id" + i).style.display = "none";
                    document.getElementById("id" + i).innerHTML = "";

                    document.getElementById("release_date" + i).innerHTML = "";
                    document.getElementById("release_date" + i).style.display = "none";
					
                    document.getElementById("overview" + i).innerHTML = "";
                    document.getElementById("overview" + i).style.display = "none";
					
                    document.getElementById("posterpath" + i).src = "";
                    document.getElementById("posterpath" + i).style.display = "none";
					
					document.getElementById("backdrop_path" + i).src = "";       
					document.getElementById("backdrop_path" + i).style.display = "none"
					
                }
            }
        });
    });
}













