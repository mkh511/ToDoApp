#! /usr/bin/env node

import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let todoquestion = await inquirer.prompt([
        { name: "FirstQuestion",
            type: "input",
            message: "What do you want to add in your list?",
            validate: function (input){
               if (input.trim() === "") {
                return "Please Enter Valid Task";}
        return true;
                 
                
            },

        },
        
        {
            name: "SecondQuestion",
            type: "confirm",
            message: "DO you want to add more thing in your list?",
            default: "true"
    }]);
   
    todo.push(todoquestion.FirstQuestion.trim());
    // console.log(todo);
    condition = todoquestion.SecondQuestion;
    console.log("Your Tasks are as below");
    console.log(todo.join("\n"))
}
