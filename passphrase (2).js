let isValidPassphrase = (text) => {
  
  let words =text.split(" ");
  let minimumFourWords =words.length >=4;
  let minimumTwoCharsEach = words.every(word => word.length >= 2);

  let conditionSatisfied =minimumFourWords && minimumTwoCharsEach;

  return conditionSatisfied;
}

//checked in console using:

isValidPassphrase("this should be enough")
module.exports = isValidPassphrase;
