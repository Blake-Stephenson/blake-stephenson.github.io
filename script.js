console.log("yo")

const name = document.getElementById("name");
const navbar = document.getElementById("resume")
let lastKnownScrollPosition = 0;

name.style.fontSize=7+"vw";
navbar.style.paddingTop=3+"vw";


document.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;
    if(lastKnownScrollPosition<150){
        name.style.fontSize=7-lastKnownScrollPosition/50+"vw";
        navbar.style.paddingTop=3-lastKnownScrollPosition/75+"vw";
        console.log(7-lastKnownScrollPosition/50)
    }
    else{
        name.style.fontSize=4+"vw";
        navbar.style.paddingTop=1+"vw";
    }

});