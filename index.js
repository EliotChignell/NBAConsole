// Libraries
const readline = require("readline-sync");
const request = require("request-promise");
const fs = require("fs");
const colors = require("colors");

function menu() {
  // Getting user input and organising it into the cmd and args
  let input = readline.question("~> ");
  let cmd = input.split(" ")[0];
  let args = input.split(" ").splice(1, input.split(" ").length - 1);

  // Cycling through files in commands/ directory
  fs.readdir("./commands/", (err, files) => {
    files.forEach((file, index) => {
      let fileObject = require(`./commands/${file}`);
      if (fileObject.name == cmd.toLowerCase() || fileObject.aliases.includes(cmd.toLowerCase())) { // Checking that the command exists in the commands/ directory
        fileObject.run(cmd, args); 
      } else {
        console.log(`${"Error:".red} Command not found.\n-> Run ${"help".green} to see all available commands.`);
      }
    });
  });
}

menu();