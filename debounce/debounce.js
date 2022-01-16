let count = 1;

const getData = (msg, msg1, msg2) => {
  console.log("getData is called " + count++);
  console.log(msg, msg1, msg2);
};

// function getData(msg) {
//   console.log("get data is called");
//   console.log(msg);
// }

const debounce = (fnc, delay) => {
  let timeout;
  return function (...args) {
    console.log("inside better getdata");
    let context = this;
    // let params = args;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      //   fnc.apply(context, args);
      fnc(args);
    }, delay);
  };
};

const betterGetData = debounce(getData, 10);

while (true) {
  betterGetData();
}
