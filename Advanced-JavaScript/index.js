/*
Memoization

Memoization is a way to cache a return value of a function based on its parameters. 
This makes the function that takes a long time run much faster after one execution.
If the parameter changes, it will still have to reevaluate the function.
*/

// Bad Way
function addTo80(n) {
    console.log('long time...')
    return n + 80
}

addTo80(5)
addTo80(5)
addTo80(5)

// long time... 85
// long time... 85
// long time... 85

// Memoized Way
function memoizedAddTo80() {
    let cache = {}
    return function (n) { // closure to access cache obj
        if (n in cache) {
            return cache[n]
        } else {
            console.log('long time...')
            cache[n] = n + 80
            return cache[n]
        }
    }
}
const memoized = memoizedAddTo80()

console.log('1.', memoized(5))
console.log('2.', memoized(5))
console.log('3.', memoized(5))
console.log('4.', memoized(10))

// long time...
// 1. 85
// 2. 85
// 3. 85
// long time...
// 4. 90



/*
Inline Caching
*/

function findUser(user) {
    return `found ${user.firstName} ${user.lastName}`
}

const userData = {
    firstName: 'Brittney',
    lastName: 'Postma'
}

findUser(userData)

// if this findUser(userData) is called multiple times,
// then it will be optimized (inline cached) to just be 'found Brittney Postma'



/*
Hidden Classes
*/


function Animal(x, y) {
    this.x = x;
    this.y = y;
}

const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);

obj1.a = 30;
obj1.b = 100;
obj2.b = 30;
obj2.a = 100;

delete obj1.x;



// Memory Heap

// tell the memory heap to allocate memory for a number
const number = 11;
// allocate memory for a string
const string = "some text";
// allocate memory for an object and it's values
const person = {
    first: "Brittney",
    last: "Postma"
};



// Call Stack

function subtractTwo(num) {
    return num - 2;
}

function calculate() {
    const sumTotal = 4 + 5;
    return subtractTwo(sumTotal);
}
debugger;
calculate();