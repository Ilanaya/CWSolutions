function isPangram(string) {
  const newStr = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((x) => newStr.includes(x));
}
