let today = new Date();
let currentHour = today.getHours();
let greeting;
let currentTime = currentHour + ":" + today.getMinutes();

if (today.getMinutes() < 10) {
  currentTime = currentHour + ":0" + today.getMinutes();
}

if (currentHour > 18) {
  greeting = 'Good evening!';
} else if (currentHour > 12) {
  greeting = 'Good afternoon!';
} else if (currentHour > 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'Welcome!';
}

if (today.getMinutes() < 10) {
  currentTime = currentHour + ":0" + today.getMinutes();
};

document.write('<h1>' + greeting + '</h1>');
document.write('<h4>(Your current local time is ' + currentTime + '.)</h4>');

