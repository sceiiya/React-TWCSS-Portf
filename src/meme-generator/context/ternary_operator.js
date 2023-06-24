// from

let isGoingOut = true
    
let answer  // Use ternary here
if(isGoingOut === true) {
    answer = "Yes"
} else {
    answer = "No"
}

// to
let answer2 = isGoingOut === true ? "Yes" : "No"
// let answer2 = isGoingOut ? "Yes" : "No"

let answer3 = isGoingOut ? "Yes" : "No";
console.log(answer3); // Output: Yes

isGoingOut = false;
answer3 = isGoingOut ? "Yes" : "No";
console.log(answer3); // Output: No