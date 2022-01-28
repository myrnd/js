//y-x
const minus = (x,y) => {
    const obj = {...y};
   
    // Object.keys(y).forEach(key => {
    //    if(x[key])
    //     delete obj[key];
    // });

    for(let key in y) {
        if (x[key])
            delete obj[key];
    }

    return obj;
}


console.log(minus({a: 1, b:2, d:6}, {b:3, c:4, d:5}));