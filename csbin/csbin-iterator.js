// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');

// CHALLENGE 1

function sumFunc(arr) {
  // YOUR CODE HERE
  let sum = 0;
  for (const val of arr) sum += val;

  return sum;
}

// Uncomment the lines below to test your work
const array = [1, 2, 3, 4];
// console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr) {
  // YOUR CODE HERE
  let idx = 0;
  return function () {
    if (idx < arr.length) return arr[idx++];
  };
}

// Uncomment the lines below to test your work
// const array2 = ['a', 'b', 'c', 'd'];
// const myIterator = returnIterator(array2);
// console.log(myIterator()); // -> should log 'a'
// console.log(myIterator()); // -> should log 'b'
// console.log(myIterator()); // -> should log 'c'
// console.log(myIterator()); // -> should log 'd'

// CHALLENGE 2

function nextIterator(arr) {
  // YOUR CODE HERE
  const iterator = {
    idx: 0,
    next() {
      if (this.idx < arr.length) {
        return arr[this.idx++];
      }
    },
  };

  return iterator;
}

function nextIterator2(arr) {
  return {
    idx: 0,
    arr,
    next() {
      if (this.idx < this.arr.length) {
        return this.arr[this.idx++];
      }
    },
  };
}

// Uncomment the lines below to test your work
const array3 = [1, 2, 3];
const iteratorWithNext = nextIterator(array3);
// console.log(iteratorWithNext.next()); // -> should log 1
// console.log(iteratorWithNext.next()); // -> should log 2
// console.log(iteratorWithNext.next()); // -> should log 3

const nextIterator2 = function (arr) {
  const iterator = {
    idx: 0,
    next() {
      if (this.idx < arr.length) {
        return {
          done: false,
          value: arr[this.idx++],
        };
      } else {
        return { done: true, value: undefined };
      }
    },
  };

  return iterator;
};

// CHALLENGE 3

function sumArray(arr) {
  // YOUR CODE HERE
  // use your nextIterator function
  const iterator = nextIterator(arr);
  let done = false;
  let sum = 0;

  while (!done) {
    const val = iterator.next();
    if (!val) {
      done = true;
    } else {
      sum += val;
    }
  }

  return sum;
}

function sumArray(arr) {
  // YOUR CODE HERE
  // use your nextIterator function
  let sum = 0;
  const iterator = nextIterator2(arr);
  let iter = iterator.next();

  while (!iter.done) {
    sum += iter.value;
    iter = iterables.next();
  }

  return sum;
}

// Uncomment the lines below to test your work
// const array4 = [1, 2, 3, 4];
// console.log(sumArray(array4)); // -> should log 10

// CHALLENGE 4

function setIterator(set) {
  return {
    iterator: set.values(),

    next() {
      const it = this.iterator.next();
      if (!it.done) return it.value;
    },
  };
}

// Uncomment the lines below to test your work
const mySet = new Set("hey");
const iterateSet = setIterator(mySet);
// console.log(iterateSet.next()); // -> should log 'h'
// console.log(iterateSet.next()); // -> should log 'e'
// console.log(iterateSet.next()); // -> should log 'y'

// CHALLENGE 5
function indexIterator(arr) {
  // YOUR CODE HERE
  return {
    idx: 0,
    next() {
      if (this.idx < arr.length) {
        return [this.idx, arr[this.idx++]];
      }
    },
  };
}
function indexIterator(arr) {
  // YOUR CODE HERE
  let idx = 0;
  const iterator = {};
  iterator.next = function () {
    if (idx < arr.length) {
      const key = idx,
        val = arr[idx];
      idx++;

      return [key, val];
    }
  };
  return iterator;
}

// Uncomment the lines below to test your work
// const array5 = ['a', 'b', 'c', 'd'];
// const iteratorWithIndex = indexIterator(array5);
// console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
// console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
// console.log(iteratorWithIndex.next()); // -> should log [2, 'c']

// CHALLENGE 6
function Words(string) {
  this.words = string.match(/\w+/gi);
  this.iterator = this.words[Symbol.iterator]();
}

Words.prototype[Symbol.iterator] = function () {
  return this.iterator;
};
// Uncomment the lines below to test your work
// const helloWorld = new Words('Hello World');
// for (let word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'

function Words(string) {
  this.str = string;
}

Words.prototype[Symbol.iterator] = function () {
  // YOUR CODE HERE
  let index = 0;
  const splitStr = this.str.split(/\s/);
  return {
    next: function () {
      if (index < splitStr.length) {
        const value = splitStr[index++];

        return { value, done: false };
      } else {
        return { done: true };
      }
    },
  };
};

function Words(string) {
  this.str = string;
  this.words = this.str.match(/\w+/gi);
  this.index = 0;
}

Words.prototype.next = function () {
  if (this.index < this.words.length) {
    return {
      done: false,
      value: this.words[this.index++],
    };
  } else {
    return { done: true };
  }
};

Words.prototype[Symbol.iterator] = function () {
  return this;
};

// CHALLENGE 7
function valueAndPrevIndex(array) {
  return {
    prev: 0,
    index: 0,
    sentence() {
      this.prev = this.index;
      if (this.index === 0) return `${array[this.index++]} is the first`;
      else return `${array[this.index++]} was found after index ${this.prev}`;
    },
  };
}
////////////

function valueAndPrevIndex(array) {
  this.idx = 0;
  this.arr = array;
  this.len = array.length;
}

valueAndPrevIndex.prototype[Symbol.iterator] = function () {
  return this;
};

valueAndPrevIndex.prototype.next = function () {
  if (this.idx < this.len) return this.idx++;
};

valueAndPrevIndex.prototype.sentence = function () {
  const id = this.next();

  if (id === 0) return `${this.arr[id]} is the first`;
  else if (id < this.len) return `${id + 1} was found after index ${id}`;
};

const returnedSentence = new valueAndPrevIndex([4, 5, 6]);
// console.log(returnedSentence.sentence());
// console.log(returnedSentence.sentence());
// console.log(returnedSentence.sentence());

//CHALLENGE 8

function* createConversation(str) {
  const output = "english" ? "hello there" : "gibberish";

  yield setInterval(() => {
    console.log(output);
  }, 3000);
}

// createConversation('english').next()

//CHALLENGE 9
function waitForVerb(noun) {
  const verb = "Jumps";
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${noun} ${verb}`), 3000);
  });
}

async function f(noun) {
  const sentence = await waitForVerb(noun);
  console.log(sentence);
}

f("dog");

//
function waitForVerb(noun) {
  const verb = "jumps";
  return `${noun} ${verb}`;
}

async function f(noun) {
  const sentence = await waitForVerb(noun);

  setTimeout(() => {
    console.log(sentence);
  }, 3000);
}

f("dog");
