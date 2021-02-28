// Mustache Underline

let links = document.querySelectorAll(".links");
let mustache = document.createElement('img');
const nav = document.getElementById('top-nav');


// Initial nav mustache config
mustache.setAttribute('src',"/resources/mustache.svg");
mustache.classList.add('mustache-underline');
document.body.append(mustache);


// functions that controls how the mustache in the nav bar moves from link to link
function mustacheMove(){
    let linkPosition = this.getBoundingClientRect();
    
    let coordinates = {
        topOffset: linkPosition.top + window.scrollY + linkPosition.height,
        leftOffset:linkPosition.left + window.scrollX,
        width:linkPosition.width
    }
    mustache.style.display = "block"
    mustache.style.width = `${coordinates.width}px`;
    mustache.style.transform = `translate(${coordinates.leftOffset}px, ${coordinates.topOffset}px)`;
}


// functions that controls when user isnt hovering over a link for the mustache to disappear 
function mustacheRemove(){
    mustache.style.display = "none";
}


// mustache event listeners

links.forEach(link=>{
    link.addEventListener('mouseenter',mustacheMove);
});

nav.addEventListener('mouseleave',mustacheRemove);