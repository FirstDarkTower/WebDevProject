//Produced by Jarrek Holmes//
//March 26, 2017//

//--- Nav-Bar Beginning --//
function highlight(nav){
	document.getElementById(nav).style.fontSize = "120%";
}

function lowlight(nav){
		document.getElementById(nav).style.fontSize = "100%";
}

function imageGo(){
	document.getElementById("logo").style.width = "18%";
	document.getElementById("logo").style.height = "18.2%";
}

function imageLeave(){
	document.getElementById("logo").style.width = "17%";
	document.getElementById("logo").style.height = "18%";
}
//--- Nav-Bar End ---//

//Nav-bar for events page
function openEvent(evt, eventName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(eventName).style.display = "block";
    evt.currentTarget.className += " active";
}

//Checks to make sure the form is correct
function validate(){
	var z = $("#zipcode").val();
	
	if(z.length == 0){
		return true;
	}
	
	if(z.length != 5 || isNaN(z)){
		alert("Incorrect Zipcode Format");
		return false;
	}
	return true;
}