(() => {

console.log("Javascript is Linked");


var button = document.querySelector("button");
var burgerCon = document.querySelector("#burgerCon");

var melchers = document.querySelector("#melchers");
var guillevin = document.querySelector("#guillevin");
var muma = document.querySelector("#muma");
var tryRec = document.querySelector("#try");
var angling = document.querySelector("#angling");

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


//Displays the corresponding information in the about page regarding the specific logo clicked

function melchersCon() {
    console.log("Info changed")
    document.getElementById("partnerText").innerHTML = "";
    document.getElementById("partnerText").innerHTML = "<h3>Melchers</h3><p>Over the past couple of years the folks at Melchers Construction Ltd have offered up their beautiful boardroom for TRAA executive meetings. It's an ideal space with all the amenities required for us to accomplish all the 'behind the scenes' work of the TRAA. Many thanks go out to the continued support of Melchers Construction Ltd.</p>";
}

function guillevinCon() {
    console.log("Info changed")
    document.getElementById("partnerText").innerHTML = "";
    document.getElementById("partnerText").innerHTML = "<h3>Guillevin Greentech</h3><p>Members of the trout hatchery rotation know the woes we've had with lighting in the hatchery. Even with larger fixtures installed a few years ago, it was still frustrating on days when the mercury dipped below -15C and the fluorescent technology just teased us with its dull flicker. Enter Mike Jeffries of Guillevin Greentech in London with nice set of bright and dependable (and new!) LED fixtures. Once they were installed it was like working in well-appointed laboratory.</p>";
}

function mumaCon() {
    console.log("Info changed")
    document.getElementById("partnerText").innerHTML = "";
    document.getElementById("partnerText").innerHTML = "<h3>Muma Manufacturing</h3><p>The TRAA voted unanimously to re-name the TRAA trout hatchery honouring Keith Wales' memory and his unselfish support of the TRAA's work in the London area, in particular Komoka Creek. Special thanks go out to Muma Manufacturing in St. Thomas for donating the beautiful laser-cut aluminum sign.</p>";
}

function tryCon() {
    console.log("Info changed")
    document.getElementById("partnerText").innerHTML = "";
    document.getElementById("partnerText").innerHTML = "<h3>Try Recycling inc.</h3><p>After cleaning up the area around the TRAA shed and trout hatchery, our trailer was quite full and needed to be emptied. A big 'thank you' goes out to Rick Vandersluis and Mike Seabrook of Try Recycling who allowed the TRAA to empty the trailer at their facility free of charge.</p>";
}

function anglingCon() {
    console.log("Info changed")
    document.getElementById("partnerText").innerHTML = "";
    document.getElementById("partnerText").innerHTML = "<h3>Angling Sports</h3><p>Before we could take the trailer to Try Recycling, we needed to get the spare tire for the trailer fixed. Pat Devincenzo, proprietor of Angling Sports, offered to get it repaired. Turns out the tire needed replacing and Pat took care of it. Angling Sports also supplied cards for all TRAA members that entitle them to a discount equal to the tax on anything in the store. Thanks Pat, your generosity is greatly appreciated.</p>";
}

//displays the correct group of links based upon the specific section called upon

function conservationCon() {
    console.log("Links Changed")
    document.getElementById("subLinks").innerHTML = "";
    document.getElementById("subLinks").innerHTML = '<p>hey</p>';
}


button.addEventListener("click", hamburgerMenu);

melchers.addEventListener("click", melchersCon);
guillevin.addEventListener("click", guillevinCon);
muma.addEventListener("click", mumaCon);
tryRec.addEventListener("click", tryCon);
angling.addEventListener("click", anglingCon);

conservation.addEventListener("click", conservationCon);



})();
