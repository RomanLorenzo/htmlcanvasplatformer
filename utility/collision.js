export function detectCollision(objectOne, objectTwo) {  
    if (
      objectOne.x + objectOne.width > objectTwo.x && 
      objectTwo.x + objectTwo.width > objectOne.x &&
      objectOne.y + objectOne.height > objectTwo.y &&
      objectTwo.y + objectTwo.height > objectOne.y) {
      return true;
    } else {
      return false;
    }
  }
  