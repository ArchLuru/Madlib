function story(){ // makes sure you filled in all boxes with atleast 1 character
    for(let i = 0; i<array2.length; i++)
        if(array[i][1].value.length < 1){
            alert("Please fill in all the boxes."); return;
    }

ibox.style.fontFamily = "Courier New, sans-serif";
ibox.style.fontSize = "1.5vw";
ibox.style.color = "lightgreen";
ibox.innerHTML = `One ${array[0][1].value}, I decided it was time to finally ${array[1][1].value} my ${array[2][1].value} coding project.
I grabbed my ${array[3][1].value}, powered up my ${array[4][1].value} laptop, and began typing lines of ${array[5][1].value} like a true genius.
Everything seemed ${array[6][1].value} until my screen turned ${array[7][1].value} and displayed the dreaded message: '${array[8][1].value}!'
Confused, I tried to ${array[9][1].value} the issue by tweaking the ${array[10][1].value}, but that only made the program ${array[11][1].value} uncontrollably.
Desperate, I Googled ${array[12][1].value} for help and stumbled across a ${array[13][1].value} tutorial that suggested adding a ${array[14][1].value} ${array[15][1].value}.
I nervously implemented it, only to watch my program ${array[16][1].value} even more!
Hours passed. My ${array[17][1].value} ran out of battery, my ${array[18][1].value} grew cold, and my ${array[19][1].value} ached from stress.
But just as I was about to ${array[20][1].value} and give up, inspiration struck like a ${array[21][1].value}.
I rewrote the entire ${array[22][1].value} from scratch, added a final ${array[23][1].value} tweak, and held my breath as I clicked 'Run.'
To my surprise, the screen displayed '${array[24][1].value}!' I jumped up and ${array[25][1].value} with joy.
My ${array[26][1].value} program was complete, ready to ${array[27][1].value} the world.
All that effort, and I could finally enjoy a well-earned ${array[28][1].value}.`; // story + variables.
}
function fill() {
    for(let i = 0; i<array2.length; i++)
        array[i][1].value = defaultr[i][Math.floor(Math.random()*10)];
}
let array = []; // array holds label and input elements. array2 holds what each label will be.
const array2 = [ "time of day", "verb", "adjective", "noun", "adjective", "plural noun", "adjective", "color", "exclamation", "verb", "noun", "verb", "plural noun", "adjective", "adjective", "noun", "verb", "noun", "beverage", "plural body part", "verb", "noun", "noun", "adjective", "phrase of victory", "verb past tense", "adjective", "verb", "food or drink"];
const defaultr = [ ["Morning", "Noon", "Afternoon", "Dusk", "Evening", "Midnight", "Sunrise", "Sunset", "Twilight", "Dawn"], ["Finish", "Complete", "Start", "Build", "Improve", "Fix", "Code", "Create", "Work", "Develop"], ["Complex", "Simple", "Difficult", "Challenging", "Easy", "Fun", "Amazing", "Exciting", "Powerful", "Messy"], ["Laptop", "Phone", "Keyboard", "Screen", "Code", "Program", "File", "Document", "Software", "Script"], ["Powerful", "Fast", "Slow", "Heavy", "Light", "Sturdy", "Beautiful", "Sleek", "Efficient", "Fragile"], ["Codes", "Bugs", "Errors", "Scripts", "Files", "Programs", "Functions", "Commands", "Variables", "Lines"], ["Exciting", "Nervous", "Tense", "Surprising", "Unpredictable", "Frustrating", "Fun", "Stressful", "Thrilling", "Mysterious"], ["Red", "Blue", "Green", "Yellow", "Black", "White", "Purple", "Pink", "Orange", "Gray"], ["Oh no", "Yikes", "Wow", "Oops", "Ugh", "Whoa", "Eek", "Hooray", "Dang", "Aha"], ["Fix", "Repair", "Restart", "Tweak", "Change", "Adjust", "Modify", "Update", "Test", "Correct"], ["Settings", "Preferences", "Files", "Code", "Script", "Configuration", "Options", "Commands", "Buttons", "Inputs"], ["Crash", "Freeze", "Fail", "Stop", "Break", "Glitch", "Stutter", "Malfunction", "Bug", "Lag"], ["Solutions", "Tutorials", "Answers", "Forums", "Guides", "Articles", "Websites", "Forums", "FAQs", "Posts"], ["Detailed", "Informative", "Quick", "Clear", "Useful", "Easy", "Short", "Helpful", "Long", "Clear"], ["Last-minute", "Quick", "Easy", "Simple", "Complicated", "Unconventional", "Experimental", "Final", "Helpful", "Last-ditch"], ["Code", "Project", "Program", "Script", "Function", "Functionality", "Algorithm", "Task", "Objective", "Operation"], ["Work", "Function", "Operate", "Run", "Process", "Execute", "Respond", "Activate", "Run", "Activate"], ["Idea", "Moment", "Thought", "Inspiration", "Realization", "Dream", "Concept", "Thought", "Flash", "Insight"], ["Coffee", "Tea", "Water", "Juice", "Soda", "Milk", "Smoothie", "Hot Chocolate", "Lemonade", "Wine"], ["Hands", "Feet", "Legs", "Arms", "Eyes", "Ears", "Knees", "Fingers", "Toes", "Shoulders"], ["Quit", "Stop", "Pause", "Leave", "Fail", "Give up", "Surrender", "Give in", "Exit", "Walk away"], ["Break", "Rest", "Pause", "Timeout", "Escape", "Vacation", "Recess", "Intermission", "Respite", "Relief"], ["Final", "Last", "Permanent", "Absolute", "Sure", "Complete", "Settled", "Done", "Conclusive", "Finished"], ["I did it", "Success!", "Victory!", "Got it!", "Boom!", "Nailed it!", "Yes!", "Woo-hoo!", "Won!", "Champion!"], ["Danced", "Laughed", "Celebrated", "Jumped", "Screamed", "Shouted", "Smiled", "Cried", "Ran", "Hopped"], ["Perfect", "Flawless", "Amazing", "Awesome", "Brilliant", "Wonderful", "Successful", "Complete", "Beautiful", "Impressive"], ["Change", "Modify", "Update", "Improve", "Alter", "Fix", "Adjust", "Tweak", "Refine", "Enhance"], ["Pizza", "Burger", "Soda", "Cake", "Ice cream", "Sandwich", "Salad", "Smoothie", "Water", "Coffee"], ["Problem", "Idea", "Solution", "Breakthrough", "Challenge", "Algorithm", "Bug", "Process", "Step", "Stage"] ];
let ibox = document.createElement("div");
let form1 = document.createElement("form");
ibox.appendChild(form1);

