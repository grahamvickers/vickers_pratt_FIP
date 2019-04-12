(() => {

console.log("Main Javascript is Linked");


var button = document.querySelector("button");
var burgerCon = document.querySelector("#burgerCon");


//used to make thee mobile and tablet burger menus appear

function hamburgerMenu() {
    console.log("Click Worked")
    burgerCon.classList.toggle("slideToggle");
    button.classList.toggle("expanded");
}




button.addEventListener("click", hamburgerMenu);





})();
