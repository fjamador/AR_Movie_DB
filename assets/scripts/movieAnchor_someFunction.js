var movies, i, j, k, x = "", c = "", l = "";
movies = {
	"movie":[
		{"id":"5",
		"movie_name":"Chrystal",
		"movie_release_date":"2004-02-26",
		"top_cast":[
					{"character":"Joe","name":"Billy Bob Thornton","order":"0"},
					{"character":"Chrystal","name":"Lisa Blount","order":"1"}
					],
		"poster_path":"\/BvBW0WTN1wp4nvVeyryBk5dQ8r.jpg",		
		"movie_locations":[
			{"location_name":"Eureka Springs (Carroll County)", "location_coordenates":"36º24’04″N 093º44’16″W"}
			],		
		"movie_details":"Chrystal centers upon the reunion of Joe (played by Thornton) and his wife Chrystal (played by Blount). Joe had spent many years in prison for growing marijuana and for trying to escape from the law. The opening scene flashes back to that unsuccessful escape attempt, with Joe racing his family’s car on narrow mountain roads, trying to evade a police cruiser as Chrystal and their young son sit silently by his side. The death of their young boy in an ensuing crash leads to the main drama of the film, as it overshadows Joe and Chrystal’s attempt to reconcile upon Joe’s return. "
		},
		{"id":"7",
		"movie_name":"Rambo",
		"movie_release_date":"2009-05-18",
		"top_cast":[
					{"character":"consectetur","name":"upidatat non proident","order":"0"},
					{"character":"laboris","name":"nisi ut aliquip","order":"1"}
					],
		"poster_path":"\/BvBW0WTN1wp4nvVeyryBk5dQ8r.jpg",		
		"movie_locations":[
			{"location_name":"Lorem ipsum", "location_coordenates":"enim ad minim veniam"}
			],		
		"movie_details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		}
				
	]
}
 
function movieSomeFunction(id){ 
 
	for (i in movies.movie) {
    if (movies.movie[i].id == id){
		x += "<h2>" + movies.movie[i].movie_name + "</h2>";
		x += "<h2>" + movies.movie[i].movie_release_date + "</h2>";
        x += "<h2>" + movies.movie[i].poster_path + "</h2>";
		x += "<h2>" + movies.movie[i].movie_details + "</h2>";
        for (j in movies.movie[i].top_cast) {
			x += movies.movie[i].top_cast[j].character + " " + movies.movie[i].top_cast[j].name + "<br>";
		}
		for (j in movies.movie[i].movie_locations) {
			x += movies.movie[i].movie_locations[j].location_name + movies.movie[i].movie_locations[j].location_coordenates;
			}
		}
	}
 
	 document.getElementById("demo").innerHTML = x;
}
 
 




