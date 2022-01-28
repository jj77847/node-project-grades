const inquirer = require("inquirer");

const start = async () => {
  const question = {
    type: "number",
    message: "Please enter your marks",
    name: "marks",
  };

  const answer = await inquirer.prompt(question);

  const marks = answer.marks;

  const myGrade = grade(marks);

  const messageToDisplay = `Your Grade is: ${myGrade}`;

  console.log(messageToDisplay);
};

const grade = (num) => {
  if (num > 90 && num <= 100) {
    return "A";
  } else if (num > 80 && num <= 90) {
    return "B";
  } else if (num > 70 && num <= 80) {
    return "C";
  } else if (num > 60 && num <= 70) {
    return "D";
  } else {
    return "F";
  }
};

start();
