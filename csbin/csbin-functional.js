// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');

// ##########################
// # Higher-Order Functions #
// ##########################

// Challenge 1
const addTwo = (num) => num + 2;

// To check if you've completed this function, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
const addS = (word) => `${word}s`;

// Uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
const map = (array, callback) => {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(callback(array[i]));
  }
  return arr;
};

// console.log(map([1, 2, 3], addTwo)); // [3, 4, 5]

const multiplyByTwos = (x) => x * 2;
console.log(map([1, 2, 3, 4, 5], multiplyByTwos)); //-> [2,4,6,8,10]
console.log(multiplyByTwos(1)); //-> 2
console.log(multiplyByTwos(2)); //-> 4

// Challenge 4

const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};
// let alphabet = "";
// const letters = ["a", "b", "c", "d"];
// forEach(letters, char => alphabet += char);
// console.log(alphabet);

// See for yourself if your forEach works!

// Challenge 5
const mapWith = (array, callback) => {
  const arr = [];
  forEach(array, (arg) => {
    arr.push(callback(arg));
  });
  return arr;
};
const divBy2 = (x) => Math.trunc(x / 2);
console.log(mapWith([5, 6, 7, 8], divBy2)); // [2,3,3,4]
const multiplyBy2 = (num) => num * 2;
console.log(mapWith([5, 6, 7, 8], multiplyBy2)); // [10, 12, 14, 16]

// Challenge 6
const reduce2 = (array, callback, initialValue) =>
  array.reduce((acc, val) => callback(acc, val), initialValue);

const reducer3 = (array, callback, initialValue) => {
  let accumulator;
  if (initialValue === null) accumulator = array[0];
  else accumulator = initialValue;

  if (!array.length) return accumulator;

  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }

  return accumulator;
};

var nums = [4, 1, 3];
var add = (a, b) => a + b;
console.log(reducer(nums, add, 0)); //-> 8

var nums2 = [1, 2, 3, 4, 5, 6];
const mulAll = (acc, num) => (acc < 1 ? num : acc * num);
console.log(reducer(nums2, mulAll, 0)); //720

nums2 = [1, 2, 3, 4];
console.log(reducer(nums2, mulAll, 5)); //120

const adds = (a, b) => a + b;
var chars = ["a", "b", "c", "d"];
console.log(reduce(chars, adds, "")); //-> abcd

const reduce = (array, callback, initialValue) => {
  let acc, idx = 0;
  if (initialValue) acc = initialValue;
  else acc = array[idx++];
  
  if (idx >= array.length || !array.length) return acc;

  for (let i = idx; i < array.length; i++) 
    acc = callback(acc, array[i]);
  
  return acc;
};

const nums = [4, 1, 3];
const add = (a, b) => a + b;
// console.log(reduce(nums, add, 0));   //-> 8
const chars = ["a", "b", "c", "d"];
// console.log(reduce(chars, add, ''));   //-> abcd

// Challenge 7
var intersection = (...arrays) => {
  return arrays.slice(1).reduce((acc, arr) => {
    return acc.filter((n) => arr.includes(n));
  }, arrays[0]);
};

const intersection2 = (...arrays) =>
  arrays
    .slice(1)
    .reduce(
      (accum, array) => array.filter((num) => accum.includes(num)),
      arrays[0]
    );

const intersection = (...arrays) => {
  return arrays.slice(1).reduce((accum, array) => {
    return accum.filter(
      (num) => array.includes(num) || array.indexOf(num) > -1
    );
  }, arrays[0]);
};

var intersection = (...arrays) => {
  return arrays.slice(1).reduce((acc, array, index) => {
    const accum = [];
    array.forEach((val) => {
      if (acc.includes(val)) accum.push(val);
    });
    return accum;
  }, arrays[0]);
};

const intersection3 = (...arrays) => {
  let acc = arrays.length ? arrays.shift() : [];

  while (arrays.length) {
    const newAcc = [];
    const arr = arrays.shift();

    for (const num of arr) {
      if (acc.includes(num)) {
        newAcc.push(num);
      }
    }
    acc = newAcc.slice();
  }

  return acc;
};

var intersection = (...arrays) => {
  let acc = arrays.pop();

  while (arrays.length) {
    const newAcc = [];
    const current = arrays.pop();

    current.forEach((val) => {
      if (acc.includes(val)) newAcc.push(val);
    });

    acc = newAcc;
  }
  return acc;
};
// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]
// console.log(intersection([1, 5, 10, 4, 20], [5, 6, 1, 4, 7], [1, 4, 15, 5, 60]));
// should log: [1, 4, 5]

