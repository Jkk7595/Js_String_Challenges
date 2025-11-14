
//         //   1. Uppercase or Lowercase?

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

//         2. Check First Letter
// function string () {
//   const str = prompt("Enter a string:");
//   if(str.startsWith ("A") || str.startsWith("a")){
//     console.log("Starts with A")
//   }else{
//     console.log( "Does not start with A")
//   }
// }
// string()

          
//     3. Replace a Word
//      const input =  "I am sad today"
//      const output = input.replace("sad","happy")
//      console.log(output)


//         4. Validate Email Format
//         function checker(){

//         const str = prompt("Enter a string:")

//          if(str.includes("@") && str.includes(".")){
//         console.log("Valid email")
//         }else{
//         console.log("invalid email")
//         }
//         }
//         checker()

//                 4b Validate Email Format        
//         const str = prompt("Enter a string:");
//         if (str.includes("@") && str.includes(".")) {
//           console.log("Valid email");
//         } else {
//           console.log("Invalid email");
//         }


//                 5. Ends With a Question?
//  const sentence = prompt("Enter a String: ")
//      if(sentence.endsWith("?")){
//     console.log("This is a Question")
//      }else{
//         console.log("Not a Question")
//      }


// let pin = "0721780345"
// masked = pin[0]+pin[1]+pin[2]+pin[3]+"####"+pin[8]+pin[9];
// console.log(masked)


// let pin = "0721780345";
// let masked = pin.slice(0, 3) + "###" + pin.slice(-4);
// console.log(masked);

// let phone = "0721780345";
// let masked = "*".repeat(phone.length - 3) + phone.slice(-3);
// console.log(masked);


// let num = "7667777869353654674758"
//  let masked = "#".repeat(num.length-5) + num.slice(-5);
//  console.log(masked)


// let num = 869353654674758
// convert the num to string first so the it allow you to use .length and .slice method

// let numStr = num.toString();
// let masked = "#".repeat(numStr.length - 5) + numStr.slice(-5);
// console.log(masked);




// let count = 0;
// while (true) {
//   count++;

//   if (count % 2 === 0) continue; // skip even numbers

//   console.log("Odd number:", count);

//   if (count >=9) break; // stop loop at 10
// }



                // 7. Middle Character(s)
                // let word =prompt ("Enter a word")
                // const length = word.length
                // const mid = Math.floor(length / 2);
                // console.log(mid)
                // if(length % 2===0){
                // console.log(word.slice(mid-1,mid+1))

                // }else{
                //         console.log(word[mid])
                // }



                // 8. Compare Two Words

                const word1 = prompt("Enter Your 1st Word?")
                        let case1 = word1.toLowerCase()
                const word2 = prompt("Enter Your 2st Word?")
                        let case2 = word2.toLowerCase()
                        if(case1===case2){
                                console.log("MATCHED")
                        }else{
                                console.log("DID NOT MATCHED")
                        }


                //         planB        
                //         const word1 = prompt("Enter Your 1st Word?")
                //         let case1 = word1.toLowerCase()
                // const word2 = prompt("Enter Your 2st Word?")
                //         let case2 = word2.toLowerCase()
                //         if(case1===case2){
                //                 console.log("MATCHED")
                //         }else if(case1!==case2){
                //                 console.log("DID NOT MATCH")
                //         }else{
                //                 console.log("Try again")
                //         }
                        

