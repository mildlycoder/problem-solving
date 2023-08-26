/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let number = ''
  for(let digit of digits){
    number = number + digit;
    console.log(number)

  }  
  number = BigInt(number) + BigInt(1);
  const stringNum = number.toString()
  let newNum = []
  for(let char of stringNum){
      newNum = [...newNum, char]
  }

  return newNum;
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))