// Challenge 8
var union = (...arrs) =>
  arrs.reduce((acc, arr) => [...new Set([...acc, ...arr]).values()], []);

const union2 = (...arrays) =>
  arrays
    .slice(1)
    .reduce(
      (accum, array) =>
        array.reduce(
          (acc, num) => (acc.includes(num) ? acc : [...acc, num]),
          accum
        ),
      arrays[0]
    );

const union = (...arrays) => {
  return arrays.slice(1).reduce((array, accum) => {
    return array.reduce((acc, num) => {
      if (!acc.includes(num) || acc.indexOf(num) < 0) acc.push(num);

      return acc;
    }, accum);
  }, arrays[0]);
};

var union = (...arrays) => {
  return arrays.slice(1).reduce((acc, arr) => {
    arr.forEach((val) => {
      if (!acc.includes(val)) acc.push(val);
    });
    return acc;
  }, arrays[0]);
};

var union = (...arrays) => {
  return arrays.reduce((acc, arr) => {
    const filtered = arr.filter((el) => !acc.includes(el));
    return [].concat(acc, filtered);
  });
};

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// console.log(union([1, 2, 3, 4], [1, 33, 2, 4, 55], [2, 2, 2, 1]));	//[1, 2, 3, 4, 33, 55]
// // should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
const objOfMatches = (array1, array2, callback) => {
  const obj = {};

  array1.forEach((key, index) => {
    if (callback(key) === array2[index]) {
      obj[key] = array2[index];
    }
  });

  return obj;
};

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], (str) => str.toUpperCase()));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
var multiMap = (arrVals, arrCallbacks) => {
  return arrVals.reduce((accObj, val, index) => {
    accObj[val] = arrCallbacks.map((callback) => callback(val));
    return accObj;
  }, {});
};

const multiMap = (arrVals, arrCallbacks) =>
  arrVals.reduce(
    (accum, val) => ({
      ...accum,
      [val]: arrCallbacks.reduce(
        (acc, callback) => [...acc, callback(val)],
        []
      ),
    }),
    {}
  );

const multiMap = (arrVals, arrCallbacks) =>
  arrVals.reduce(
    (accum, val) => ({
      ...accum,
      [val]: arrCallbacks.map((callback) => callback(val)),
    }),
    {}
  );

const multiMap = (arrVals, arrCallbacks) => {
  const obj = {};

  for (const val of arrVals) {
    /* obj[val] = arrCallbacks.reduce(
      (accum, callback) => [...accum, callback(val)],
      []
    ); */
    obj[val] = arrCallbacks.map((callback) => callback(val), []);
  }

  return obj;
};

var multiMap = (arrVals, arrCallbacks) => {
  const obj = {};
  arrVals.forEach((val) => {
    obj[val] = arrCallbacks.map((callback) => callback(val));
  });
  return obj;
};

var multiMap = (arrVals, arrCallbacks) => {
  const obj = {};

  for (let i = 0; i < arrVals.length; i++) {
    const arr = [];

    arrCallbacks.forEach((callback) => {
      arr.push(callback(arrVals[i]));
    });

    obj[arrVals[i]] = arr;
  }
  return obj;
};

// console.log(multiMap(['catfood', 'glue', 'beer'], [(str) => str.toUpperCase(), (str) => str[0].toUpperCase() + str.slice(1).toLowerCase(), (str) => str + str]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
const commutative = (func1, func2, value) => {
  return func1(func2(value)) === func2(func1(value));
};

// /*** Uncomment these to check your work! ***/
const multBy3 = (n) => n * 3;
const divBy4 = (n) => n / 4;
const subtract5 = (n) => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 12
const objFilter2 = (obj, callback) =>
  Object.fromEntries(
    Object.entries(obj).filter(([key, val]) => callback(key) === val)
  );

var objFilter = (obj, callback) => {
  const object = {};

  for (var key in obj) {
    if (callback(key) === obj[key]) object[key] = obj[key];
  }
  return object;
};

var objFilter = (obj, callback) => {
  const filteredObject = {};

  const keys = Object.keys(obj);
  for (const key of keys) {
    if (callback(key) === obj[key]) {
      filteredObject[key] = obj[key];
    }
  }

  return filteredObject;
};

