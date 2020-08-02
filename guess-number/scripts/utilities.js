/**
 * Return a random number between min and max
 * @param {*} min 
 * @param {*} max 
 */

function getRandomInteger(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}