/* CHALLENGE 1 */

function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?

/* CHALLENGE 2 */

function delayedGreet() {
  // ADD CODE HERE
  setTimeout(() => {
    console.log("welcome");
  }, 3000);
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welco7me

/* CHALLENGE 3 */

function helloGoodbye() {
  // ADD CODE HERE
  setTimeout(() => {
    console.log("good bye");
  }, 2000);
  console.log("hello");
}
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */

function brokenRecord() {
  // ADD CODE HERE
  const interval = setInterval(() => {
    console.log("hi again");
  }, 1000);
}
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */

function limitedRepeat() {
  // ADD CODE HERE
  const interval = setInterval(() => {
    console.log("hi for now");
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
  }, 5000);
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

function everyXsecsForYsecs(callback, inter, duration) {
  // ADD CODE HERE
  const interval = setInterval(callback, inter * 1000);
  setTimeout(() => {
    clearInterval(interval);
  }, duration * 1000);
}
// Uncomment the following lines to check your work!
function theEnd() {
  console.log("This is the end!");
}
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!

/* CHALLENGE 7 */

function delayCounter(target, wait) {
  let i = 1;
  let interval = null;

  return () => {
    interval = setInterval(() => {
      console.log(i);
      if (i++ === target) clearInterval(interval);
    }, wait);
  };
}

function delayCounter(target, wait) {
  let num = 1,
    interval = null;
  return () => {
    interval = setInterval(() => {
      if (num === target) {
        clearInterval(interval);
      }

      console.log(num++);
    }, wait);
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const countLogger = delayCounter(3, 1000)
// countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */

function promised(val) {
  // ADD CODE HERE
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(val);
    }, 2000);
  });
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const createPromise = promised('wait for it...');
// createPromise.then((val) => console.log(val));
// will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */

class SecondClock {
  constructor(cb) {
    // ADD CODE HERE
    this.cb = cb;
    this.sec = 0;
    this.interval = null;
  }
  // ADD METHODS HERE
  start() {
    this.interval = setInterval(() => {
      if (this.sec === 60) this.sec = 0;
      this.cb(++this.sec);
    }, 1000);
  }
  reset() {
    clearInterval(this.interval);
    this.interval = null;
    this.sec = 0;
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const clock = new SecondClock((val) => { console.log(val) });
// console.log("Started Clock.");
// clock.start();
// setTimeout(() => {
//     clock.reset();
//     console.log("Stopped Clock after 6 seconds.");
// }, 6000);

/* CHALLENGE 10 */

function debounce(callback, interval) {
  // ADD CODE HERE
  let timer = null;
  let done = true;

  return () => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      done = true;
    }, interval);

    if (done) {
      done = false;

      return callback();
    } else return undefined;
  };
}

function debounce(callback, interval) {
  // ADD CODE HERE
  let readyToCall = true;
  let timer;

  return function () {
    if (readyToCall) {
      readyToCall = false;

      timer = setTimeout(() => {
        readyToCall = true;
      }, interval);

      return callback();
    } else {
      clearTimeout(timer);

      timer = setTimeout(() => {
        readyToCall = true;
      }, interval);

      return undefined;
    }
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
function giveHi() {
  return "hi";
}
const giveHiSometimes = debounce(giveHi, 3000);
console.log(giveHiSometimes()); // -> 'hi'
setTimeout(function () {
  console.log(giveHiSometimes());
}, 2000); // -> undefined
setTimeout(function () {
  console.log(giveHiSometimes());
}, 4000); // -> undefined
setTimeout(function () {
  console.log(giveHiSometimes());
}, 8000); // -> 'hi'

/*function debounce(callback, interval) {
  var timer,
    readyToCall = true;
  
  // @returns callback(), or "undefined" depending on if interval ms have ellapsed since last call to debouncedFunction
  /*function debouncedFunction() {
    if (readyToCall) {
      readyToCall = false;

      timer = setTimeout(() => {
        readyToCall = true;
      }, interval);

      return callback();
    } else {
      // when debouncedFunction is not ready to be called,the timer running from the 
      // previous call should be reset—making it "debouced three seconds from every call", 
      // instead of "debounded three seconds from every successful call"
      clearTimeout(timer);

      timer = setTimeout(() => {
        readyToCall = true;
      }, interval);

      return "unsucessful";
    }
  }

  return debouncedFunction;
}*/

/*function debounce(callback, interval) {
  // ADD CODE HERE
  let isScheduled = false;
  let timeout = null;
  
  var debounced = () => {
    return new Promise((resolve, reject) => {
      timeout = setTimeout(() => {
        resolve(callback());
        isScheduled = false;
      }, interval);
    });
	}
  
  let result = undefined;
  return async function () {
    
    if (isScheduled) {
      clearTimeout(timeout)
      result = await debounced();

    } else {
      isScheduled = true;
      result = await debounced();
    }
    	
    	
      console.log(result);
  }
}*/
