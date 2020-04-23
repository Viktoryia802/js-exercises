var numberOfStudents = 15;
var numberOfMentors = 8;
var sum = numberOfStudents + numberOfMentors;

var percentofStudents = Math.round((numberOfStudents * 100) / sum);
var percentofMentors = Math.round((numberOfMentors * 100) / sum);

console.log("Percentage students: " + percentofStudents + "%");
console.log("Percentage mentors: " + percentofMentors + "%");