// /*** Uncomment these to check your work! ***/
const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = (n) => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 13
const rating2 = (arrOfFuncs, value) =>
  (arrOfFuncs.filter((func) => func(value)).length / arrOfFuncs.length) * 100;

const rating = (arrOfFuncs, value) => {
  const len = arrOfFuncs.length;
  let trueCount = 0;

  for (const callback of arrOfFuncs) {
    if (callback(value)) trueCount++;
  }

  // return 100 * (trueCount / len);
  return Number.parseFloat((trueCount / len).toFixed(2)) * 100;
};

// /*** Uncomment these to check your work! ***/
const isEven = (n) => n % 2 === 0;
const greaterThanFour = (n) => n > 4;
const isSquare = (n) => Math.sqrt(n) % 1 === 0;
const hasSix = (n) => n.toString().includes("6");
const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75
// console.log(rating(checks, 25));	// 50

// Challenge 14
const pipe = (arrOfFuncs, value) =>
  arrOfFuncs.reduce((acc, func) => func(acc), value);

// /*** Uncomment these to check your work! ***/
const capitalize = (str) => str.toUpperCase();
const addLowerCase = (str) => str + str.toLowerCase();
const repeat = (str) => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

// Challenge 15
const highestFunc = (objOfFuncs, subject) => {
  let highestKey = null,
    largestNum = 0;

  for (const [key, callback] of Object.entries(objOfFuncs)) {
    if (callback(subject) > largestNum) {
      largestNum = callback(subject);
      highestKey = key;
    }
  }

  return highestKey;
};

const highestFunc2 = (objOfFuncs, subject) => {
  let largest = 0;
  let largestKey = null;

  for (var key in objOfFuncs) {
    const executed = objOfFuncs[key](subject);

    if (executed > largest) {
      largest = executed;
      largestKey = key;
    }
  }

  return largestKey;
};

// /*** Uncomment these to check your work! ***/
const groupOfFuncs = {};
groupOfFuncs.double = (n) => n * 2;
groupOfFuncs.addTen = (n) => n + 10;
groupOfFuncs.inverse = (n) => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// ###########
// # Closure #
// ###########

// Challenge 1
const createFunction = () => {
  return function () {
    console.log("Hello");
  };
};

// UNCOMMENT THESE TO TEST YOUR WORK!
// const function1 = createFunction();
// function1();

// Challenge 2
const createFunctionPrinter = (input) => {
  return function () {
    console.log(input);
  };
};

// UNCOMMENT THESE TO TEST YOUR WORK!
// const printSample = createFunctionPrinter('sample');
// printSample();
// const printHello = createFunctionPrinter('hello');
// printHello();

// Challenge 3
const outer = () => {
  let counter = 0; // this variable is outside incrementCounter's scope
  const incrementCounter = () => {
    counter++;
    console.log("counter", counter);
  };
  return incrementCounter;
};

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter(); // 1
// willCounter(); // 2
// willCounter(); // 3

// jasCounter();	// 1
// willCounter();	// 4

// Challenge 4
const addByX = (x) => {
  return function (input) {
    return x + input;
  };
};

const addByTwo = addByX(2);

// now call addByTwo with an input of 1
// console.log(addByTwo(1)) // 3

// now call addByTwo with an input of 2
// console.log(addByTwo(2)) // 4

// const addByTwo = addByX(2);
// console.log(addByTwo(1)); //should return 3
// console.log(addByTwo(2)); //should return 4
// console.log(addByTwo(3)); //should return 5

// const addByThree = addByX(3);
// console.log(addByThree(1)); //should return 4
// console.log(addByThree(2)); //should return 5

// const addByFour = addByX(4);
// console.log(addByFour(4)); //should return 8
// console.log(addByFour(10)); //should return 14

// Challenge 5
const once = (func) => {
  let output = null;

  return function (input) {
    if (output) return output;
    else output = func(input);

    return output;
  };
};

const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(4));  //should log 6
// console.log(onceFunc(10));  //should log 6
// console.log(onceFunc(9001));  //should log 6

// Challenge 6
const after = (count, func) => {
  let index = 0;
  return function () {
    if (++index === count) func();
  };
};

const called = () => console.log("hello");
const afterCalled = after(3, called);

// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed

// Challenge 7
const delay = (func, wait, ...args) => {
  setTimeout(() => func(...args), wait);
};
const delay2 = (func, wait, ...args) => {
  setTimeout(() => func.call(this, ...args), wait);
};

let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second

