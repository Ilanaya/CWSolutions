//  https://www.codewars.com/kata/5d8365b570a6f6001519ecc8/train/javascript
const fixParentheses = (str) => {
    const bracketsToCLose = [];
    const bracketsToOpen = [];
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] === "(") {
            bracketsToCLose.push(str[i]);
        } else {
            if (bracketsToCLose.pop() !== "(") {
                bracketsToOpen.push(str[i]);
            }
        }
    }
    const openBracksToAdd = bracketsToOpen.map((_) => "(").join("");
    const closeBracksToAdd = bracketsToCLose.map((_) => ")").join("");
    return openBracksToAdd + str + closeBracksToAdd;
};

console.log(fixParentheses("))))(()("));
