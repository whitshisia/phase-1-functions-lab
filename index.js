// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
  }

  function distanceFromHqInFeet(blocks){
        const blockInFeet = 264;
        return Math.abs(blocks - 42) * blockInFeet;
      } 
function distanceTravelledInFeet(start,destination){
const blockInFeet = 264;
return Math.abs(destination - start) * blockInFeet
}


function calculatesFarePrice(start, destination) {
    const distance = Math.abs(start - destination);

    if (distance <= 400) {
        return 0;
    } else if (distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

// module.exports = calculatesFarePrice;


 
