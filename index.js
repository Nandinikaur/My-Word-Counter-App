#! /usr/bin/env node
//Nandini_Kaur 06-05-2024
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.blue(`\n\t>>>>>>***WELCOME TO MY WORD-COUNTER APP***<<<<<</t\n\n`));
let word_counter = await inquirer.prompt([
    {
        name: "words",
        type: "input",
        message: chalk.bgBlue("a: Enter some text"),
    }
]);
let countWords = word_counter.words.trim().split(" ").length;
console.log(chalk.green.bold(`\n\tYou entered ${chalk.bold.yellow(countWords)} word(s).\t\n`));
