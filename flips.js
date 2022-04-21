import { coinFlips, countFlips } from "./modules/coin.mjs" //import functions from coin.mjs
import minimist from "minimist"

const args = minimist(process.argv.slice(2));
const num = args.num || 1;
let flips = coinFlips(num);

console.log(flips); //log flips
console.log(countFlips(flips)); //log flips count