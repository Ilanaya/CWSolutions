//  This func timeuots with big nums
// function padovan(n) {
//   const edgeCases = [0, 1, 2];
//   if (edgeCases.includes(n)) return 1;
//   return padovan(n - 3) + padovan(n - 2);
// }
// console.log(padovan(100));

// function padovan(n) {
//   let prevPrev = 1;
//   let prev = 1;
//   let curr = 1;
//   let next = 1;

//   for (let i = 3; i <= n; i++) {
//     next = prevPrev + prev;
//     prevPrev = prev;
//     prev = curr;
//     curr = next;
//   }

//   return next;
// }

function padovan(n) {
  if (n < 3) return 1;
  let result = [1, 1, 1];
  for (let i = 3; i <= n; i++) result.push(result[i - 2] + result[i - 3]);
  return result[result.length - 1];
}
