function createPhoneNumber(numbers) {
  const firstThreeNums = [];
  const restNums = [];

  numbers.forEach((num, i) => {
    if (i <= 2) {
      firstThreeNums.push(num);
      return;
    }
    restNums.push(num);
  });
  restNums.splice(3, 0, "-");
  const formattedFirstThree = `(${firstThreeNums.join("")})`;
  const formattedRestNums = `${restNums.join("")}`;
  return `${formattedFirstThree} ${formattedRestNums}`;
}

