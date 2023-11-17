
/* MAMMALS CSS code by Don Caplon */
var mammals = ["Images/mammals/dog-basset.jpg","Images/mammals/computer-cat.jpg","Images/mammals/whale.jpg", "Images/mammals/elephants.jpg","Images/mammals/panda.jpg","Images/mammals/barbary-macaque-monkey.jpg"]
function mammalFunc(num) {
  var buttons = document.querySelectorAll('button:not(.special)');
  buttons.forEach(button => {
    button.disabled = true;
  });
  var image = document.createElement("img");
  image.style.width = "600px";
  image.style.height = "auto";
  if (num === 0) {
    image.src = mammals[0];
    const sound = new Audio('Sounds/mammals/basset.mp3');
    sound.play();
  }
  else if (num === 1) {
    image.src = mammals[1];
    const sound = new Audio('Sounds/mammals/cat-purr.mp3');
    sound.play();
  }
  else if (num === 2) {
    image.src = mammals[2];
    const sound = new Audio('Sounds/mammals/baleen-whale.mp3');
    sound.play();
  }
  else if (num === 3) {
    image.src = mammals[3];
    const sound = new Audio('Sounds/mammals/elephant.mp3');
    sound.play();
  }
  else if (num === 4) {
    image.src = mammals[4];
    const sound = new Audio('Sounds/mammals/panda.mp3');
    sound.play();
  }
  else if (num === 5) {
    image.src = mammals[5];
    const sound = new Audio('Sounds/mammals/monkey.mp3');
    sound.play();
  }


  document.body.appendChild(image);
  
  setTimeout(function() {
    document.body.removeChild(image);
    buttons.forEach(button => {
      button.disabled = false;
    }); 
  }, 13000);
}


