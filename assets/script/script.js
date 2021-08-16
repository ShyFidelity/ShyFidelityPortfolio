
var hiJill = document.getElementById("hi")


var scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60);};



//hide name on scroll 

function hideScroll() {

    hiJill.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible')
        } else {
            hiJill.setAttribute("style", "background-color: yellow;")
        }
        
    });
    
}




