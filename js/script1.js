document.addEventListener("DOMContentLoaded", function(event){
  document.getElementById("div1").textContent = "Document DOMContentLoaded event happened!"
});

// Occurs after everything has loaded
window.onload = function() {
  document.getElementById("div2").textContent = "Window.onload event happened"
}