// Challenge 8
const russianRoulette = (n) => {
  let i = 0;
  return () => {
    while (++i < n) return "click";
    if (i === n) return "bang";
    else return "reload to play again";
  };
};

// /*** Uncomment these to check your work! ***/
const play = russianRoulette(3);
// console.log(play()); // should log: 'click'
// console.log(play()); // should log: 'click'
// console.log(play()); // should log: 'bang'
// console.log(play()); // should log: 'reload to play again'
// console.log(play()); // should log: 'reload to play again'

// Challenge 9
const average = () => {
  const arr = [];

  return (num) => {
    if (num) arr.push(num);

    if (!arr.length) return 0;
    else return arr.reduce((acc, n) => (acc += n), 0) / arr.length;
  };
};

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // should log: 0
// console.log(avgSoFar(4)); // should log: 4
// console.log(avgSoFar(8)); // should log: 6
// console.log(avgSoFar()); // should log: 6
// console.log(avgSoFar(12)); // should log: 8
// console.log(avgSoFar()); // should log: 8

// Challenge 10
const makeFuncTester = (arrOfTests) => {
  return (callback) => {
    return arrOfTests.every((arr) => callback(arr[0]) === arr[1]);
  };
};

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(["hello", "hellO"]);
capLastTestCases.push(["goodbye", "goodbyE"]);
capLastTestCases.push(["howdy", "howdY"]);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = (str) => str.toUpperCase();
const capLastAttempt2 = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase();
const capLastAttempt3 = (str) => str.toLowerCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // should log: false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // should log: true
// console.log(shouldCapitalizeLast(capLastAttempt3)); // should log: false

// Challenge 11
const makeHistory = (limit) => {
  const history = [];

  return (str) => {
    if (str === "undo") {
      if (history.length) return `${history.pop()} undone`;
      else return `nothing to undo`;
    } else {
      if (history.length === limit) history.shift();

      history.push(str);
      return `${str} done`;
    }
  };
};

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // should log: 'jump done'
// console.log(myActions('undo')); // should log: 'jump undone'
// console.log(myActions('walk')); // should log: 'walk done'
// console.log(myActions('code')); // should log: 'code done'
// console.log(myActions('pose')); // should log: 'pose done'
// console.log(myActions('undo')); // should log: 'pose undone'
// console.log(myActions('undo')); // should log: 'code undone'
// console.log(myActions('undo')); // should log: 'nothing to undo'

// Challenge 12
const blackjack = (array) => {
  const dealer = (num1, num2) => {
    let sum,
      bust = false;

    return () => {
      if (bust) return "you are done!";

      if (!sum) {
        sum = num1 + num2;
        return sum;
      }
      // console.log('check', sum, array[0])
      if (sum + array[0] <= 21) {
        sum += array.shift();
        return sum;
      } else {
        array.shift();
        bust = true;
        return "bust";
      }
    };
  };

  return dealer;
};

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
const deal = blackjack([
  2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11,
]);

// /*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // should log: 9
console.log(i_like_to_live_dangerously()); // should log: 11
console.log(i_like_to_live_dangerously()); // should log: 17
console.log(i_like_to_live_dangerously()); // should log: 18
console.log(i_like_to_live_dangerously()); // should log: 'bust'
console.log(i_like_to_live_dangerously()); // should log: 'you are done!'
console.log(i_like_to_live_dangerously()); // should log: 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
const i_TOO_like_to_live_dangerously = deal(2, 2);
console.log(i_TOO_like_to_live_dangerously()); // should log: 4
console.log(i_TOO_like_to_live_dangerously()); // should log: 15
console.log(i_TOO_like_to_live_dangerously()); // should log: 19
console.log(i_TOO_like_to_live_dangerously()); // should log: 'bust'
console.log(i_TOO_like_to_live_dangerously()); // should log: 'you are done!
console.log(i_TOO_like_to_live_dangerously()); // should log: 'you are done!

// /*** PLAYER 3 ***/
const i_ALSO_like_to_live_dangerously = deal(3, 7);
console.log(i_ALSO_like_to_live_dangerously()); // should log: 10
console.log(i_ALSO_like_to_live_dangerously()); // should log: 13
console.log(i_ALSO_like_to_live_dangerously()); // should log: 'bust'
console.log(i_ALSO_like_to_live_dangerously()); // should log: 'you are done!
console.log(i_ALSO_like_to_live_dangerously()); // should log: 'you are done!

