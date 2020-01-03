// Libraries
const readline = require("readline-sync");
const request = require("request-promise");
const fs = require("fs");
const colors = require("colors");

module.exports = {
  name: "scores",
  aliases: ["s","score","live","games","scoreboard"],
  run: function(cmd, args) {
    if (!args[0]) { // No date specified so goes to today's scores
      
    } 
  }
};