//concat argument
const concat = process.argv.slice(2);

if (concat[0] && concat[1]) {
    console.log(`${concat[0]} is ${concat[1]}`);
} else {
    console.log("insufficient argument");
}