#! node

const arg = process.argv[2]
let reverse = "";

if (process.argv.length < 3) {
  console.log("Veuillez indiquer un argument au script")
} else {
  const length = process.argv[2].length
  for (let x = 1; x <= length; x++) {
  reverse += arg[length - x]
  }
}

console.log(reverse)
