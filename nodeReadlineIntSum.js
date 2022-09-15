const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const util = require('util');

const rl = readline.createInterface({ input, output });
const question = util.promisify(rl.question).bind(rl);

async function main() {
  const firstInt = await question('Input int 1 ');
  const secondInt = await question('Input int 2 ');

  let sum = 0;
  let counter = firstInt;
  while (counter % 3 !== 0) {
    counter++;
  }
  for (; counter < secondInt + 1; counter += 3) {
    sum += counter;
  }
  const res = Math.floor(secondInt / 3) - Math.floor(firstInt / 3) + 1;
  console.log(sum / res);
  rl.close();
}

main();
