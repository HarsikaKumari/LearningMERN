console.log("Hello from Node!!");
const fs = require("fs");

fs.writeFile("message.txt", "Hello from NodeJs!", (err) => {
    if (err) throw err;
    console.log("The file have been console logged.");
});

fs.readFile("message.txt", "utf8", (err, data) => {
    if(err) throw err;
    console.log(data);
}); 

