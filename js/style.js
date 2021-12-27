document.getElementById("navIcon").addEventListener("click", myFunction);
function myFunction() {
    var x = document.getElementById("nav2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }