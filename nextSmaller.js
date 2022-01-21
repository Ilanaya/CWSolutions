function nextSmaller(number) {
  const processedDigits = [];
  const numArr = number
    .toString()
    .split("")
    .map((digit) => +digit);
  for (let i = numArr.length - 1; i >= 0; i--) {
    if (processedDigits.findIndex((digit) => numArr[i] > digit) !== -1) {
      const pivot = numArr[i];
      const deltas = processedDigits.map((digit) => pivot - digit);
      const minDelta = deltas
        .sort((a, b) => a - b)
        .filter((delta) => delta > 0)
        .shift();
      const minDeltaIndex = deltas.indexOf(minDelta);
      const closestToPivotNumber = processedDigits[minDeltaIndex];
      const indexToSwap =
        numArr.length - 1 - processedDigits.indexOf(closestToPivotNumber);
      const newArr = JSON.parse(JSON.stringify(numArr));
      newArr[i] = closestToPivotNumber;
      newArr[indexToSwap] = pivot;
      const indexToSplice = newArr.length - processedDigits.length;
      const digitsToAppend = newArr.splice(indexToSplice).sort((a, b) => b - a);
      const resultingNumber = [...newArr, ...digitsToAppend].join("");
      if (resultingNumber.startsWith("0")) {
        return -1;
      }
      return +resultingNumber;
    }
    processedDigits.push(numArr[i]);
  }
  return -1;
}
console.log(nextSmaller(403491987623));
