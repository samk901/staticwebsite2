let today = new Date();
let currentHour = today.getHours();
let greeting;
let nameTag = 'My name is Sam Kim'

if (currentHour > 18) {
  greeting = 'Good evening!';
} else if (currentHour > 12) {
  greeting = 'Good afternoon!';
} else if (currentHour > 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'Welcome!';
}

document.write('<h1>' + greeting + '<br>' + nameTag + '</h1>');
