const message = document.querySelector("li");
const form = document.getElementById("form");
const input = document.getElementById("marks");

let gradeInput= document.querySelector('button')

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateInput(input);
});

function validateInput(input){
    console.log(input)
    console.log(input.value)
    
    const stdMark = input.value;
if (stdMark > 79 && stdMark < 100) {
    console.log("A");
    message.textContent = `Your grade is: A`;
} 
else if (stdMark >= 60 && stdMark <= 79) {
    console.log("B");
    message.textContent = `Your grade is: B`;
} 
else if (stdMark > 49 && stdMark <= 59) {
    console.log("C");
    message.textContent = `Your grade is: C`;
} 
else if (stdMark > 40 && stdMark <= 49) {
    console.log("D");
    message.textContent = `Your grade is: D`;
} 
else if (stdMark >= 0 && stdMark <= 40) {
    console.log("E");
    message.textContent = `Your grade is: E`;
} 
else {
    console.log("error, mark should be between 0 and 100");
    message.textContent = `Invalid Mark`;
}
} 