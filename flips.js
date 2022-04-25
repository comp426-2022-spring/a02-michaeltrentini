import { coinFlips, countFlips } from "./modules/coin.mjs" //import functions from coin.mjs
const args = require("./node_modules/minimist")(process.argv.slice(2));

args['number'];
const x = args.number || 1

let flips = coinFlips(x);

console.log(flips); //log flips
console.log(countFlips(flips)); //log flips count