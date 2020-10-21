

document.getElementById("defaultOpen").click();

// Open Tab Function
function openTab(evt, btnName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(btnName).style.display = "block";
    evt.currentTarget.className += " active";
}


// Open Redirect Function
function openRedirect(url) {
    window.location.href = url;
}


                              
//Scroll Back To Top Button
sbttbutton = document.getElementById("sbttBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Modal box for contact info

// Get the modal
var modal = document.getElementById("CntcModal");
// Get the button that opens the modal
var btn = document.getElementById("CntcMdlBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
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
    var api_key = "e5e088b9fdaef1249c47887b5e5eef39";//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var language = "en-US";
    var page = "1";
    var include_adult = "false";
    var query = encodeURI(moviename);  /* encode the movename since it might have blanks */  
    var myURL = "https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&language=" + language + "&query=" + query + "&page="  + page + "&include_adult=" + include_adult;

    /* Display the URL */
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

        /* Your code to process the result goes here */          

        /* Loop through the first 25 results */
            for (i = 0; i < 25; i++) {
                
                /* Display the result */
                if (i < msg.results.length) {

                    /* Set the Title to Visible and set title to value in database */
                    document.getElementById("title" + i).style.display = "block";
                    document.getElementById("title" + i).innerHTML = i + ". Movie title:" + msg.results[i].original_title;
                    
                    document.getElementById("mid" + i).style.display = "block";
                    document.getElementById("mid" + i).innerHTML = i + ". Movie ID:" + msg.results[i].id;

                    /* Some movies don't have a poster - null is returned */
                    if (msg.results[i].poster_path != null) {
                        document.getElementById("image" + i).style.display = "block";
                        document.getElementById("image" + i).src = "https://image.tmdb.org/t/p/w300" + msg.results[i].poster_path;
                    }
                    else

                    /* null move poster - don't display a empty value */
                    {
                        document.getElementById("image" + i).src = "";       
                        document.getElementById("image" + i).style.display = "none";
                    }
                }
                else
                {
                    /* Less that 25 movies returned - blank out the rest of the values */
                    document.getElementById("title" + i).innerHTML = "";
                    document.getElementById("title" + i).style.display = "none";
                    document.getElementById("mid" + i).innerHTML = "";
                    document.getElementById("mid" + i).style.display = "none";
                    document.getElementById("image" + i).src = "";
                    document.getElementById("image" + i).style.display = "none";
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
    var api_key = "e5e088b9fdaef1249c47887b5e5eef39";//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var language = "en-US";
    var page = "1";
    var include_adult = "false";
    var query = movieid;  /* encode the movename since it might have blanks */  
    var myURL = "https://api.themoviedb.org/3/movie/" + query + "?api_key=" + api_key + "&language=" + language + "&append_to_response=credits";

    /* Display the URL */
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

        /* Your code to process the result goes here */          

        document.getElementById("title").innerHTML ="Movie Title: " + msg.original_title;
		document.getElementById("budget").innerHTML ="Movie budget:: " + msg.budget;
        
       
        document.getElementById("release").innerHTML ="Movie release date:: " + msg.release_date;
        document.getElementById("revenue").innerHTML ="Movie revenue:: " + msg.revenue;
        document.getElementById("overview").innerHTML ="Movie overview:: " + msg.overview;
        document.getElementById("imdb_id").innerHTML ="Movie imdb id:: " + msg.imdb_id;
                    
        /* Some movies don't have a poster - null is returned */
        if (msg.poster_path != null) {
        document.getElementById("posterpath").style.display = "block";
        document.getElementById("posterpath").src = "https://image.tmdb.org/t/p/w185" + msg.poster_path;
        }
        
        else
        /* null movie poster - don't display a empty value */
        {
        document.getElementById("posterpath").src = "";       
        document.getElementById("posterpath").style.display = "none";
        }        
         


		/* Get Movie Credits */
            for (i = 0; i < 5; i++) {
           
                /* Display the result */
                if (i < msg.credits.cast.length) {

                    /* Set the Title to Visible and set title to value in database */
                    document.getElementById("name" + i).style.display = "block";
                    document.getElementById("name" + i).innerHTML = i + "Person Name:: " + msg.credits.cast[i].name;
					document.getElementById("character" + i).style.display = "block";
                    document.getElementById("character" + i).innerHTML = i + "Character Name: " + msg.credits.cast[i].character;
					document.getElementById("creditid" + i).style.display = "block";
                    document.getElementById("creditid" + i).innerHTML = i + "Credit details ID:: " + msg.credits.cast[i].credit_id;
                    
                    /* Some movies don't have a profile path - null is returned - use loop */
					/* example url for profilr image https://image.tmdb.org/t/p/w300/vgLTcq1nYcNmIr3yLxS7sk84sav.jpg */
                    if (msg.credits.cast[i].profile_path != null) {
                        document.getElementById("profilepath" + i).style.display = "block";
                        document.getElementById("profilepath" + i).src = "https://image.tmdb.org/t/p/w185" + msg.credits.cast[i].profile_path;
                    }
                    else
                    /* null movie poster - don't display a empty value */
                    {
                        document.getElementById("profilepath" + i).src = "";       
                        document.getElementById("profilepath" + i).style.display = "none";
                    }
                }
                else {
                    /* Less that 5 movies returned - blank out the rest of the values */
                    document.getElementById("name" + i).innerHTML = "";
                    document.getElementById("name" + i).style.display = "none";
					document.getElementById("character" + i).innerHTML = "";
                    document.getElementById("character" + i).style.display = "none";
                    document.getElementById("creditid" + i).innerHTML = "";
                    document.getElementById("creditid" + i).style.display = "none";
                    document.getElementById("profilepath" + i).src = "";
                    document.getElementById("profilepath" + i).style.display = "none";
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
                    document.getElementById("person" + i).style.display = "block";
                    document.getElementById("person" + i).innerHTML =i + ". Person Name: " + msg.results[i].name;
                     
                    document.getElementById("pid" + i).style.display = "block";
                    document.getElementById("pid" + i).innerHTML = i + ". Person ID: " + msg.results[i].id;
                    
                    /* Some persons don't have a profile path - null is returned */
                    if (msg.results[i].profile_path != null) {
                        document.getElementById("profilepth" + i).style.display = "block";
                        document.getElementById("profilepth" + i).src = "https://image.tmdb.org/t/p/w45" + msg.results[i].profile_path;
                    }
                    else

                    /* null profile - don't display a empty value */
                    {
                        document.getElementById("profilepth" + i).src = "";       
                        document.getElementById("profilepth" + i).style.display = "none";
                    }
                }
                else
                {
                    /* Less that 25 movies returned - blank out the rest of the values */
                    document.getElementById("person" + i).innerHTML = "";
                    document.getElementById("person" + i).style.display = "none";
                    document.getElementById("pid" + i).innerHTML = "";
                    document.getElementById("pid" + i).style.display = "none";
                    document.getElementById("profilepth" + i).innerHTML = "";
                    document.getElementById("profilepth" + i).style.display = "none";
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

        /* Code to process the result */          
        document.getElementById("bday0").innerHTML = "Birth day: " + msg.birthday;
        document.getElementById("known_for0").innerHTML = "Known for: " + msg.known_for_department;
        document.getElementById("deathday0").innerHTML = "Death day: " + msg.deathday;
        document.getElementById("person0").innerHTML = "Person Name: " + msg.name;
        document.getElementById("bio0").innerHTML = "Biography: " + msg.biography;
        document.getElementById("birth_place0").innerHTML = "Birth place: " + msg.place_of_birth;
        document.getElementById("imdb0").innerHTML = "IMDB ID: " + msg.imdb_id;
        
        /* Some persons don't have a profile path - null is returned */
        if (msg.profile_path != null) {
            document.getElementById("profilepth0").style.display = "block";
            document.getElementById("profilepth0").src = "https://image.tmdb.org/t/p/w300" + msg.profile_path;
        }
        else
        /* null profile path - don't display an empty value */
        {
        document.getElementById("profilepth0").src = "";       
        document.getElementById("profilepth0").style.display = "none";
        }        

        // Get person credits          

       /* Loop through the first 6 results */
            for (i = 0; i < 6; i++) {
           
                /* Display the result */
                if (i < msg.movie_credits.cast.length) {

                    /* Set the Title to Visible and set title to value in database */
                    document.getElementById("charName" + i).style.display = "block";
                    document.getElementById("charName" + i).innerHTML = i + "Character Name: " + msg.movie_credits.cast[i].character;
					
                    document.getElementById("title" + i).style.display = "block";
                    document.getElementById("title" + i).innerHTML = i + "Movie Title:: " + msg.movie_credits.cast[i].original_title;
                  
                    document.getElementById("release" + i).style.display = "block";
                    document.getElementById("release" + i).innerHTML = i + "Movie release date:: " + msg.movie_credits.cast[i].release_date;
                    
                    document.getElementById("overview" + i).style.display = "block";
                    document.getElementById("overview" + i).innerHTML = i + "Movie overview:: " + msg.movie_credits.cast[i].overview;
                    
                    document.getElementById("genre" + i).style.display = "block";
                    document.getElementById("genre" + i).innerHTML = i + "Movie genre:: " + msg.movie_credits.cast[i].genre_ids;
                    
                    /* Some movies don't have a poster - null is returned */
                    if (msg.movie_credits.cast[i].poster_path != null) {
                        document.getElementById("posterpath" + i).style.display = "block";
                        document.getElementById("posterpath" + i).src = "https://image.tmdb.org/t/p/w185" + msg.movie_credits.cast[i].poster_path;
                    }
                    else

                    /* null movie poster - don't display a empty value */
                    {
                        document.getElementById("posterpath" + i).src = "";       
                        document.getElementById("posterpath" + i).style.display = "none";
                    }
                }
                else
                {
                    /* Less that 25 movies returned - blank out the rest of the values */
                    document.getElementById("charName" + i).innerHTML = "";
                    document.getElementById("charName" + i).style.display = "none";
					document.getElementById("title" + i).innerHTML = "";
                    document.getElementById("title" + i).style.display = "none";
                    document.getElementById("release" + i).innerHTML = "";
                    document.getElementById("release" + i).style.display = "none";
                    document.getElementById("overview" + i).innerHTML = "";
                    document.getElementById("overview" + i).style.display = "none";
                    document.getElementById("genre" + i).innerHTML = "";
                    document.getElementById("genre" + i).style.display = "none";
                    document.getElementById("posterpath" + i).src = "";
                    document.getElementById("posterpath" + i).style.display = "none";
                }
            }
        });
    });
}