for(let i = 0; i<array2.length; i++){
    if(i%3==0 && i != 0){
        form1.appendChild(document.createElement("br"));  // line break for spacing
        form1.appendChild(document.createElement("br"));
    }
    array.push([]);
    array[i].push(document.createElement("label"));
    array[i][0].setAttribute("for", `${i}`)
    array[i][0].innerHTML = array2[i] + ": ";
    array[i].push(document.createElement("input"));
    array[i][1].id = `${i}`;
    array[i][1].setAttribute("name", `${i}`);
    array[i][1].style.marginRight = "1vw";
    array[i][1].style.width = "8vw";
    array[i][1].style.height = "2vh";
    array[i][1].style.fontSize = "1em";
    form1.appendChild(array[i][0]);
    form1.appendChild(array[i][1]); 
} // The for loop creates and styles each label and input, pushing into array for easy access.
document.body.style.cssText = `
user-select: none;
background-color: silver;
display: flex;
height: 100vh;
flex-flow: column wrap;
justify-content: center;
align-items: center;
`; // css for body
ibox.style.cssText = `
font-size: 1.05vw;
width: 50vw;
overflow: auto;
justify-content: center;
height: 60vh;
padding: 1rem;
border-radius: 1rem;
display: flex;
flex-flow: row wrap;
background-color: gray;
`; // css for the div that that holds everything.
const but = [document.createElement("button"), document.createElement("button")];
for(let i = 0; i<2; i++){
but[i].style.position = "relative";
but[i].style.marginTop = "2vh";
but[i].style.width = "8vw";
but[i].style.height = "4vh";
but[i].style.fontSize = "0.8em"; // button css
if(i == 0) {but[i].innerText = "Submit"; but[i].style.left = "5%";}
else{but[i].innerText = "Random Fill"; but[i].style.left = "30%";} 
ibox.appendChild(but[i]);
}
but[0].setAttribute("onclick", "story()"); // adding function on click
but[1].setAttribute("onclick", "fill()"); // adding function on click
document.body.appendChild(ibox);