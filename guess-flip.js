import { flipACoin } from "./modules/coin.mjs" //import coinFlip function from coin.mjs
import { createRequire } from 'module'; // import createRequire

const require = createRequire(import.meta.url);
const args = (require("./node_modules/minimist"))(process.argv.slice(2));
const call = args["call"];

if (call == "tails" || call == "heads") {
    console.log(flipACoin(call));
}
else {
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails]");
}