// ##########################
// # Extension Challenges   #
// ##########################

// Challenge 1
const functionValidator2 = (funcArr, input, output) =>
  funcArr.filter((func) => func(input) === output);

const functionValidator = (funcArr, input, output) => {
  return funcArr.reduce((acc, callback) => {
    if (callback(input) === output) acc.push(callback);

    return acc;
  }, []);
};

const addFive = (num) => num + 5;
const multiplyByTwo = (num) => num * 2;
const subtractOne = (num) => num - 1;
const fnArr = [addFive, multiplyByTwo, subtractOne];

// console.log(functionValidator(fnArr, 5, 10)) // should log [num => num + 5, num => num * 2]

// Challenge 2
var allClear = (funcArr, value) => funcArr.every((func) => func(value));

var allClear = (funcArr, value) => {
  return reduce((acc, callback) => {
    if (acc) return callback(value);
    else return acc;
  }, true);
};

var allClear = (funcArr, value) => {
  return funcArr.reduce((acc, callback) => {
    return acc && callback(value);
  }, true);
};

const isOdd = (num) => num % 2 === 1;
const isPositive = (num) => num > 0;
const multipleOfFive = (num) => num % 5 === 0;
const numFnArr = [isOdd, isPositive, multipleOfFive];
// console.log(allClear(numFnArr, 25)) // should log true
// console.log(allClear(numFnArr, -25)) // should log false
// console.log(allClear(numFnArr, 95)) // should log true
// console.log(allClear(numFnArr, 100)) // should log false

// Challenge 3
const numSelectString3 = (numArr) => {
  return numArr
    .filter((num) => num % 2)
    .sort((a, b) => a - b)
    .reduce((acc, n) => (acc.length === 0 ? `${n}` : `${acc}, ${n}`), "");
};

const numSelectString = (numArr) => {
  const f = numArr.filter((num) => num % 2);
  const s = f.sort((a, b) => a - b);
  const r = s.slice(1).reduce((acc, num) => `${acc}, ${num}`, s[0]);
  return r;
};

const numSelectString2 = (numArr) => {
  return numArr
    .filter((num) => num % 2)
    .sort((a, b) => a - b)
    .join(", ");
};

// var nums2 = [17, 34, 3, 12]
// console.log(numSelectString(nums2)) // should log "3, 17"

// var nums2 = [11, 33, 77, 49, 62, 58, 42]
// console.log(numSelectString(nums2))

// Challenge 4
const movieSelector2 = (moviesArr) =>
  moviesArr
    .filter((movie) => movie.score > 5)
    .reduce((acc, movie) => [...acc, movie.title], [])
    .map((movie) => movie.toUpperCase());

var movieSelector = (moviesArr) => {
  let movies = moviesArr.filter((movie) => movie.score > 5);

  movies = movies.map((movie) => {
    movie.title = movie["title"].toUpperCase();
    return movie;
  });

  movies = movies.reduce((acc, movie) => {
    acc.push(movie.title);
    return acc;
  }, []);

  return movies;
};

var movieSelector = (moviesArr) => {
  return moviesArr
    .filter((movie) => movie.score > 5)
    .map((movie) => {
      movie.title = movie["title"].toUpperCase();
      return movie;
    })
    .reduce((acc, movie) => {
      acc.push(movie.title);
      return acc;
    }, []);
};

const movies = [
  { id: 1, title: "Pan's Labyrinth", score: 9 },
  { id: 37, title: "Manos: The Hands of Fate", score: 2 },
  { title: "Air Bud", score: 5 },
  { title: "Hackers", score: 7 },
];
// console.log(movieSelector(movies)) // should log [ "PAN'S LABYRINTH", "HACKERS" ]

// Challenge 5
const curriedAddThreeNums2 = (num1) => (num2) => (num3) => num1 + num2 + num3;

var curriedAddThreeNums = (num1) => {
  return (num2) => {
    return (num3) => {
      return num1 + num2 + num3;
    };
  };
};

// console.log(curriedAddThreeNums(3)(-1)(1)); // should log 3
// console.log(curriedAddThreeNums(1)(3)(7)) //should return 11

// Challenge 6
const curriedAddTwoNumsToFive = (num1) => (num2) =>
  curriedAddThreeNums(num1)(num2)(5);

const curriedAddTwoNumsToFive2 = (num) => {
  return curriedAddThreeNums(5)(num);
};

// console.log(curriedAddTwoNumsToFive(6)(7)) // should log 18
