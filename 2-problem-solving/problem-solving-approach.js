/*
 Step One:
    Understanding the Problem
    - Can I restate the problem in my own words?
    - What are the inputs that go into the problem?
    - What are the outputs that should come from the solution to the problem?
    - Can the outputs be determined from the inputs? (i.e. Do I have enough information to solve the problem?)
    - How should I label important pieces of data that are a part of the problem?
*/

// Question: Write a function which takes two numbers and returns their sum

// 1. Can I restate the problem in my own words ?
"implement addition"
// 2. What are the inputs that go into the problem?
// -  ints?
// -  floats?
// what about string for large numbers?
// 3. What are the outputs that should come from the solution to the problem?
// -  int? float? string?
// 4. Can the outputs be determined from the inputs? (i.e. Do I have enough information to solve the problem?)
// -  yes
// 5. How should I label important pieces of data that are a part of the problem?
// -  num1, num2, sum

function sum(num1, num2) {
    return num1 + num2
}

console.log(sum(5, 7)) // 12



/*
Step Two:
    Explore Concrete Examples
    - Come up with simple examples
    - Come up with complex examples
    - Explore examples with empty inputs
    - Explore examples with invalid inputs
*/

// Question: Write a function which takes in a string and returns counts of each character in the string

// 1. Come up with simple examples
charCount("aaaa") // {a: 4}
charCount("hello") // -> {h: 1, e: 1, l: 2, o: 1}
charCount("You PIN number is 1234!")
// -> {Y: 1, o: 1, u: 2, P: 1, I: 1, N: 1, ' ': 3, n: 1, b: 1, e: 1, r: 1, i: 1, s: 1, 1: 1, 2: 1, 3: 1, 4: 1, !: 1}



// First Solution
function charCount(str) {
    // make object to return at end
    let result = {}
    // loop over string, for each character...
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase()

        // if the char is a number/letter AND is a key in object, add one to count
        if (result[char] > 0) {
            result[char]++
        }
        // if the char is a number/letter AND not in object, add it to object and set value to 1
        else {
            result[char] = 1
        }
    }
    // if char is something else (space, period, etc.) don't do anything
    // return object at end
    return result
}

console.log(charCount("hello Hi"))


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

console.log(charCount2("hello Hi"))


// Second Solution part Two
function charCount3(str) {
    let object = {}

    for (let char of str) {
        char = char.toLowerCase()
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

console.log(charCount3("hello Hi"))


// Third Solution
function charCountThree(str) {
    let obj = {}

    for (let char of str) {
        char = char.toLowerCase()
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1
        }
    }
    return obj
}

console.log(charCountThree("hello Hi"))


// charCode

function isAlphaNumeric(char) {
    let code;
    for (let i = 0; i < char.length; i++) {

        code = char.charCodeAt(0)
        if (
            !(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123) // lower alpha (a-z)
        ) {
            return false
        }
    }
    return true
}

isAlphaNumeric("a") // true



// regex

function isAlphaNumeric2(char) {
    return /[a-z0-9]/i.test(char)
}

isAlphaNumeric2("a") // true