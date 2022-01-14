const throttle = (fn, limit) => { //fun1
    let flag = true;
    return (...args) => { //fun2 throttle function
        if (flag) {
            flag = false;
            console.log(args);
            setTimeout(() => {
                flag = true;
                console.log('Ready for Next Call');
            }, limit);
            const result = fn(...args); //calls actual function
            if (result)
                return result;
        } else {
            return 'function call ignored';
        }
    }
};

const sum = throttle((x,y) => {
        //return x+y; // return value of actual function
        console.log(x+y);
    }, 3000);

//console.log(sum(2,3));

// for(let a=1; a<=50; a++) {
//     console.log(sum(a,a));
// }

