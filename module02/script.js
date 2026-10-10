//TODO: Include your multi-line comment header
/*
    Name: Tania Kuisma 
    Date: 9/14/2026
    Assignment: Module 1
    Quarter: Fall 2026
    Instructor: Kuisma
*/

// TODO: Import "use strict" directive
"use strict";

// DO NOT MODIFY
const display = (label, value) =>
  (document.getElementById("output").innerHTML += `${label}: ${value}<br>`);
// END DO NOT MODIFY

// ADD YOUR CODE BELOW
const courseModules = [
  "Module 1",
  "Module 2",
  "Module 3",
  "Module 4",
  "Module 5",
  "Module 6",
  "Module 7",
  "Module 8",
  "Module 9",
  "Module 10"
];

//const completedModules = ["Module 1", "Module 2"];

// TODO: Create variables for your name (string), total number of modules for our class (number), and if you're enrolled (boolean)
const myName = "Tania";
const totalModules = 10;
const isEnrolled = true;

// TODO: Use a template literal to output a welcome message. Use at least one ${}.
let message = `Welcome, ${myName}!`

// TODO: Calculate the total study hours for the course. There are 10 modules. Each module takes roughly 6 hours.
// Formula: totalStudyHours = totalModules * hoursPerWeek
const hoursPerWeek = 6;
const totalStudyHours = totalModules * hoursPerWeek;

// TODO: Calculate the number of study hours each day. Convert the output to minutes (this formula is not provided).
// Formula: dailyStudyHours = hoursPerWeek / 7
const dailyStudyHours = hoursPerWeek / 7;
const dailyStudyMinutes = dailyStudyHours * 60;

// TODO: Give yourself a rest day and exclude one day out of your week. Calculate the new number of hours and set it to adjustedDailyHours. Convert the output to minutes (this formula is not provided).
const adjustedDailyHours = hoursPerWeek / 6;
const adjustedDailyMinutes = adjustedDailyHours * 60;

// TODO: Calculate the course percent complete and the course percent remaining. Imagine you've completed 2 modules (Start Here and Module 1).
// Formula: percent = (part / whole) * 100
const completedModules = prompt("Enter completed modules (1-10): ");
const percentComplete = (completedModules / totalModules) * 100;
const percentRemaining = 100 - percentComplete;

//Module 2 Part 1
let courseProgress;

if(percentRemaining === 0){
  courseProgress = "Current Progress: Finished!";
} else if (percentRemaining >= 1 && percentRemaining <= 24.99) {
  courseProgress = "Current Progress: Almost Finished!";
} else if (percentRemaining >= 25 && percentRemaining <= 74.99) {
  courseProgress = "Current Progress: Making Progress";
} else if (percentRemaining >= 75 && percentRemaining <= 100) {
  courseProgress = "Current Progress: Just Getting Started";
} else {
  courseProgress = "Invalid Entry";
}

//Module 2 Part 2

let courseGrade;

if (percentComplete >= 90) {
  courseGrade = "A";
} else if (percentComplete >= 80 && percentComplete <= 89.99) {
  courseGrade = "B";
} else if (percentComplete >= 70 && percentComplete <= 79.99) {
  courseGrade = "C";
} else if (percentComplete >= 60 && percentComplete <= 69.99) {
  courseGrade = "D";
} else if (percentComplete <= 59.99) {
  courseGrade = "F";
} else {
  courseGrade = "Invalid number entered";
}

//Module 2 Part 3
let studyPlan;

let studyDay;

if (percentComplete == 100) {
  studyDay = "Complete";
} else {
  studyDay = prompt("Please enter a day: ");
}

switch (studyDay) {
  case "Monday":
    studyPlan = `Read the module overview for ${dailyStudyMin.toFixed(2)} minutes.`;
    break;

  case "Tuesday":
    studyPlan = `Review lesson materials for ${dailyStudyMin.toFixed(2)} minutes.`;
    break;

  case "Wednesday":
    studyPlan = `Complete coding exercises for ${dailyStudyMin.toFixed(2)} minutes.`;
    break;

  case "Thursday":
    studyPlan = `Work on the weekly assignment for ${dailyStudyMin.toFixed(2)} minutes.`;
    break;

  case "Friday":
    studyPlan = `Review your progress for ${dailyStudyMin.toFixed(2)} minutes.`;
    break;

  case "Saturday":
    studyPlan = "Catch up on incomplete work.";
    break;

  case "Sunday":
    studyPlan = "Take a rest day.";
    break;

  case "Complete":
    studyPlan = "Course Completed!";
    break;

  default:
    studyPlan = "Invalid Day Entered.";
}



// DISPLAY RESULTS

// TODO: Display your results. Use the correct variables and avoid hard-coding the data below.
// TODO: Adjust all decimals to two places.
display("Welcome Message", message);
display("My Name", myName);
display("Enrolled", isEnrolled);
display("Total Modules", totalModules);
display("Daily Study Hours (7 days)", dailyStudyHours.toFixed(2));
display("Daily Study Minutes (7 days)", dailyStudyMinutes.toFixed(2));
display("Daily Study Hours (with rest day)", adjustedDailyHours.toFixed(2));
display("Daily Study Minutes (with rest day)", adjustedDailyMinutes.toFixed(2));

// TODO: Display your results with a % sign
display("Percent Complete", `${percentComplete.toFixed(2)}%`);
display("Percent Remaining", `${percentRemaining.toFixed(2)}%`);

//Module 2 Outputs
display("Course Progress", courseProgress);
display("Course Grade", courseGrade);
display("Study Plan", studyPlan);
display("Study Day", studyDay);
