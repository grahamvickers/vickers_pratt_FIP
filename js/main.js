(() => {

console.log("Main Javascript is Linked");


var button = document.querySelector("button");
var burgerCon = document.querySelector("#burgerCon");

//used to make thee mobile and tablet burger menus appear

function hamburgerMenu() {
    console.log("Click Worked");
    burgerCon.classList.toggle("slideToggle");
    button.classList.toggle("expanded");
}

//set the logo x value to -200
TweenLite.set(".logoImg",{x:'-200'});
// ease the logo back to the position of origin over the course of 1.5 seconds
TweenLite.to(".logoImg", 1.5, { ease: Power4.easeOut, x: 0});




button.addEventListener("click", hamburgerMenu);





})();
