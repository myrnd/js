function *generatorFunc() {
    yield 8;
    yield 9;
    yield 10;
    return 11;
}

const generatorObj = generatorFunc();


console.log(generatorObj.next()); //{value: 8, done: false}
console.log(generatorObj.next()); //{value: 9, done: false}
console.log(generatorObj.next()); //{value: 10, done: false}
console.log(generatorObj.next()); //{value: 11, done: true}


