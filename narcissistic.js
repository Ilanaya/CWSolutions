function narcissistic(number) {
  const digitsStr = number
    .toString()
    .split("")
    .map((digit) => +digit);
  let result = 0;
  digitsStr.forEach((digit) => (result += digit ** digitsStr.length));
  return result === number;
}

