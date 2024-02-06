function fib() {
  const fibArr = [];
  for (let i = 0; i < 50; i++) {
    if (i === 0) {
      fibArr.push(0);
    } else if (i === 1) {
      fibArr.push(1);
    } else {
      fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
    }
  }
  return fibArr;
}
console.log(fib());

function numsToStrings(numbers) {
  return _.map(numbers, num => `${num}`);
}
console.log(numsToStrings(fib()));

function numEvenNums(numbers) {
  return _.size(_.filter(numbers, num => num % 2 === 0));
}
console.log(numEvenNums(fib()));
