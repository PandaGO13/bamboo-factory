const toggle = document.querySelector(".burger input");

const spanList = document.querySelectorAll(".burger span");

toggle.addEventListener("change", function(){

	if(this.checked){

		spanList.forEach(function(e){
			e.classList.add("line-animation");
			e.classList.remove("line-animation-reverse");
		})
	}
	else {

		spanList.forEach(function(e){
			e.classList.add("line-animation-reverse");
			e.classList.remove("line-animation");
		})
	}

}, false);
