let page1 = ``;
let page2 = ``;
let array = [];
const array2 = [ "time of day", "verb", "adjective", "noun", "adjective", "plural noun", "adjective", "color", "exclamation", "verb", "noun", "verb", "plural noun", "adjective", "adjective", "noun", "verb", "noun", "beverage", "plural body part", "verb", "noun", "noun", "adjective", "phrase of victory", "verb past tense", "adjective", "verb", "food or drink"];
let ibox = document.createElement("div");
ibox.style.backgroundColor = "gray";
let form1 = document.createElement("form");
ibox.appendChild(form1);

for(let i = 0; i<2; i++){
    array.push([]);
    array[i].push(document.createElement("label"));
    array[i].push(document.createElement("input"));
    form1.appendChild(array[i][0]);
    form1.appendChild(array[i][1]);
}

document.body.appendChild(ibox);





/* 
"One (time of day), I decided it was time to finally (verb) my (adjective) coding project. 
I grabbed my (noun), powered up my (adjective) laptop, and began typing lines of (plural noun) like a true genius. 
Everything seemed (adjective) until my screen turned (color) and displayed the dreaded message: '(exclamation)!'
Confused, I tried to (verb) the issue by tweaking the (noun), but that only made the program (verb) uncontrollably. 
Desperate, I Googled (plural noun) for help and stumbled across a (adjective) tutorial that suggested adding a (adjective) (noun). 
I nervously implemented it, only to watch my program (verb) even more!
Hours passed. My (noun) ran out of battery, my (beverage) grew cold, and my (plural body part) ached from stress.
 But just as I was about to (verb) and give up, inspiration struck like a (noun). 
 I rewrote the entire (noun) from scratch, added a final (adjective) tweak, and held my breath as I clicked ‘Run.’
To my surprise, the screen displayed '(phrase of victory)!' I jumped up and (verb past tense) with joy. 
My (adjective) program was complete, ready to (verb) the world. 
All that effort, and I could finally enjoy a well-earned (food or drink)."

*/