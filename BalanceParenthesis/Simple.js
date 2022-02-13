//  https://www.codewars.com/kata/5d8365b570a6f6001519ecc8/train/javascript
const fixParentheses = (str) => {
    const stack = [];
    const bracketsToClose = [];
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] === "(") {
            stack.push(str[i]);
        } else {
            if (stack.pop() !== "(") {
                bracketsToClose.push(str[i]);
            }
        }
    }
    const openBracksToAdd = bracketsToClose.map((_) => "(").join("");
    const closeBracksToAdd = stack.map((_) => ")").join("");
    return openBracksToAdd + str + closeBracksToAdd;
};

console.log(fixParentheses("))))(()("));
