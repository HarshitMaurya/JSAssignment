var dynamicBox= document.querySelector("#loadhere");

	var flag=true;

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
	if(flag)
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
	if(flag)
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
	if(flag)
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
	if(flag)
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
	if(flag)
    history.pushState(stateObj, "", "contact");
	});

window.addEventListener("popstate", function(e) {
	flag=false;
    switch(history.state.foo){
    	case "intro":
    	introRef.click();
    	break;
    	case "about":
    	aboutRef.click();
    	break;
    	case "skills":
    	skillsRef.click();
    	break;
    	case "hobbies":
    	hobbiesRef.click();
    	break;
    	case "contact":
    	contactRef.click();
    	break;
    }
    flag=true;
});
