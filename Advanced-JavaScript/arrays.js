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