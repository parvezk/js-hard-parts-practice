// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');

// Challenge 1
function countdown(n) {
  if (n <= 0) return;
  console.log(n);
  countdown(n - 1);
}

// To check if you've completed it, uncomment these console.logs!
// countdown(5);
countdown(10);

// Challenge 2
var sum = (arr) => arr.reduce((acc, val) => (acc += val), 0);

function sum(array) {
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];

  return array[0] + sum(array.slice(1));
}

function sum(array, index = 0, result = 0) {
  if (index === array.length) return result;

  return sum(array, index + 1, result + array[index]);
}

// uncomment these to check your work
// console.log(sum([1,1,1])); // -> returns 3
// console.log(sum([1,2,3,4,5,6])); // -> returns 21

// Challenge 3
function palindrome(string, i = 0, j = string.length - 1) {
  const regex = /^[\w]/i;
  const re = new RegExp(/^[\w]/, "i");

  while (i < string.length && !re.test(string[i])) i++;
  while (j >= 0 && !re.test(string[j])) j--;

  if (i === j) return true;

  if (string[i].toLowerCase() !== string[j].toLowerCase()) return false;

  return palindrome(string, i + 1, j - 1);
}

function palindrome(string) {
  const str = string.replaceAll(/\s/gi, "");
  const regex = /\w/;

  let i = 0,
    j = str.length - 1;

  while (i < j) {
    while (!regex.test(str[i])) i++;

    while (!regex.test(str[j])) j--;

    if (str[i].toLowerCase() !== str[j].toLowerCase()) return false;

    i++;
    j--;
  }

  return true;
}

function palindrome(string) {
  const str = string.replaceAll(/\s/gi, "");
  const regex = /\w/;
  const len = str.length;

  const helper = (i = 0, j = str.length - 1) => {
    if (i >= j) return true;

    while (i < len && !regex.test(str[i])) i++;

    while (j > 0 && !regex.test(str[j])) j--;

    if (str[i].toLowerCase() !== str[j].toLowerCase()) return false;

    return helper(i + 1, j - 1);
  };

  return helper();
}

// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// console.log(palindrome("llama mall")); //-> true
// console.log(palindrome("jmoney")); //-> false
// console.log(palindrome("Anne, I vote more cars race Romeo-to-Vienna")); //-> false

// Challenge 4

function isPrime(num) {
  if (num <= 1) return false;
  if (num == 2) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;
  else return true;
}

function isPrime(num) {
  const helper = (n, i = 2) => {
    if (n <= 2) return n == 2;

    if (n % i === 0) return false;

    if (i * i > n) return true;

    return helper(n, i + 1);
  };
  return helper(num);
}

function isPrime(num, d = num - 1) {
  if (num <= 2) return num == 2;

  if (d === 1) return true;

  if (num % d === 0) return false;

  return isPrime(num, d - 1);
}

// console.log(isPrime(1)); //-> false
// console.log(isPrime(2)); //-> true
// console.log(isPrime(3)); //-> true
// console.log(isPrime(4)); //-> false
// console.log(isPrime(11)); //-> true
// console.log(isPrime(17)); //-> true
// console.log(isPrime(21)); //-> false
// console.log(isPrime(37)); //-> true
// console.log(isPrime(51)); //-> false

//Challenge 5 ++++++++
function pathFinder(obj, arr, index = 0) {
  if (obj.constructor === Object || typeof obj === "object") {
    for (const [key, val] of Object.entries(obj)) {
      if (arr[index] !== key) return;

      if (val.constructor === Object) {
        return pathFinder(val, arr, index + 1);
      } else if (typeof val === "string") {
        if (index === arr.length - 1 && arr[index] === key) return val;
      }
    }
  }
}

function pathFinder(obj, arr) {
  const helper = (index, obn) => {
    for (const [key, val] of Object.entries(obn)) {
      if (arr[index] === key) {
        if (typeof val === "object") {
          return helper(index + 1, val);
        } else if (typeof val === "string") {
          if (arr[index] === arr[arr.length - 1]) return val;
        }
      }
    }
  };

  return helper(0, obj);
}

//Challenge 5
function pathFinder(obj, arr) {
  const helper = (index, obn) => {
    for (const [key, val] of Object.entries(obn)) {
      if (arr[index] === key) {
        if (typeof val === "object") {
          return helper(index + 1, val);
        } else if (typeof val === "string") {
          if (arr[index] === arr[arr.length - 1]) return val;
        }
      }
    }
  };

  return helper(0, obj);
}

