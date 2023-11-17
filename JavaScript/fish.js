// Written by Blake Randall blob@

(function() {
  document.addEventListener('DOMContentLoaded', () => {
    // Select the grid container element
    const gridContainer = document.getElementById('grid-container');

    // Hide all info bubbles initially
    const infoBubbles = document.querySelectorAll('.info-bubble');
    infoBubbles.forEach(bubble => bubble.style.display = 'none');

    // Define the event handler function
    const handleCreatureClick = event => {
      const creatureElement = event.target.closest('.creature');

      // Toggle the visibility of the info bubble
      const infoBubble = creatureElement.querySelector('.info-bubble');
      infoBubble.style.display = infoBubble.style.display === 'none' ? 'block' : 'none';
      
      if (creatureElement) {
        // Play the sound associated with the creature
        const soundSrc = `Sounds/fish/${creatureElement.id}.mp3`
        const sound = new Audio(soundSrc);
        if (infoBubble.style.display === 'block')
          sound.play().catch(error => {
            console.error(`Error playing sound: ${error}`);
            const defaultSound = new Audio(`Sounds/fish/default.mp3`);
            defaultSound.play();
          });


      }
    };

    // Add the event listener to the grid container
    gridContainer.addEventListener('click', handleCreatureClick);
  });
})();