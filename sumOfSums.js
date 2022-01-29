function getSum(a, b) {
    if (a === b) {
        return a;
    }
    let min = Math.min(a, b),
        max = Math.max(a, b);
    let res = max;
    while (min !== max) {
        res += min;
        min++;
    }
    return res;
}
function getSumPrmogression(a, b) {
    const arithmProgSum = ((a + b) / 2) * (Math.abs(a - b) + 1);
    return arithmProgSum;
}
