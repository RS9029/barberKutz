// Mustache Underline

let links = document.querySelectorAll(".links");
let mustache = document.createElement('img');
mustache.setAttribute('src',"/resources/mustache.svg");
mustache.classList.add('mustache-underline');
document.body.append(mustache);



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

links.forEach(link=>{
    link.addEventListener('mouseenter',mustacheMove);
});