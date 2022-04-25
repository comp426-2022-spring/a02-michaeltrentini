import { coinFlips, countFlips } from "./modules/coin.mjs" //import functions from coin.mjs
import { createrequire } from 'module';

const require = createRequire(import.meta.url);
const args = require("./node_modules/minimist")(process.argv.slice(2));

args['number'];
var x = coinFlips(args.number || process.env.number || 1)

let flips = coinFlips(x);

console.log(flips); //log flips
console.log(countFlips(flips)); //log flips count