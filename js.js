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
const defaultr = [ ["morning", "afternoon", "evening", "midnight", "dawn", "sunrise", "noon", "dusk", "twilight", "nightfall"], ["start", "fix", "build", "revamp", "debug", "code", "optimize", "rewrite", "test", "launch"], ["challenging", "exciting", "ambitious", "complex", "tedious", "groundbreaking", "buggy", "unfinished", "rewarding", "confusing"], ["notebook", "keyboard", "headset", "desk", "mug", "chair", "manual", "mouse", "backpack", "coffee cup"], ["ancient", "shiny", "powerful", "noisy", "overheating", "custom-built", "fast", "trusted", "sleek", "dusty"], ["lines", "commands", "codes", "scripts", "functions", "algorithms", "methods", "variables", "loops", "parameters"], ["promising", "terrifying", "smooth", "confusing", "unexpected", "innovative", "perfect", "stable", "broken", "hopeful"], ["blue", "red", "green", "yellow", "purple", "orange", "pink", "white", "black", "teal"], ["Oops", "Yikes", "Wow", "No!", "Eureka", "Ah!", "Oh no", "Drat", "Ack", "Hooray"], ["fix", "solve", "rewrite", "debug", "adjust", "update", "examine", "reverse", "reset", "analyze"], ["code", "logic", "syntax", "function", "module", "framework", "library", "class", "error", "loop"], ["crash", "loop", "fail", "freeze", "glitch", "misbehave", "restart", "explode", "lag", "break"], ["forums", "articles", "tutorials", "blogs", "FAQs", "guides", "videos", "instructions", "solutions", "resources"], ["helpful", "confusing", "detailed", "vague", "amazing", "simple", "technical", "boring", "unexpected", "random"], ["quick", "creative", "tiny", "weird", "unexpected", "bold", "ingenious", "complex", "minimal", "colorful"], ["snippet", "function", "line", "module", "variable", "array", "comment", "solution", "command", "object"], ["crash", "succeed", "malfunction", "grow", "compile", "repeat", "restart", "work", "fail", "build"], ["phone", "charger", "tablet", "mouse", "power bank", "light", "cable", "speaker", "controller", "monitor"], ["coffee", "tea", "soda", "smoothie", "juice", "latte", "water", "hot chocolate", "energy drink", "milkshake"], ["hands", "fingers", "eyes", "wrists", "shoulders", "arms", "legs", "ears", "knees", "back muscles"], ["quit", "yell", "cry", "sigh", "collapse", "pace", "sulk", "daydream", "scream", "walk"], ["lightning bolt", "spark", "revelation", "idea", "miracle", "epiphany", "genius", "vision", "flash", "solution"], ["program", "project", "file", "repository", "blueprint", "sketch", "interface", "framework", "design", "script"], ["final", "crucial", "delicate", "minor", "major", "significant", "bold", "polished", "clever", "intense"], ["It works!", "Success!", "Finally!", "No bugs!", "I'm a genius!", "Victory!", "Perfect!", "Done!", "Eureka!", "Finished!"], ["celebrated", "danced", "shouted", "cheered", "laughed", "jumped", "cried", "collapsed", "clapped", "screamed"], ["amazing", "perfect", "unique", "incredible", "stable", "polished", "reliable", "beautiful", "bug-free", "unbelievable"], ["change", "revolutionize", "transform", "amaze", "assist", "inspire", "improve", "challenge", "modernize", "surprise"], ["pizza", "burger", "soup", "sandwich", "pasta", "chips", "soda", "coffee", "tea", "cake"] ];
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