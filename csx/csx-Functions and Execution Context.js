// ADD CODE HERE
const createFunction = () => {
  return function () {
    return 'hello world';
  }
}
// Uncomment these to check your work!
const myFunction = createFunction();
console.log(myFunction()); //should log: 'hello world'

//
// ADD CODE HERE
const createFunctionWithInput = input => {
  return function () {
    return input;
  }
}
// UNCOMMENT THESE TO TEST YOUR WORK!
const sampleFunc = createFunctionWithInput('sample');
console.log(sampleFunc()); // should log: 'sample'
const helloFunc = createFunctionWithInput('hello');
console.log(helloFunc()); // should log: 'hello'
//

function outer() {
    let counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter() {
      counter++;
      console.log('counter', counter);
    }
    return incrementCounter;
  }
  
  const willCounter = outer();
  const jasCounter = outer();
  
  // Uncomment each of these lines one by one.
  // Before your do, guess what will be logged from each function call.
  
  willCounter();
  willCounter();
  willCounter();
  
  jasCounter();
  willCounter();
  //
  // ADD CODE HERE
const addByX = (X) => {
    return function (input) {
      return input + X;
    }
  }

const addByX = (x) => (input) => x + input;
  const addByTwo = addByX(2);
  
  // Now call addByTwo with an input of 1 and log the output
  
  // Now call addByTwo with an input of 2 and log the output
  
  //
// ADD CODE HERE
const once = (callback) => {
  let cache;
  return function (...args) {
    if (!cache)
      cache = callback(...args);
    
    return cache;
  }
}
const addByTwoOnce = once(function(num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7
  //
// ADD CODE HERE
var after = (count, callback) => {
  return function (...args) {
    if (--count === 0)
      return callback(...args);
    else
      return undefined;
    
  }
}

var after = (times, callback) => {
  let count = 0;
  return function (...args) {
    count++;
    if (count >= times)
      return callback(...args);
  }
}

var after = (n, callback) => {
    let i = 0;
    
    return function (param) {
      if (++i >= n)
        return callback(param);
      else
        return undefined
    }
  }

const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed
  //
// ADD CODE HERE
const delay = (callback, ms) => {
  return function() {
    setTimeout(callback, ms)
  }
}

// UNCOMMENT THE CODE BELOW TO TEST DELAY
let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); 												 // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second

//
// ADD CODE HERE
const saveOutput = (callback, password) => {
  const obj = {};
  
  return function (arg) {
    if (arg === password) {
  		return obj;    
    } else {
      obj[arg] = callback(arg);
      return obj[arg];
    }
  }
}

// Uncomment these to check your work!
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }
//
// ADD CODE HERE
const cycleIterator = (arr) => {
  let iter = 0;
  return function () {
    if (iter >= arr.length)
      iter = 0;
    
    return arr[iter++];
  }
}
// Uncomment these to check your work!
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'
//
// ADD CODE HERE
const defineFirstArg = (callback, arg) => {
  return function (...args) {
    return callback(arg, ...args);
  }
}

const defineFirstArg = (fn, first) => {
  return function (...args) {
    return fn.call(this, first, ...args);
  }
}
// Uncomment these to check your work!
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15
//
function hobbyTracker(hobbies) {
  const cacheObj = {};
  
  const setDefaults = () => {
    hobbies.forEach(hobby => {
    	cacheObj[hobby] = 0;
  	});
  }
  
  setDefaults();
  
  return function (hobby, hrs) {
  	if (!hobby)	{
      setDefaults();
      return 'tracker has been reset!';
    
    } else {
      if (hobby in cacheObj) {
        cacheObj[hobby] = cacheObj[hobby] + hrs;
      	return cacheObj;
      }
    }
  }
}

// Uncomment the code below to check your code:
const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
updateHobbies('yoga', 2);
updateHobbies('baking', 4);
updateHobbies('yoga', 1);
console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies()); // --> 'tracker has been reset!'
console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}

//
// ADD CODE HERE
const dateStamp = (fn) => {
  const dateStamp = (callback) => {
    return function (...args) {
      return {
        'date': new Date().toDateString(),
        'output': callback(...args)
      };
    };
  }
// Uncomment these to check your work!
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }
//
// ADD CODE HERE
const censor = () => {
  const pairs = {};
  return function (...args) {
    if (args.length == 2) {
      const [key, val] = args;
      pairs[key] = val;
    
    } else if (args.length === 1) {
      let str = args[0];
      for (var key in pairs) {
        if (str.includes(key) || str.indexOf(key)) {
          str = str.replaceAll(key, pairs[key], 'ig');
        }
      }
      return str;
    }
  }
}

const censor = () => {
  const map = new Map();
  
  return function (...args) {
    if (args.length === 2) {
      map.set(args[0], args[1]);
    
    } else if (args.length === 1) {
      let str = args[0]
      
      for (const key of Array.from(map.keys())) {
        
        if (str.includes(key) || str.indexOf(key)) {
          const word = new RegExp(key, 'ig');
          str = str.replaceAll(word, map.get(key));
        }
      }
      return str;
    }
  }
}
// Uncomment these to check your work!
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'