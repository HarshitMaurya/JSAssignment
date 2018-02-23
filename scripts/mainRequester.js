console.log("mainRequester.js")
var dynamicBox= document.querySelector("#loadhere");

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			dynamicBox.innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "pages/intro.html", true);
	xhttp.send();
	var stateObj = { foo: "intro" };
    history.pushState(stateObj, "", "intro");


var introRef = document.querySelector("#intro");
introRef.addEventListener("click", function(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			dynamicBox.innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "pages/intro.html", true);
	xhttp.send();

	var stateObj = { foo: "intro" };
    history.pushState(stateObj, "", "intro");
	});

var aboutRef = document.querySelector("#about");
aboutRef.addEventListener("click", function(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			dynamicBox.innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "pages/about.html", true);
	xhttp.send();

	var stateObj = { foo: "about" };
    history.pushState(stateObj, "", "about");
	});

var skillsRef = document.querySelector("#skills");
skillsRef.addEventListener("click", function(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			dynamicBox.innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "pages/skills.html", true);
	xhttp.send();

	var stateObj = { foo: "skills" };
    history.pushState(stateObj, "", "skills");
	});

var hobbiesRef = document.querySelector("#hobbies");
hobbiesRef.addEventListener("click", function(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			dynamicBox.innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "pages/hobbies.html", true);
	xhttp.send();

	var stateObj = { foo: "hobbies" };
    history.pushState(stateObj, "", "hobbies");
	});

var contactRef = document.querySelector("#contact");
contactRef.addEventListener("click", function(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			dynamicBox.innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "pages/contact.html", true);
	xhttp.send();

	var stateObj = { foo: "contact" };
    history.pushState(stateObj, "", "contact");
	});