const sideSize = 6;
const gridPosBase = [[1, 1], [4, 1], [2, 2], [6, 2], [5, 3], [1, 4], [4, 4], [3, 5], [6, 5]];
const encriptedMessage = 'lróaon. sg sdersoildsu.:.cc kiomamii';
const x = 0;
const y = 1;

function sortArray(gridArray) {
  const orderedArray = gridArray.sort((num1, num2) => {
    if (num1[y] < num2[y]) return -1
    if (num1[y] === num2[y]) {
      if (num1[x] < num2[x]) return -1
      if (num1[x] > num2[x]) return 1
    }
    return 0
  });
  return orderedArray;
}

function rotateArray90(gridToTurn) {
  const gridRotated = [];
  gridToTurn.forEach((num, index) => {
    gridRotated[index] = [];
    gridRotated[index][x] = (sideSize + 1) - num[y];
    gridRotated[index][y] = num[x];
  });
  const gridRotatedOrdered = sortArray(gridRotated);
  return gridRotatedOrdered;
}

// Positions 0, 90, 180 y 270.
const orderArray0 = sortArray(gridPosBase);
const newArray90 = rotateArray90(orderArray0);
const newArray180 = rotateArray90(newArray90);
const newArray270 = rotateArray90(newArray180);

const completeArray = orderArray0.concat(newArray90, newArray180, newArray270);
sortArray(completeArray);

function decrypt(text, array) {
  const eachLetter = text.split([], array.length);
  let index = 0;
  for (const one of array) {
    one.push(eachLetter[index++])
  }
  return array;
}
const decryptedMessage = decrypt(encriptedMessage, completeArray);

const showMessage = () => {
  const sortedMessage = orderArray0.concat(newArray90, newArray180, newArray270);
  console.log(sortedMessage);

  for (const item of sortedMessage) {
    console.log(item[2])
    document.querySelector('.js-msg').innerHTML += item[2];
  }
}
showMessage();