let getRandomNumber = size => {
  return Math.floor(Math.random() * size);
}

let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

let getDistanceHint = distance => {
  if (distance < 30) {
    return "Feeling super hungy!!";
  } else if (distance < 50) {
    return "Cannot Resist!";
  } else if (distance < 80) {
    return "Can't wait to eat something";
  } else if (distance < 140) {
    return "I feel hungry";
  } else if (distance < 280) {
    return "Something is distracting me";
  } else if (distance < 520) {
    return "Feeling Tired";
  } else {
    return "Feeling Sleepy";   //Clues
  }
}
