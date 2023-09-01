// (i) write a function that returns the sum of two number
function sum(param1, param2) {
  return param1 + param2;
}

console.log(`Sum of two number : ${sum(10, 5)}`);



// (ii) Write a function that returns the sum of all numbers | "(...params) rest operator"
function numOfAllSum(...params) {
  let total = 0;

  params.forEach((item) => {
    return (total += item);
  });

  console.log(`Sum of all number you add ${total}`);
}

numOfAllSum(1, 2, 3, 7, 11, 13, 17, 23, 31, 37);
