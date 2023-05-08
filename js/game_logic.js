const WIDTH = 560;
const HEIGHT = 560;

let target = {
  x:getRandomNumber(WIDTH),
  y:getRandomNumber(HEIGHT)
};

let $map = document.getElementById('map');
let $distance = document.getElementById('distance');
let clicks = 0;


// Add a listener for the beforeunload event
window.addEventListener('beforeunload', function(event) {
  // Prompt the user to confirm before leaving the page
  event.preventDefault();
  event.returnValue = '';
});

// Add a listener for the page load event
window.addEventListener('load', function() {
  // Check if the user confirmed before leaving the page
  const confirmed = sessionStorage.getItem('confirmed');
  if (confirmed === 'true') {
    // Continue with the same state
    console.log('Continue with the same state');
  } else {
    // Reset the start and start fresh
    console.log('Reset the start and start fresh');
  }
});

// Add a listener for the reload button click event
const reloadButton = document.querySelector('button[type="reload"]');
if (reloadButton) {
  reloadButton.addEventListener('click', function() {
    // Prompt the user to confirm before reloading the page
    sessionStorage.setItem('confirmed', 'true');
  });
}


$map.addEventListener('click', function (e) {
  console.log('click');
  clicks++;
  if(clicks > 35){
    alert('You dug too many times. You Lose!');
    location.reload();
  } //DeadEnd 1
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;

  if (distance < 20) {
    alert(`You found the bone in ${clicks} digs!`);
    location.reload();
  }
})
