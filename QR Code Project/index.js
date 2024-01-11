// Use the inquirer npm package to get user input.
import inquirer from "inquirer";

inquirer
    .prompt([{
            message: "Type in your url:",
            name: "url"  
        }])
  .then((answers) => {
      console.log(answers);
      const url = answers.URL;
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  
 
// 3. Create a txt file to save the user input using the native fs node module.
