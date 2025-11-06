const str = prompt("Enter a string:");

// store the input/string entered
const strEntered = str; 

if (strEntered === strEntered.toUpperCase()) {
  console.log("UPPERCASE");
} else if (strEntered === strEntered.toLowerCase()) {
  console.log("LOWERCASE");
} else {
  console.log("Mixed");
}
