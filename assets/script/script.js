
const nouns = ['rabbit','dog','pearl','system','symbol','painting','horse','rainbow','snake in the grass']
const adjectives = ['curly', 'sharp','slain','dead af','perfect', 'beautiful','fast','striped','ugly']
const  verbs = ['kept running up that hill', 'made a deal with God','decided there is no progress','buried me in the ground','forfeited this wicked game',"killed it's hero"]


var randomPoemDiv = document.getElementById('sentence');
var refreshButton = document.getElementById('refresh')

function randomPoem() {


randomPoemDiv.innerHTML = ""
let randomNoun = nouns[Math.floor(Math.random()*nouns.length)]
let randomAdj = adjectives[Math.floor(Math.random()*adjectives.length)]
let randomVerb = verbs[Math.floor(Math.random()*verbs.length)]

var randomPoemDisplay = document.createElement('p');
randomPoemDisplay = ["The " + randomNoun + " was " + randomAdj + " and so it " + randomVerb + "." ];


randomPoemDiv.append(randomPoemDisplay);


}


refreshButton.addEventListener('click',  function() {
   randomPoem();
}
);
