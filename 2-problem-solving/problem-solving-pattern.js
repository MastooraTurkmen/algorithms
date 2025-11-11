// Problem solving pattern
// 1. Understand the problem
// 2. Break it down
// 3. Solve subproblems
// 4. Refactor

// Example: Reverse a string

function reverseString(str) {
    // Step 1: Understand the problem
    // We need to take a string and return a new string with the characters in reverse order.

    // Step 2: Break it down
    // - Convert the string into an array of characters.
    // - Reverse the array.
    // - Join the array back into a string.

    // Step 3: Solve subproblems
    const charArray = str.split(''); // Convert string to array
    const reversedArray = charArray.reverse(); // Reverse the array
    const reversedString = reversedArray.join(''); // Join array back to string

    return reversedString; // Return the reversed string
}


// Step 4: Refactor
function reverseStringRefactored(str) {
    return str.split('').reverse().join('');
}

// Example usage:
console.log(reverseStringRefactored("hello")); // Output: "olleh"
console.log(reverseStringRefactored("JavaScript")); // Output: "tpircSavaJ"




// Example: Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has its corresponding value squared in the second array.
// The frequency of values must be the same.


function same(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) {
        return false;
    }

    for (let i = 0; i < arrayOne.length; i++) {
        let correctIndex = arrayTwo.indexOf(arrayOne[i] ** 2)
        if (correctIndex === -1) {
            return false
        }
        arrayTwo.splice(correctIndex, 1)
    }
    return true;
}


console.log(same([1, 2, 3, 2], [9, 4, 1, 4,])) // true
console.log(same([1, 2, 3], [1, 9])) // false
console.log(same([1, 2, 1], [4, 4, 1])) // false



// Refactored version - Time Complexity O(n)
function sameRefactor(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let value of arr1) {
        frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1
    }

    for (let value of arr2) {
        frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }

    return true;
}


// Example usage:
console.log(sameRefactor([1, 2, 3, 2], [9, 4, 1, 4,])) // true
console.log(sameRefactor([1, 2, 3], [1, 9])) // false
console.log(sameRefactor([1, 2, 1], [4, 4, 1])) // false


// Example: Anagram problem
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const frequencyCounter = {}

    for (let char of str1) {
        frequencyCounter[char] = (frequencyCounter[char] || 0) + 1
    }

    for (let char of str2) {
        if (!frequencyCounter[char]) {
            return false
        } else {
            frequencyCounter[char] -= 1
        }
    }

    return true;
}

// Example usage:
console.log(validAnagram('cinema', 'iceman')) // true
console.log(validAnagram('hello', 'billion')) // false
console.log(validAnagram('anagram', 'nagaram')) // true


// Example: Sum Zero problem
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
    return undefined;
}

// Example usage:
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])) // undefined
console.log(sumZero([1, 2, 3])) // undefined


// Example: Character Count problem
// First Solution
function charCount(str) {
    let object = {}

    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase()

        if (char >= 'a' && char <= 'z' || char >= '0' && char <= '9') {
            if (object[char] > 0) {
                object[char]++
            } else {
                object[char] = 1
            }
        }
    }

    return object
}

console.log(charCount("hello Hi"))



// First Solution using charCodeAt
function charCountCharCode(str) {
    let object = {}

    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase()
        const code = char.charCodeAt(0)

        if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57)) {
            if (object[char] > 0) {
                object[char]++
            } else {
                object[char] = 1
            }
        }
    }

    return object
}

console.log(charCountCharCode("hello Hi"))


// Second Solution

function charCount2(str) {
    let object = {}
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase()
        if (/[a-z0-9]/.test(char)) {
            if (object[char] > 0) {
                object[char]++
            } else {
                object[char] = 1
            }
        }
    }
    return object
}



// Example usage:
console.log(charCount2("hello Hi! 123")) // { h: 2, e: 1, l: 2, o: 1, i: 1, 1: 1, 2: 1, 3: 1 }


// Refactored Solution
function charCountRefactored(str) {
    let object = {}
    for (let char of str) {
        char = char.toLowerCase()
        if (isAlphaNumeric(char)) {
            object[char] = ++object[char] || 1
        }
    }
    return object
}

function isAlphaNumeric(char) {
    const code = char.charCodeAt(0)
    return (code >= 97 && code <= 122) || (code >= 48 && code <= 57)
}

// Example usage:
console.log(charCountRefactored("hello Hi! 123")) // { h: 2, e: 1, l: 2, o: 1, i: 1, 1: 1, 2: 1, 3: 1 }





// Example: Fibonacci problem
function fibonacci(n) {
    if (n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage:
console.log(fibonacci(6)); // Output: 8
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(20)); // Output: 6765



// Refactored Fibonacci using Memoization
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

// Example usage:
console.log(fibonacciMemo(6)); // Output: 8
console.log(fibonacciMemo(10)); // Output: 55
console.log(fibonacciMemo(50)); // Output: 12586269025



// Example: Fibonacci using Tabulation
function fibonacciTab(n) {
    if (n <= 2) return 1;
    const table = new Array(n + 1).fill(0);
    table[1] = 1;
    table[2] = 1;

    for (let i = 3; i <= n; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }

    return table[n];
}

// Example usage:
console.log(fibonacciTab(6)); // Output: 8
console.log(fibonacciTab(10)); // Output: 55
console.log(fibonacciTab(50)); // Output: 12586269025


// Refactored Fibonacci Tabulation - Space Optimized
function fibonacciTabOptimized(n) {
    if (n <= 2) return 1;
    let a = 1, b = 1, temp;

    for (let i = 3; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

// Example usage:
console.log(fibonacciTabOptimized(6)); // Output: 8
console.log(fibonacciTabOptimized(10)); // Output: 55
console.log(fibonacciTabOptimized(50)); // Output: 12586269025


// --- IGNORE ---
module.exports = {
    reverseString,
    reverseStringRefactored,
    same,
    sameRefactor,
    validAnagram,
    sumZero,
    charCount,
    charCountCharCode,
    charCount2,
    charCountRefactored,
    fibonacci,
    fibonacciMemo,
    fibonacciTab,
    fibonacciTabOptimized
};