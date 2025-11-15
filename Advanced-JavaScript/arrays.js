const strings = ["a", "b", "c", "d"];
// 4 * 4 = 16 bytes of storage

strings[2]; // c // O(1)
strings.push("e"); // O(1)
// ['a', 'b', 'c', 'd', 'e']
strings.pop(); // O(1)
// ['a', 'b', 'c', 'd']
strings.unshift("z"); // O(n)
// ['z', 'a', 'b', 'c', 'd']
// unshift took 5 operations to complete.
// ['a', 'b', 'c', 'd']
// [ 0    1    2    3 ] all indexes need to shift
// ['z', 'a', 'b', 'c', 'd']
// [      0    1    2    3 ]
// [ 0    1    2    3    4 ]


class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }
    shiftItems(index) {
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push("hi");
// MyArray { length: 1, data: { 0: 'hi'}}
newArray.pop();
// MyArray { length: 0, data: { }}



// Problem Solving Pattern
// Frequency Counter Pattern

// Naive solution - Time Complexity O(n^2)
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







// Advanced Array Methods
const array = [1, 2, 3, 4, 5];

// forEach
array.forEach((num, index) => {
    console.log(`Index: ${index}, Value: ${num}`);
});

// map
const mappedArray = array.map(num => num * 2);
console.log(mappedArray); // [2, 4, 6, 8, 10]

// filter
const filteredArray = array.filter(num => num % 2 === 0);
console.log(filteredArray); // [2, 4]

// reduce
const sum = array.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15

// find
const foundItem = array.find(num => num > 3);
console.log(foundItem); // 4

// some
const hasEvenNumber = array.some(num => num % 2 === 0);
console.log(hasEvenNumber); // true

// every
const allPositive = array.every(num => num > 0);
console.log(allPositive); // true

// sort
const sortedArray = array.slice().sort((a, b) => b - a);
console.log(sortedArray); // [5, 4, 3, 2, 1]

// concat
const newArrayConcat = array.concat([6, 7, 8]);
console.log(newArrayConcat); // [1, 2, 3, 4, 5, 6, 7, 8]

// slice
const slicedArray = array.slice(1, 4);
console.log(slicedArray); // [2, 3, 4]

// splice
const splicedArray = array.slice(); // create a copy to demonstrate splice
splicedArray.splice(2, 1, 99);
console.log(splicedArray); // [1, 2, 99, 4, 5]  


// Advanced Array Problems
// Problem 1: Remove Duplicates
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// Problem 2: Flatten Array
function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);
}
console.log(flattenArray([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]

// Problem 3: Find Pairs with Given Sum
function findPairsWithSum(arr, sum) {
    const pairs = [];
    const seen = new Set();
    for (const num of arr) {
        const complement = sum - num;
        if (seen.has(complement)) {
            pairs.push([complement, num]);
        }
        seen.add(num);
    }
    return pairs;
}
console.log(findPairsWithSum([1, 2, 3, 4, 5], 6)); // [[1, 5], [2, 4]] 


// Problem 4: Rotate Array
function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n;
    return arr.slice(-k).concat(arr.slice(0, n - k));
}
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]



// Example of Array Destructuring
const coordinates = [10, 20];
const [x, y] = coordinates;
console.log(`X: ${x}, Y: ${y}`); // X: 10, Y: 20

// Swapping values using destructuring
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(`a: ${a}, b: ${b}`); // a: 10, b: 5

// Example of Spread Operator with Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

// Copying an array using spread operator
const originalArray = [7, 8, 9];
const copiedArray = [...originalArray];
console.log(copiedArray); // [7, 8, 9]


// Example of Rest Parameters with Arrays
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // 15
console.log(sumAll(10, 20)); // 30 


// Example of Array.from()
const str = "Hello";
const charArray = Array.from(str);
console.log(charArray); // ['H', 'e', 'l', 'l', 'o']

// Converting a Set to an Array
const mySet = new Set([1, 2, 3, 4]);
const setToArray = Array.from(mySet);
console.log(setToArray); // [1, 2, 3, 4]

// Example of Array.of()
const arrayOfNumbers = Array.of(1, 2, 3, 4, 5);
console.log(arrayOfNumbers); // [1, 2, 3, 4, 5]

const arrayOfStrings = Array.of("a", "b", "c");
console.log(arrayOfStrings); // ['a', 'b', 'c']


// Example of Array.fill()
const filledArray = new Array(5).fill(0);
console.log(filledArray); // [0, 0, 0, 0, 0]

const partialFillArray = [1, 2, 3, 4, 5].fill(9, 1, 4);
console.log(partialFillArray); // [1, 9, 9, 9, 5]


// Example of Array.includes()
const numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray.includes(3)); // true
console.log(numbersArray.includes(6)); // false

const stringArray = ["apple", "banana", "cherry"];
console.log(stringArray.includes("banana")); // true
console.log(stringArray.includes("grape")); // false

// Example of Array.flat()
const nestedArray = [1, [2, [3, [4]], 5]];
const flattenedOnce = nestedArray.flat();
console.log(flattenedOnce); // [1, 2, [3, [4]], 5]

const fullyFlattened = nestedArray.flat(3);
console.log(fullyFlattened); // [1, 2, 3, 4, 5]

// Example of Array.flatMap()
const words = ["hello world", "foo bar", "baz qux"];
const flatMapped = words.flatMap(phrase => phrase.split(" "));
console.log(flatMapped); // ['hello', 'world', 'foo', 'bar', 'baz', 'qux'] 