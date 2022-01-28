function *generatorFunc() {
    yield 8;
    yield 9;
    yield 10;
}

const generatorObj = generatorFunc();

for(var x = generatorObj.next().value; x; x = generatorObj.next().value) {
    console.log(x);
}


