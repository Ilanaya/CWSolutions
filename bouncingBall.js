//https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript
function bouncingBall(h, bounce, window) {
    const condition = h > 0 && bounce > 0 && bounce < 1 && window < h;
    if (condition) {
        const nextBounceHeight = h * bounce;
        return h > window
            ? 2 + bouncingBall(nextBounceHeight, bounce, window)
            : -1;
    } else return -1;
}
console.log("first", bouncingBall(3.0, 0.66, 1.5)); // 3
console.log("second", bouncingBall(30.0, 0.66, 1.5)); // 15
