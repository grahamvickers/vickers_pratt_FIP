(() => {

console.log("Javascript for Links is Linked");


var button = document.querySelector("button");
var burgerCon = document.querySelector("#burgerCon");


var conservation = document.querySelector("#conservation");
var conAuth = document.querySelector("#conAuthorities");
var government = document.querySelector("#government");
var retail = document.querySelector("#retailers");
var fishLinks = document.querySelector("#fishLinks");


//used to make thee mobile and tablet burger menus appear

function hamburgerMenu() {
    console.log("Click Worked")
    burgerCon.classList.toggle("slideToggle");
    button.classList.toggle("expanded");
}




//displays the correct group of links based upon the specific section called upon

function conservationCon() {
    console.log("Links Changed")
    document.getElementById("subLinks").innerHTML = "";
    document.getElementById("subLinks").innerHTML = "<h3>Conservation</h3><ul><li><a href='#'><h4>Carolinian Canada</h4></a></li><li><a href='#'><h4>Friends of the Thames / Thames River Cleanup</h4></a></li><li><a href='#'><h4>Nature London</h4></a></li><li><a href='#'><h4>North Shore Steelhead Association</h4></a></li><li><a href='#'><h4>Ontario Streams</h4></a></li><li><a href='#'><h4>Ontario Federation of Anglers and Hunters</h4></a></li><li><a href='#'><h4>Trout Unlimited Canada</h4></a></li></ul>";
}

function authCon() {
    console.log("Links Changed")
    document.getElementById("subLinks").innerHTML = "";
    document.getElementById("subLinks").innerHTML = "<h3>Conservation Authorities</h3><ul><li><a href='#'><h4>Ausable Bayfield Conservation Authority</h4></a></li><li><a href='#'><h4>Credit Valley Conservation Authority</h4></a></li><li><a href='#'><h4>Essex Region Conservation Authority</h4></a></li><li><a href='#'><h4>Grand River Conservation Authority</h4></a></li><li><a href='#'><h4>Halton Region Conservation Authority</h4></a></li><li><a href='#'><h4>Hamilton Region Conservation Authority</h4></a></li><li><a href='#'><h4>Long Point Region Conservation Authority</h4></a></li><li><a href='#'><h4>Lakehead Region Conservation Authority</h4></a></li><li><a href='#'><h4>Lower Thames Valley Conservation Authority</h4></a></li><li><a href='#'><h4>Metro Toronto & Region Conservation Authority</h4></a></li><li><a href='#'><h4>Rideau Valley Conservation Authority</h4></a></li><li><a href='#'><h4>St.Clair Region Conservation Authority</h4></a></li><li><a href='#'><h4>Upper Thames River Conservation Authority</h4></a></li></ul>";
}

function governmentCon() {
    console.log("Links Changed")
    document.getElementById("subLinks").innerHTML = "";
    document.getElementById("subLinks").innerHTML = "<h3>Government Entities</h3><ul><li><a href='#'><h4>Ontario Ministry of Natural Resources</h4></a></li><li><a href='#'><h4>Ontario Ministry of the Environment</h4></a></li></ul>";
}

function retailCon() {
    console.log("Links Changed")
    document.getElementById("subLinks").innerHTML = "";
    document.getElementById("subLinks").innerHTML = "<h3>Local Retailers</h3><ul><li><a href='#'><h4>Angling Sports</h4></a></li><li><a href='#'><h4>Lambeth Rod & Tackle</h4></a></li><li><a href='#'><h4>John's Fly Materials</h4></a></li><li><a href='#'><h4>Angling Outfitters</h4></a></li></ul>";
}

function fishCon() {
    console.log("Links Changed")
    document.getElementById("subLinks").innerHTML = "";
    document.getElementById("subLinks").innerHTML = "<h3>Fishing Links</h3><ul><li><a href='#'><h4>Ian Colin James</h4></a></li><li><a href='#'><h4>Western Ontario Fish & Game Protective Association</h4></a></li><li><a href='#'><h4>Forest City Fly Fishing Club</h4></a></li><li><a href='#'><h4>Forest City Bassmasters</h4></a></li><li><a href='#'><h4>Real-Time Hydrometric Data</h4></a></li><li><a href='#'><h4>Match Angling Club of Ontario</h4></a></li><li><a href='#'><h4>SOTTO Fly Fishing Club</h4></a></li><li><a href='#'><h4>Thames River Paddling Routes</h4></a></li></ul>";
}


button.addEventListener("click", hamburgerMenu);



conservation.addEventListener("click", conservationCon);
conAuth.addEventListener("click", authCon);
government.addEventListener("click", governmentCon);
retail.addEventListener("click", retailCon);
fishLinks.addEventListener("click", fishCon);



})();
