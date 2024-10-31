const prompt = require('prompt-sync')();

let subjectTitle = prompt("Enter the class schedule (time, Days):");
let classroom = prompt("Enter the classroom:");
let classInstructor = prompt("Enter the class instructor:");
let studentName = prompt("Enter the student name:");

console.log('${studentName} is currently enrolled in ${subjectTitle} with a class schedule of ${classSchedule} at the room ${classroom}. the instructor for the subject is $ {classInstructor}');