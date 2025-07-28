const fs = require('fs');

//the result array
let result = [];

for (let i = 1; i<=100; i++){
    //if the number is divisible by 3 and 5
    if (i%3 == 0 && i%5 == 0)
        result.push("BIGBANG");
    else if (i%3 == 0) //if only divisible by 3
        result.push("BIG");
    else if (i%5 == 0) //if only divisible by 5
        result.push("BANG");
    else
        result.push(i);
}

//write JSON file
fs.writeFile('output.json', JSON.stringify(result), (error) => {
  if (error) {
    console.error("Error: ", error);
  } else {
    console.log("Operation Success");
  }
});