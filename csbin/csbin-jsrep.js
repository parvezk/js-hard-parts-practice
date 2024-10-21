/* ========== *
* Challenge 1 *
* =========== */

//Uncomment the lines below to test your code
// console.log(typeof 7.0 === "number")
// console.log(typeof 22 === "number")
// console.log(typeof true === "boolean")

// var myVar;
// console.log(typeof myVar === "undefined")

// myVar = "parvez" //add your name here
// console.log(typeof myVar === "string")

//Comment them back out with two forward slashes at the beginning once you have finished


/* ========== *
* Challenge 2 *
* =========== */


function buildSentence(word1, word2, word3) {
    //your code goes here...
      const res = `${word1[0].toUpperCase()}${word1.slice(1)} ${word2} ${word3}.`
    console.log(res)
  }
  
  // buildSentence("coding", "is", "awesome") //=> "Coding is awesome."
  // buildSentence("we're", "number", "1") //=> "We're number 1."
  
  
  /* ========== *
  * Challenge 3 *
  * =========== */
  
  
  function lastLetter(word) {
    //your code goes here...
    console.log(word.at(-1))
  }
  
  //Uncomment the lines below to test your code
  // lastLetter("hello") //=> "o"
  // lastLetter("goodbye!") //=> "!"
  // lastLetter("ZeltoiD") //=> "D"
  
  
  /* ========== *
  * Challenge 4 *
  * =========== */
  
  
  function buildGreeting(time, name) {
     if (0 <= time <= 11){
       console.log(`Good morning, ${name}!`);
       
     } else if (12 <= time <= 16) {
       console.log(`Good Afternoon, ${name}!`);
       
     } else if (17 <= time <= 23) {
       console.log(`Good Evening, ${name}!`);
      
     }
  }
  
  
  // buildGreeting(8, "Maggie") //=> "Good Morning, Maggie!"
  // buildGreeting(12, "John") //=> "Good Afternoon, John!"
  // buildGreeting(22, "Stacey") //=> "Good Evening, Stacey!"
  //buildGreeting(31, "Derrick") //=> "That's not a real time, Derrick. Maybe you need some sleep!"
  
  
  /* ========== *
  * Challenge 5 *
  * =========== */
  
  const indexOf = (str1, str2) => {
    return str1.indexOf(str2)
  }
  
  // console.log( indexOf("CodeSmith", "o") === 1 )
  // console.log( indexOf("hello", "ll") === 2 )
  // console.log( indexOf("zebra", "z") === 0 )
  // console.log( indexOf("banana", "B") === -1 )
  
  
  /* ========== *
  * Challenge 6 *
  * =========== */
  
  
  function letterExists(word, letter) {
  
    console.log(word.includes(letter))
  
  }
  
  // letterExists("superman", "e") //=> true
  // letterExists("starship", "S") //=> false
  // letterExists("th1s", "1") //=> true
  // letterExists("he!lo", "!") //=> true
  
  
  /* =========== *
  * Challenge 7 *
  * ============ */
  
  
  function isPrime(n) {
    if (n < 0) return false
    
      if (n == 0 || n == 2 || n == 3) return true;
    
    return (n % 2 == 0 || n % 3 == 0) ? false : true;
  }
  
  // console.log(isPrime(-7)); // => false
  // console.log(isPrime(7)); // => true
  // console.log(isPrime(2)); // => true
  // console.log(isPrime(11)); // => true
  // console.log(isPrime(15)); // => false
  // console.log(isPrime(19)); // => true
  // console.log(isPrime(51)); // => false
  
  
  /* ========== *
  * Challenge 8 *
  * =========== */
  
  
  function range(start, end) {
    //your code goes here...
      for (let i = start; i <= end; i++)
          console.log(i);
  }
  
  //Uncomment the lines below to test your code
  // range(1,4) //=> 1, 2, 3, 4
  // range(4,2) //=>
  
  
  /* =========== *
  * Challenge 9 *
  * ============ */
  
  
  function myIndexOf(array, ele){
    // your code here...
      let idx = -1;
    for (let i = 0; i < array.length; i++) {
      if (array[i] == ele) {
        idx = i;
        break;
      }
    }
    console.log(idx);
  }
  
  // myIndexOf([1, 2, 3, 4, 5], 5) //=> 4
  // myIndexOf(["a", "b", "c"], "a") //=> 0
  // myIndexOf(["a", "b", "c"], "d") //=> -1
  
  
  /* =========== *
  * Challenge 10 *
  * ============ */
  
  function unique(array) {
  
      const arr = new Set(array);
    console.log([...arr.values()])
  }
  
  // unique([1, 1, 2, 3, 3]) //=> [1, 2, 3]
  // unique(["a", "a", "c", "aa", "b", "b"]) //=> ["a", "c", "aa", "b"]
  
  
  /* =========== *
  * Challenge 11 *
  * ============ */
  
  function longestWord(sentence) {
    if (!sentence.length) return '';
    const sentences = sentence.split(/\s/);
      const map = new Map();
    
    for (const word of sentences) {
      const len = word.length;
      if (map.has(len))
        map.get(len).push(word);
      else
        map.set(len, [word])
    }
    
    const res = Array.from(map.entries());
    res.sort((a, b) => b[0] - a[0]);
    const longest = res[0][1];
    
    return longest.length > 1 ? longest.at(-1) : longest[0];
  }
  
  //Uncomment the lines below to test your function:
  
  // console.log(longestWord('my JavaScript is exceptional')); // => 'exceptional'
  // console.log(longestWord('hate having hungry hippos')); // => 'hippos'
  // console.log(longestWord('JavaScript')); // => 'JavaScript'
  // console.log(longestWord('')); // => ''
  
  
  /* =========== *
  * Challenge 12 *
  * ============ */
  
  function disemvowel(string) {
    // your code here...
    const vowels = "aeiou";
    const set = new Set(vowels.split(""));
    let str = '';
    
    for (const char of string) {
      if (!set.has(char.toLowerCase()))
        str += char;
    }
    
    return str;
  }
  
  
  //Uncomment the lines below to test your function:
  
  // console.log(disemvowel('CodeSmith')); // => 'CdSmth'
  // console.log(disemvowel('BANANA')); // => 'BNN'
  // console.log(disemvowel('hello world')); // => 'hll wrld'
  
  
  /* =========== *
  * Challenge 13 *
  * ============ */
  
  function divisibleByFivePairSum(arr){
    const res = [], len = arr.length;
    
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        
        if ((arr[i] + arr[j]) % 5 == 0)
          res.push([i, j]);
      }
    }
    
    return res;
  }
  
  
  //Uncomment the lines below to test your function:
  
  // console.log(divisibleByFivePairSum([1, 5, 2, 0, 4])); // => [ [ 0, 4 ], [ 1, 3 ] ]
  // console.log(divisibleByFivePairSum([13, 22, 8, -3, 12])); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]
  
  
  /* =========== *
  * Challenge 14 *
  * ============ */
  
  function highestScore(students) {
      let maxId = null, max = Number.MIN_VALUE;
    
    for (const {score, id} of students) {
      if (score > max) {
        maxId = id;
        max = score;
      }
    }
      
    const student = students.filter(({id}) => id === maxId);
    const name = student[0].name.split(" ");
    let str = `${name[0].charAt(0)}${name[1][0]}${maxId}`;
    return str;
  }
  
  //Uncomment the lines below to test your function:
  
  var students = [
  {name: 'Will Sentance', id: 128, score: -42},
  {name: 'Jamie Bradshaw', id: 32, score: 57},
  {name: 'Lisa Simpson', id: 2, score: 99},
  {name: 'Luke Skywalker', id: 256, score: 94}
  ];
  
  // console.log(highestScore(students)); //=> 'LS2'
  
  
  /* =========== *
  * Challenge 15 *
  * ============ */
  
  function leastCommonMultiple(num1, num2) {
    let max = Math.max(num1, num2);
    let least = null, found = false;
  
    while (!found) {
      
      if ((max % num1 == 0) && (max % num2 == 0)) {
        least = max;
        found = true;
      }
  
      max++;
      
    }
    return least;
  }
  
  //Uncomment the lines below to test your function:
  
  // console.log(leastCommonMultiple(2, 3)); //=> 6
  // console.log(leastCommonMultiple(6, 10)); //=> 30
  // console.log(leastCommonMultiple(24, 26)); //=> 312
  
  
  /* ========== *
  * Extension 1 *
  * =========== */
  
  function arrayBuilder(count) {
    // your code here...
    const res = [];
    for (const [key, val] of Object.entries(count)) {
      for (let i = 0; i < val; i++) res.push(key)
    }
      
    return res;
  }
  
  
  //Uncomment the lines below to test your function:
  
  // console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
  // console.log(arrayBuilder({})); //=> []
  
  
  /* ========== *
  * Extension 2 *
  * =========== */
  
  function objectBuilder(count) {
    // your code here...
      const obj = {};
    for (let i = 0; i <= count; i++) {
      obj[i] = i * 5;
    }
    return obj;
  }
  
  
  //Uncomment the lines below to test your function:
  
  // console.log(objectBuilder(4)); //=> {
    // 0: 0,
    // 1: 5,
    // 2: 10,
    // 3: 15,
    // 4: 20,
  // }
  // console.log(objectBuilder(0)); //=> { 0: 0 }
  
  
  /* ========== *
  * Extension 3 *
  * =========== */
  
  function secretCipher(sentence, cipher){
    // your code here...
      let str = '';
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence.charAt(i);
      // if (cipher.hasOwnProperty(char))
      if (Object.hasOwn(cipher, char)) 
        str += cipher[char];
      else
        str += char;
    }
    
    return str;
  }
  
  
  
  //Uncomment the lines below to test your function:
  
  // console.log(secretCipher("lqq me on flcebzzk" , { l : "a", q : "d", z: "o"})); //=> "add me on facebook"
  // console.log(secretCipher("where are you???" , { v : "l", '?' : "!"})) //=> "where are you!!!"
  // console.log(secretCipher("twmce" , { m : "n", t : "d", w : "a"})); //=> "dance"
  
  
  /* ========== *
  * Extension 4 *
  * =========== */
  
  function passingStudents(students) {
    // your code here...
      const filtered = students.filter(({grades}) => {
      const sum = grades.reduce((acc, {score}) => acc += score, 0);
      const avg = sum / grades.length;
      
      return (avg >= 70) ? true : false;
    });
    
    const res = filtered.map(student => student.name);
    
    return res;
  }
  
  
  //Uncomment the lines below to test your function:
  
  var students = [
    {
      "name": "Marco",
      "id": 12345,
      "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
    },
    {
      "name": "Donna",
      "id": 55555,
      "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
    },
    {
      "name": "Jukay",
      "id": 94110,
      "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
    }
  ];
  
  // console.log(passingStudents(students)); // => [ 'Marco', 'Donna' ]
  
  
  
  