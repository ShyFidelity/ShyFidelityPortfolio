
// var hiJill = document.getElementById("hi");


// var scroll = window.requestAnimationFrame ||
//             function(callback){ window.setTimeout(callback, 1000/60);};



//hide name on scroll 

// function hideScroll() {

//     hiJill.forEach(element => {
//         if (isElementInViewport(element)) {
//             element.classList.add('is-visible')
//         } else {
//             hiJill.setAttribute("style", "background-color: yellow;")
//         }
        
//     });
    
// }



const nouns = ['rabbit','dog','pearl','system','symbol','painting','horse','rainbow','snake in the grass']
const adjectives = ['curly', 'sharp','slain','dead af', 'beautiful','horny','fast','striped','ugly']
const  verbs = ['kept running up that hill', 'made a deal with God','decided there is no progress','buried me in the ground','forfeited this wicked game',"killed it's hero"]


var randomPoemDiv = document.getElementById('sentence');
var refreshButton = document.getElementById('refresh')

function randomPoem() {
    

let randomNoun = nouns[Math.floor(Math.random()*nouns.length)]
let randomAdj = adjectives[Math.floor(Math.random()*adjectives.length)]
let randomVerb = verbs[Math.floor(Math.random()*verbs.length)]

var randomPoemDisplay = document.createElement('p');
randomPoemDisplay = "The " + randomNoun + " was " + randomAdj + " and so it " + randomVerb + "." ;

randomPoemDiv.append(randomPoemDisplay);


}




refreshButton.addEventListener('click',  function() {
    console.log("hi");
    console.log(randomPoem())    
 
}
);



// var poetry1 = "ya wild roll of the dice to decide which one of the loves of my life caused it"
// var poetry2 = "she jerked off her necklace i ripped under my ribs  a red mess glittered"
// var poetry3 = "She'll only get the best of me I'll only get the rest of her"
// var poetry4 = "This snake was in the grass like every snake i've scene before"
// var poetry5 = "learned to never walk under that bridge"
// // var sentenceEl = document.getElementById('sentence');

// poetryEmpty = []
// var allPoems = [poetry1, poetry2, poetry3, poetry4, poetry5]

// console.log(allPoems);


// allPoems.forEach(element => {
//     var words= element.split(' ')
//     console.log(words);
// });


    
