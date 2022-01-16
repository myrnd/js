//method-1
function sum (x, y) {
    if (y) {
        return x + y;
    } else {
        return function(y) {
            return x + y;
        }
    }
}
// console.log(sum(2,3));
// console.log(sum(2)(3));

//method-2
const add = (x, y) => y? x + y : (y) => x + y;
// console.log(add(2,3));
// console.log(add(2)(3));


//method-3
function curry(fn) {
    return function curried(...x) {
        if (x.length >= fn.length) {
            return fn(...x);
        } else {
            return function(...y) {
                return curried(...x, ...y);
            }
        }
    }
}

const summation = (x,y,z, a, b) => x + y + z + a + b;
const curriedSum = curry(summation);

console.log(curriedSum(2,3,4,5,6,7));
console.log(curriedSum(2)(3)(4)(5)(6,7));
console.log(curriedSum(2)(3,4)(5)(6,7));
