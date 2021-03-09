/*
input: node timer1.js 10 3 5 15 9
This will make it beep at:

3 seconds
5 seconds
9 seconds
10 seconds
15 seconds
*/

// take argument from the command line. Ommit the first two with slice.
const inputs = process.argv.slice(2).map(x => x * 1000);
console.log("This will make it beep at:");
for (const i of inputs) {
  
  if (i > 0 && Number.isInteger(i)) {
    console.log(`${i / 1000} seconds`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, i);
  }
}