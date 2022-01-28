function* generator(obj) {
    for (let x in obj)
        yield x;
    return -1;
}

const abc = {
    a: 'apple',
    b: 'boy',
    c: 'cat'
}

const ObjectGen = generator(abc);

console.log(ObjectGen.next());
console.log(ObjectGen.next());
console.log(ObjectGen.next());
console.log(ObjectGen.next());
console.log(ObjectGen.next());