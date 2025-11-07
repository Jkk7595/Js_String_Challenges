// const str = prompt("Enter a string:");

// // store the input/string entered
// const strEntered = str; 

// if (strEntered === strEntered.toUpperCase()) {
//   console.log("UPPERCASE");
// } else if (strEntered === strEntered.toLowerCase()) {
//   console.log("LOWERCASE");
// } else {
//   console.log("Mixed");
// }


function string () {
  const str = prompt("Enter a string:");
  if(str.startsWith ("A") || str.startsWith("a")){
    console.log("Starts with A")
  }else{
    console.log( "Does not start with A")
  }
}
string()