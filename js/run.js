var x = document.getElementById("currentLocation");
var data = {
				"nonProfitOrg": [
			         { "id": "1", "name": "American Association of State Troopers Inc.", "number":"xxx xxx-xxxx", "description":"An association of troopers helping troopers. Provides members with legal assistance" },
			         { "id": "2", "name": "American Society for Kurds", "number":"xxx xxx-xxxx", "description":"American Society for Kurds (ASK) was founded in 1997 as a non-government organization registered in Florida" },
			         { "id": "3", "name": "American Society of Notaries", "number":"xxx xxx-xxxx", "description":"The American Society of Notaries is the oldest national non-profit membership organization for notaries public in the United States. With currently over 20,000 members the Society is dedicated to improving and standardizing notarial practices" },
			         { "id": "4", "name": "Apalachee Blues Society", "number":"xxx xxx-xxxx", "description":"The mission of the Apalachee Blues Socety a 501(c) 3 non-profit membership organization based in Tallahassee Florida is to support and help grow America's musical contribution" },
			         { "id": "5", "name": "Audubon of Florida", "number":"xxx xxx-xxxx", "description":"f no arguments are passed to jQuery.when(), it will return a resolved Promise." }
			     ]
			}
$(document).ready(function(){
	//getLocation();
	buildrow();
});
function getLocation() {
	alert(navigator.geolocation)
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}

function buildrow()
{
	var subHTML = "";
	$.each(data.nonProfitOrg, function(){
		subHTML = subHTML+"<div class=\"col-lg-6\"><h4><a href=\"#\" onclick=\"nonprofitPage("+this.id+")\">"+this.name+"</a></h4><p>"+this.description+"</p></div>"
	});
	$(".non-profits").html(subHTML);
}

function contact(){
	alert("here")
	$.ajax({url: "contact.html", success: function(result){
		$(".home").hide();
        $(".contact").html(result);
    }});
}