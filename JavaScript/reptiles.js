// reptiles.js by Gorav S. - @goravson
var sounds = [
  new Audio("Sounds/reptile/lizard.mp3"),
  new Audio("Sounds/reptile/snake.mp3"),
  new Audio("Sounds/reptile/turtle.mp3"),
  new Audio("Sounds/reptile/crocodile.mp3"),
  new Audio("Sounds/reptile/chameleon.mp3"),
  new Audio("Sounds/reptile/beardedDragon.mp3"),
];
var img = document.querySelectorAll('img:not(.rudy)');

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