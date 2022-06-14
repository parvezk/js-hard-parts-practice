//
console.log('Hello, world!');

function repeater(char, repeat = 5) {
    if (repeat === 1)
      return char;
     else
       return repeater(char + char[0], repeat - 1);
   }

  function repeater(char, limit = 5, str = '') {
    if (str.length === limit)
      return str;
    else
      return repeater(char, limit, str + char);
  }

function repeater(char) {
  if (char.length === 5)
    return char;
  else
    return repeater(char + char[0]);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g'));
console.log(repeater('j'));
//

function factorial(num) {
	if (num <= 1)
    return num;
  else {
    return num * factorial(num - 1);
  }
}

function factorial (num, product = 1) {
  if (num === 0) return product;
  return factorial(num - 1, product * num);
}
// To check if you've completed the challenge, uncomment these console.logs!
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
//
function getLength(array, len = 0, i = 0) {
	if (!array[i])
    return len;
  
  return getLength(array, len + 1, i + 1);
}

function getLength(array, len = 0) {
	if (array[0] === undefined)
    return len;
  
  return getLength(array.slice(1), len + 1);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0
//
function pow(base, exponent) {
	
    if (exponent === 1) return base;
    if (exponent === 0) return 1;
    
    return base * pow(base, exponent - 1)
  }
  
  // To check if you've completed the challenge, uncomment these console.logs!
  // console.log(pow(2, 4)); // -> 16
  // console.log(pow(3, 5)); // -> 243
  //
  
  function flow(input, funcArray) {
	return funcArray.reduce((output, func, index) => func(output), input)
}

function flow (input, funcArray) {
    if (funcArray.length === 0) 
      return input;
    else
      return flow(funcArray[0](input), funcArray.slice(1))
  }

function flow(input, funcArray) {
  if (funcArray.length === 0) return input;
  
  const output = funcArray[0](input);
  return flow(output, funcArray.slice(1));
}
//
function shuffleCards(topHalf, bottomHalf, output = []) {
  // YOUR CODE HERE
  if (!topHalf.length) return [].concat(output, bottomHalf);
  if (!bottomHalf.length) return [].concat(output, topHalf);
  
  if (topHalf.length) output.push(topHalf.shift());
  if (bottomHalf.length) output.push(bottomHalf.shift());
  
  return shuffleCards(topHalf, bottomHalf, output);
}

// UNCOMMENT TO TEST YOUR WORK
const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
console.log(shuffleCards(topHalf, bottomHalf));
  /*-> ['Queen of Diamonds',
        'Jack of Hearts',
        'Five of Hearts',
        'Ten of Spades',
        'Ace of Spades',
        'Eight of Clubs',
      ]
  */
      var top = [1,3,5];
      var bottom = [2,4,6];
      console.log(shuffleCards(top, bottom));
      top = [1,3,5];
      bottom = [2,4,6,7,8,9];
      console.log(shuffleCards(top, bottom));

// To check if you've completed the challenge, uncomment this code!
function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -7
//
function cascade(number) {
	// Your code here!
  const helper = (str) => {
    if (!str.length) return;
  console.log(str)
  
  const char = str[str.length - 1];
  str = str.slice(0, str.length - 1);
  
  cascade(str);
  if (!str.length) return;
  str += char;
  console.log(str);
  }
	
  helper(number.toString());
}

function cascade(number) {
    const numberStr = new String(number);
    
    const helper = (numStr, end, backtrack) => {  
      console.log(+numStr.slice(0, end))
      if (end > 1 && backtrack) {
        end--;
        helper(numStr, end, true);
      } else if (end < numberStr.length)  {
        end++;
        helper(numStr, end, false);
      }
    }
    
    helper(numberStr, numberStr.length, true);
  }

  
  var cascade = number => {
    const numberStr = new String(number);
    
    const helper = (numStr, end, backtrack) => {
      if (end > numberStr.length) return;
      console.log(+numStr.slice(0, end))
      if (end > 1 && backtrack) {
        end--;
        backtrack = true
      } else if (end === 1 || !backtrack)  {
        end++;  
        backtrack = false
      }
      helper(numStr, end, backtrack);  
    }
       
    helper(numberStr, numberStr.length, true);
  }
  
  // // Uncomment to test your work!
  cascade(111)
  // // should print
  // /*
  // 111
  // 11
  // 1
  // 11
  // 111
  // */
  cascade(12345)