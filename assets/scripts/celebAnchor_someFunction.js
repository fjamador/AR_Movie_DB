var persons, i, j, k, x = "", c = "", l = "";
persons = {
	"person":[
		{"id":"2",
		"person_firstName":"Billy Bob",
		"person_lastName":"Thornton",
		"person_birth_date":"1955-08-04",
		"person_death_date":"null",
		"person_poster_path":"\/BvBW0WTN1wp4nvVeyryBk5dQ8r.jpg",		
		"person_birthPlace:":[
			{"location_name":"Hot Springs, Arkansas", "location_coordenates":"36º24’04″N 093º44’16″W"}
			],		
		"person_biography":"is an American actor, screenwriter, director and musician. Thornton gained early recognition as a cast member on the CBS sitcom Hearts Afire and in several early 1990s films including On Deadly Ground and Tombstone. In the mid-1990s, after writing, directing, and starring in the independent film Sling Blade, he won an Academy Award for Best Adapted Screenplay. He appeared in several major film roles following Sling Blade 's success, including 1998's Armageddon and A Simple Plan. During the late 1990s, Thornton began a career as a singer-songwriter. He has released three albums and was the singer of a blues rock band. Description above from the Wikipedia article Billy Bob Thornton, licensed under CC-BY-SA, full list of contributors on Wikipedia."
		},
		{"id":"4",
		"person_firstName":"Fu",
		"person_lastName":"Manchu",
		"person_birth_date":"1970-08-04",
		"person_death_date":"null",
		"person_poster_path":"\/Lorem ipsum dolor sit amet.jpg",		
		"person_birthPlace:":[
			{"location_name":"Lorem ipsum dolor sit amet", "location_coordenates":"36º24’04″N 093º44’16″W"}
			],		
		"person_biography":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
				
	]
}
 
function celebSomeFunction(id){ 
 
	for (i in persons.person) {
    if (persons.person[i].id == id){
		x += "<h2>" + persons.person[i].person_firstName + "</h2>";
		x += "<h2>" + persons.person[i].person_lastName + "</h2>";
		x += "<h2>" + persons.person[i].person_birth_date + "</h2>";
	/* need to add person_death_date if null message */
		x += "<h2>" + persons.person[i].person_death_date + "</h2>";
        x += "<h2>" + persons.person[i].poster_path + "</h2>";
		for (j in persons.person[i].person_birthPlace) {
			x += persons.person[i].person_birthPlace[j].location_name + persons.person[i].person_birthPlace[j].location_coordenates;
			}
		x += "<h2>" + persons.person[i].person_biography + "</h2>";
		}
	}
 
	 document.getElementById("demo").innerHTML = x;
}
 
 




