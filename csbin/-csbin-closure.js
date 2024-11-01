// CHALLENGE 1
function createFunction() {
  return () => {
    console.log("hello");
  };
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
// function1(); // => should console.log('hello');

// CHALLENGE 2
function createFunctionPrinter(input) {
  return () => {
    console.log(input);
  };
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter("sample");
// printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter("hello");
// printHello(); // => should console.log('hello');

// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter(); //1
// willCounter();	//2
// willCounter();	//3

// jasCounter();	//1
// willCounter();	//4

function addByX(x) {
  return (input) => x + input;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// console.log(addByTwo(1)); // => should return 3
// console.log(addByTwo(2)); // => should return 4
// console.log(addByTwo(3)); // => should return 5

// const addByThree = addByX(3);
// console.log(addByThree(1)); // => should return 4
// console.log(addByThree(2)); // => should return 5

// const addByFour = addByX(4);
// console.log(addByFour(4)); // => should return 8
// console.log(addByFour(5)); // => should return 9

// CHALLENGE 4
function once(func) {
  let output = null;
  return (input) => {
    if (output) return output;

    output = func(input);
    return output;
  };
}

function once(func) {
  let output = null;

  return (input) => {
    if (output !== null) return output;

    output = func(input);
    return output;
  };
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6

// CHALLENGE 5
function after(count, func) {
  let n = 0;
  return () => {
    ++n;
    if (n === count) func();
  };
}

// /*** Uncomment these to check your work! ***/
const called = function () {
  console.log("hello");
};
const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed

// CHALLENGE 6
function delay(func, wait, ...args) {
  return () => {
    setTimeout(() => {
      func(...args);
    }, wait);
  };
}

const ob = { count: 0 };
const fn = (o) => ++o.count;
const delayedFn = delay(fn, 1000, ob);
delayedFn();
console.log(ob.count); // should print '0'
setTimeout(() => console.log(ob.count), 1000); // should print '1' after 1 second
//

// CHALLENGE 7
function rollCall(names) {
  let i = 0;
  return () => {
    if (i <= names.length - 1) console.log(names[i++], i);
    else console.log("Everyone accounted for");
  };
}

// /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'

// CHALLENGE 8
function saveOutput(func, magicWord) {
  const obj = {};

  return (key) => {
    if (key === magicWord) return obj;

    obj[key] = func(key);
    return obj[key];
  };
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function (num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, "boo");
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

// CHALLENGE 9
function cycleIterator(array) {
  let i = 0;

  return () => {
    if (i === array.length) i = 0;

    return array[i++];
  };
}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ["Fri", "Sat", "Sun"];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'

// CHALLENGE 10
function defineFirstArg(func, arg) {
  return (...args) => {
    return func(arg, ...args);
  };
}

// /*** Uncomment these to check your work! ***/
const subtract = function (big, small) {
  return big - small;
};
const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15

// CHALLENGE 11
function dateStamp(func) {
  const obj = {};

  return function (...args) {
    obj["date"] = new Date().toUTCString();
    obj["output"] = func(...args);

    return obj;
  };
}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp((n) => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// CHALLENGE 12
function censor() {
  const obj = {};

  return (string1, string2) => {
    if (string1 && string2) {
      obj[string1] = string2;
    } else if (string1) {
      for (const key in obj) {
        if (string1.includes(key)) {
          string1 = string1.replaceAll(`${key}`, obj[key]);
          // string1 = `${string1.substring(0, string1.indexOf(key))}${obj[key]}${string1.substring(string1.indexOf(key) + key.length)}`;
        }
      }

      return string1;
    }
  };
}

function censor() {
  const obj = {};

  return (str1, str2) => {
    if (str1 && str2) obj[str1] = str2;

    if (str1 && !str2) {
      for (var key in obj) {
        if (str1.indexOf(key) > -1) {
          let bStart = str1.indexOf(key);
          let aEnd = bStart + key.length;

          str1 = `${str1.slice(0, bStart)}${obj[key]}${str1.slice(aEnd)}`;
        }
      }

      return str1;
    }
  };
}

// /*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene("dogs", "cats");
changeScene("quick", "slow");
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'

// CHALLENGE 13
function createSecretHolder(value) {
  return {
    secret: value,
    getSecret() {
      return this.secret;
    },
    setSecret(val) {
      this.secret = val;
    },
  };
}

function createSecretHolder(secretVal) {
  return {
    value: secretVal,

    get secret() {
      return this.value;
    },

    set secret(val) {
      this.value = val;
    },

    getSecret() {
      return this.value;
    },

    setSecret(val) {
      this.value = val;
    },
  };
}

// /*** Uncomment these to check your work! ***/
// console.log(createSecretHolder(5))
var obj = createSecretHolder(5);
// console.log(obj.getSecret()) // => returns 5
// obj.setSecret(2);
// console.log(obj.getSecret()) // => returns 2

// CHALLENGE 14
function callTimes() {
  let times = 0;

  return () => {
    return ++times;
  };
}

// /*** Uncomment these to check your work! ***/
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
// console.log(myNewFunc1()); // => 1
// console.log(myNewFunc1()); // => 2
// console.log(myNewFunc2()); // => 1
// console.log(myNewFunc2()); // => 2

// CHALLENGE 15
function roulette(n) {
  let i = 0;

  return function () {
    ++i;

    if (i <= n - 1) return "spin";
    else if (i === n) return "win";
    else return "pick a number to play again";
  };
}

// /*** Uncomment these to check your work! ***/
const play = roulette(3);
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'win'
// console.log(play()); // => should log 'pick a number to play again'
// console.log(play()); // => should log 'pick a number to play again'

// CHALLENGE 16
function average() {
  let n = 0,
    sum = 0,
    avg = 0;

  return function (arg) {
    if (arg) {
      sum += arg;
      n++;

      avg = sum / n;
      return avg;
    } else return avg;
  };
}

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8

// CHALLENGE 17
const makeFuncTester = (arrOfTests) => (callback) =>
  arrOfTests.every((tests) => callback(tests[0]) === tests[1]);

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(["hello", "hellO"]);
capLastTestCases.push(["goodbye", "goodbyE"]);
capLastTestCases.push(["howdy", "howdY"]);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = (str) => str.toUpperCase();
const capLastAttempt2 = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

// CHALLENGE 18
function makeHistory(limit) {
  const queue = [];

  return (string) => {
    if (string) {
      if (string === "undo") {
        if (queue.length) return `${queue.pop()} undone`;
        else return `nothing to undo`;
      } else {
        queue.push(string);

        if (queue.length > limit) queue.shift();

        return `${string} done`;
      }
    }
  };
}

// /*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
// console.log(myActions('jump')); // => should log 'jump done'
// console.log(myActions('undo')); // => should log 'jump undone'
// console.log(myActions('walk')); // => should log 'walk done'
// console.log(myActions('code')); // => should log 'code done'
// console.log(myActions('pose')); // => should log 'pose done'
// console.log(myActions('undo')); // => should log 'pose undone'
// console.log(myActions('undo')); // => should log 'code undone'
// console.log(myActions('undo')); // => should log 'nothing to undo'

// CHALLENGE 19
function blackjack(array) {
  const DEALER = (arg1, arg2) => {
    let sum = null;
    let bust = false;
    let i = 0;

    const PLAYER = () => {
      if (bust) return "you are done!";

      if (sum == null) {
        sum = arg1 + arg2;
        return sum;
      } else {
        sum += array[i++];

        if (sum <= 21) {
          return sum;
        } else if (sum > 21) {
          bust = true;
          return "bust";
        }
      }
    };

    return PLAYER;
  };
  return DEALER;
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
const deal = blackjack([
  2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11,
]);

// /*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
