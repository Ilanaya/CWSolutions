function digPow(n, p) {
  let powerSum = 0;
  let power = p;
  const digitArr = n.toString().split("");
  for (let i = 0; i < digitArr.length; i++) {
    powerSum += digitArr[i] ** power;
    power++;
  }
  const result = powerSum / n;
  return result % 1 === 0 ? result : -1;
}


console.log(digPow(89, 1));
console.log(digPow(46288, 3));
console.log(digPow(123, 3));
