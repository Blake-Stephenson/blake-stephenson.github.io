console.log("yo")

const name = document.getElementById("name");
const navbar = document.getElementById("resume");
const projbar = document.getElementById("projtitle");
const loadscreen = document.getElementById("loader");

let lastKnownScrollPosition = 0;

name.style.fontSize=7+"vw";
navbar.style.paddingTop=3+"vw";


document.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;
    if(lastKnownScrollPosition<150){
        name.style.fontSize=7-lastKnownScrollPosition/50+"vw";
        navbar.style.paddingTop=3-lastKnownScrollPosition/75+"vw";
    }
    else{
        name.style.fontSize=4+"vw";
        navbar.style.paddingTop=1+"vw";
    }
    if(lastKnownScrollPosition>565+innerWidth/5){
        projbar.style.gridRowStart= 1;
        projbar.style.gridRowEnd= 2;
        projbar.style.position = "fixed" ;


    }else{
        projbar.style.gridRowStart= 6;
        projbar.style.gridRowEnd= 7;
        projbar.style.position = "static" ;

    }

    console.log(lastKnownScrollPosition);
});


function stopload() {
    loadscreen.style.height = "0px";
    console.log("this happen?")

}
document.addEventListener('readystatechange', () => {
    if (document.readyState == 'complete') stopload();
});
