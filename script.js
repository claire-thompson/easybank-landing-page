/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var z = document.getElementById("mockups");
    var y = document.getElementById("icon");
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
      y.className = "fa fa-bars";
    } else {
      x.style.display = "flex";
      y.className = "fas fa-times";
    }
  }