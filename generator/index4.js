function *generatorFunc() {
    yield 8;
    yield 9;
    yield 10;
}

const generatorObj = generatorFunc();

for(let x of generatorObj) {
    console.log(x);
}


