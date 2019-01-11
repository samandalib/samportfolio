/* Navigation Responsive*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav nav-pills nav-fill") {
    x.className += " responsive";
  } else {
    x.className = "nav nav-pills nav-fill";
  }
}
