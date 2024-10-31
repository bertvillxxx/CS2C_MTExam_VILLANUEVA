const prompt = require('prompt-sync')();

let DSA = [];
let PL = [];
let Networks = [];
let subject;

while (true) {
  console.log("Select Subject:");
  console.log("A) DSA");
  console.log("B) PL");
  console.log("C) Networks");

  let subjectChoice = prompt("Enter your choice: ");

  if (subjectChoice === "A") {
    let subject = DSA;
  } else if (subjectChoice === "B") {
    let subject = PL;
  } else if (subjectChoice === "C") {
    let subject = Networks;
  } else {
    console.log("Invalid Subject Choice!");
    continue;
  }

  console.log("\nSelect Operation:");
  console.log("A) Enroll");
  console.log("B) Unenroll");
  console.log("C) Select Another Subject");
  console.log("D) Exit");

  let operationChoice = prompt("Enter your choice: ");

  if (operationChoice === "A") {
    let studentName = prompt('Enter student name to enroll:');
    subject.push(studentName);
    console.log('${studentName} enrolled in ${subjectChoice}');
  } else if (operationChoice === "B") {
  
    if (subject.length === 0) {
      console.log("No students enrolled in this subject.");
    } else {
      console.log("Currently enrolled students:");
      for (let i = 0; i < subject.length; i++) {
        console.log('${i + 1}. ${subject[i]}');
      }

      let studentName = prompt("Enter student name to unenroll: ");
      let index = subject.indexOf(studentName);
      if (index !== -1) {
        subject.splice(index, 1);
        console.log('${studentName} unenrolled from ${subjectChoice}');
      } else {
        console.log('${studentName} not found in enrolled students.');
      }
    }
  } else if (operationChoice === "C") {
    continue;
  } else if (operationChoice === "D") {
    console.log("\nEnrolled Students:");
    console.log('DSA: ${DSA.join(", ")}');
    console.log('PL: ${PL.join(", ")}');
    console.log('Networks: ${Networks.join(", ")}');
    break;
  } else {
    console.log("Invalid Operation Choice!");
  }
}

