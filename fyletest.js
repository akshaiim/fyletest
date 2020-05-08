// document.getElementById("check").addEventListener("change", myFunction());
//document.getElementById("check").addEventListener("click", myFunction(document.getElementByClassName("serving-select")));

// function myFunction(clicked_id) {
//   var id= clicked_id;
//   var x = document.getElementById(id);
//   x.classList.toggle("serving-select");

//   if(document.getElementById("check").checked){
//   	var lollipop = 1 * id;
//   	var icecandy = 2 * id;
//   	var saving = icecandy - lollipop;
//   	document.getElementById("lollipop-cost").innerHTML = "$"+ lollipop //+= "<span class="text-muted"> per month</span>";
//   	document.getElementById("icecandy-cost").innerHTML = "$" + icecandy //+= "<span class="text-muted"> per month</span>";
//   	document.getElementById("saving").innerHTML = "$" + saving;



//   }
//   else{
//   	var lollipop = 0.5 * id * 12;
//   	var icecandy = 1 * id * 12;
//   	var saving = icecandy - lollipop;
//   	document.getElementById("lollipop-cost").innerHTML = "$"+lollipop;
//   	document.getElementById("icecandy-cost").innerHTML = "$" + icecandy;
//   	document.getElementById("saving").innerHTML = "$" + saving;

//   }

// }

// document.getElementById("check").addEventListener("change", myFunction());
//document.getElementById("check").addEventListener("click", myFunction(document.getElementByClassName("serving-select")));

function myFunction(clicked_id) {
var id = clicked_id;
var x = document.getElementById(id);

  // Get the container element
var btnContainer = document.getElementById("servings");

  // Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("list-group-item");

for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function () {
var current = document.getElementsByClassName("serving-select");

      // If there's no active class
if (current.length > 0) {
  current[0].className = current[0].className.replace(
  " serving-select",
          ""
        );
      }

      // Add the active class to the current/clicked button
  this.className += " serving-select";
    });
  }

  if (document.getElementById("check").checked) {
    var lollipop = 1 * id;
    var icecandy = 2 * id;
    var saving = icecandy - lollipop;
    document.getElementById("lollipop-cost").innerHTML = "$" + lollipop //+ "<span class="text-muted"> per month </span>";
    document.getElementById("icecandy-cost").innerHTML = "$" + icecandy //+ "<span class="text-muted"> per month</span>";
    document.getElementById("saving").innerHTML = "$" + saving;
    document.getElementById("NoOfServing").innerHTML = "For " + id + " servings";
    document.getElementById("NoOfServing2").innerHTML = "For " + id + " servings"; 
    document.getElementById("saving-tag").innerHTML = "per month";
  } else {
    var lollipop = 0.5 * id * 12;
    var icecandy = 1 * id * 12;
    var saving = icecandy - lollipop;
    document.getElementById("lollipop-cost").innerHTML = "$" + lollipop //+= "<span class="text-muted"> per year</span>";
    document.getElementById("icecandy-cost").innerHTML = "$" + icecandy //+= "<span class="text-muted"> per year</span>";
    document.getElementById("saving").innerHTML = "$" + saving ; 
    document.getElementById("NoOfServing").innerHTML = "For " + id + " servings";

    document.getElementById("NoOfServing2").innerHTML = "For " + id + " servings";  
    document.getElementById("saving-tag").innerHTML = "per year";
  }
}
function myFunction2() {
  var current = document.getElementsByClassName("serving-select");
  console.log(current[0].id);
  myFunction(current[0].id);
}



