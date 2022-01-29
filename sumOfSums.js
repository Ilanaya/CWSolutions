function getSum(a, b) {
    if (a === b) {
        return a;
    }
    const sortedNums = [a, b].sort((a, b) => a - b);
    let res = 0;
    while (sortedNums[0] !== sortedNums[1]) {
        res += sortedNums[0];
        sortedNums[0]++;
    }
    return res + sortedNums[1];
}
function getSumPrmogression(a, b) {
    const arithmProgSum = ((a + b) / 2) * (Math.abs(a - b) + 1);
    return arithmProgSum;
}
