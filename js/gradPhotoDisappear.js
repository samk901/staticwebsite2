$("#gradPhoto").on("click", function() {
  $( "#gradPhoto").animate({
    height: "toggle"
  }, 1000,
  console.log('clicked grad photo'));
  $( "#h1").append( "<button id=\"photoButton\">Reappear Photo</button>");
});

$( "#photoButton").on("click", function() {
  $( "#gradPhoto").animate({
    height: "toggle"
  }, 1000,
  console.log('clicked button'));
});