/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var z = document.getElementById("mockups");
    var y = document.getElementById("icon");
    var x = document.getElementById("myLinks");
    var a = document.getElementById("about")
    if (x.style.display === "flex") {
      x.style.display = "none";
      y.className = "fa fa-bars";
      z.style.visibility = "visible";
      a.style.backgroundImage = "none"
    } else {
      x.style.display = "flex";
      y.className = "fas fa-times";
      z.style.visibility = "hidden";
      a.style.backgroundImage = "linear-gradient(to bottom, rgba(45, 49, 77),	rgba(255, 255, 255, 0.7)"
    }
  }