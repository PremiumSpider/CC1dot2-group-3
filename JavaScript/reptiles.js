// reptiles.js by Gorav S. - @goravson
// changing var to const to follow best practices by Ebrahim Al-basry
const sounds = [
  new Audio("Sounds/reptile/lizard.mp3"),
  new Audio("Sounds/reptile/snake.mp3"),
  new Audio("Sounds/reptile/turtle.mp3"),
  new Audio("Sounds/reptile/crocodile.mp3"),
  new Audio("Sounds/reptile/chameleon.mp3"),
  new Audio("Sounds/reptile/beardedDragon.mp3"),
];
// changing var to const to follow best practices by Ebrahim Al-basry

const img = document.querySelectorAll('img:not(.rudy)');

img.forEach(function(image, i) {
  image.addEventListener('click', function(e) {
    // Play different sound on each click
    sounds[i].play();
    e.target.style.backgroundColor = "red";
    setTimeout(function() {
      e.target.style.backgroundColor = "#d7edee";
    }, 1000);
  });
});