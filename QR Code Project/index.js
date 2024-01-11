// Use the inquirer npm package to get user input.
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([{
            message: "Type in your url:",
            name: "url"  
        }])
  .then((answers) => {
    console.log(answers);
    const url = answers.URL;
    //  Use the qr-image npm package to turn the user entered URL into a QR code image.
    var qr_svg = qr.image("url");
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  
 
// 3. Create a txt file to save the user input using the native fs node module.
