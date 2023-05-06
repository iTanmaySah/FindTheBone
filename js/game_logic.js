const WIDTH = 560;
const HEIGHT = 560;

let target = {
  x:getRandomNumber(WIDTH),
  y:getRandomNumber(HEIGHT)
};

let $map = document.getElementById('map');
let $distance = document.getElementById('distance');
let clicks = 0;

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