const obj = {
  first: { second: { third: "finish" } },
  second: { third: "wrong" },
};
const arr = ["first", "second", "third"];
// console.log(pathFinder(obj, arr));   //-> "finish"
const obj2 = {
  first: {
    second: { wrong: "###" },
    second: { third: { fourth: "fourth-finish" } },
  },
  second: { third: "wrong" },
};
const arr2 = ["first", "second", "third", "fourth"];
console.log(pathFinder(obj2, arr2)); //-> "fourth-finish"

const obj3 = {
  first: { second: { third: "finish" } },
  second: { third: "wrong" },
};
const arr3 = ["first", "second", "third", "fourth"];
console.log(pathFinder(obj3, arr3)); //-> "finish"

//Challenge 6
function flattenRecursively2(arr, output = []) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      output = [...output, ...flattenRecursively(item, [])];
    } else {
      output.push(item);
    }
  }
  return output;
}
// console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
// // console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]
// console.log(flattenRecursively([1, [2,[[55, [66, [[]], [77]]]], 3, [4]]])); //-> [1, 2, 55, 66, 77, 3, 4]
// console.log(flattenRecursively([1, {}, [3, [[4]], [[[]], 66]], 777])); //-> [1, { }, 3, 4, 66, 777]

////////////FLAWED
function flattenRecursively(arr, output = []) {
  if (Array.isArray(arr)) {
    for (const item of arr) {
      if (Array.isArray(item)) {
        return flattenRecursively(item, output);
      } else {
        output.push(item);
      }
    }
  }
  return output;
}
////////////FLAWED
function flattenRecursively(arr) {
  const helper = (array, result = []) => {
    for (const val of array) {
      if (Array.isArray(val)) {
        return helper(val, result);
      } else {
        result.push(val);
      }
    }
    return result;
  };

  return helper(arr);
}

//Challenge 7
function findInOrderedSet(arr, target) {
  const helper = (left, right) => {
    if (left > right) return false;

    while (left <= right) {
      const mid = left + Math.trunc((right - left) / 2);

      if (arr[mid] === target) return true;

      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return false;
  };

  return helper(0, arr.length - 1);
}

const findInOrderedSet = (arr, target, i = 0, j = arr.length - 1) => {
  if (i > j) return false;
  if (i === j) return arr[i] == target;

  const mid = i + Math.trunc((j - i) / 2);

  if (arr[mid] === target) return true;

  if (arr[mid] < target) {
    return findInOrderedSet(arr, target, mid + 1, j);
  } else {
    return findInOrderedSet(arr, target, i, mid - 1);
  }
};

const nums = [1, 4, 6, 7, 9, 17, 45];
// console.log(findInOrderedSet(nums, 4));  //-> true
// console.log(findInOrderedSet(nums, 2));  //-> false
// console.log(findInOrderedSet(nums, 7)); //-> true
// console.log(findInOrderedSet(nums, 45));  //-> true
// console.log(findInOrderedSet(nums, 77));  //-> false

//Challenge 8
function countWaysToReachNthStair(n) {
  if (n == 1) return 1;
  if (n == 2) return 2;

  return countWaysToReachNthStair(n - 1) + countWaysToReachNthStair(n - 2);
}

// console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
// console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
// console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))

//Challenge 9
function getPermutations(arr) {
  const list = [];

  const backtrack = (sublist = [], index = 0) => {
    if (sublist.length === arr.length) list.push(sublist.slice());
    else {
      for (let i = 0; i < arr.length; i++) {
        if (sublist.includes(arr[i])) continue;

        sublist.push(arr[i]);
        backtrack(sublist, i + 1);
        sublist.pop();
      }
    }
  };

  backtrack();
  return list;
}

function getPermutations(arr) {
  const list = [];

  const backtrack = (start, nums) => {
    if (start === arr.length) list.push(nums.slice());
    else {
      for (let i = start; i < nums.length; i++) {
        [nums[start], nums[i]] = [nums[i], nums[start]];
        backtrack(start + 1, nums);
        [nums[i], nums[start]] = [nums[start], nums[i]];
      }
    }
  };

  backtrack(0, arr);
  return list;
}

// console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
// console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

//Challenge 10

function getRangeBetween(x, y, arr = []) {
  if (++x === y) return arr;

  arr.push(x);

  return getRangeBetween(x, y, arr);
}

function getRangeBetween(x, y) {
  const helper = (n, range) => {
    if (n === y) return range;

    range.push(n);

    return helper(n + 1, range);
  };
  return helper(x + 1, []);
}

function getRangeBetween(x, y) {
  function addRange(newX, arr) {
    if (newX >= y) return arr;

    arr.push(newX);
    return addRange(newX + 1, arr);
  }
  return addRange(x + 1, []);
}

// console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
// console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]
