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


// these is called conditional rendering
// the two below is the same
{isShown ? <p>{props.punchline}</p> : ''}
{isShown && <p>{props.punchline}</p>}
{messages.length > 1 && "s"}
{messages.length > 1 ? "messages" : "message"}

//note
// ampersant method is great if you want to display or not display

// ternary method is great if you want to choose between two entity to diplay
