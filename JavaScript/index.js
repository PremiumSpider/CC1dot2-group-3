/* index.html, index.css, index.js worked by Adrian Haro */
/* input: Bird Name.
     BirdName must match the MP3 naming convention
     in the Sounds folder.
*/
"use strict";
function makeBirdNoise(bird){

    let audio = new Audio(`Sounds/birds/${bird}Noise.mp3`);
    audio.volume = 0.4;
    audio.play();
  console.log("calling makeBirdNoise");
  
};