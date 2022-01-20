function add(n) {
  let result = n;
  const fn = (nextNum) => {
    result += nextNum;
    return fn;
  };
  fn.toString = () => result;
  return fn;
}

