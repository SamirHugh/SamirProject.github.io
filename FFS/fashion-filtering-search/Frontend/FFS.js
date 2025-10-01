/*
----------
Javascript File for Fashion Filtering Website
Editted by Brady Farabaugh
2/10/2025 - ????
----------
*/


//Create Button
let scrollButton = document.getElementById("") //Fill this in when html is done


//When user scrolls 20 px show button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollButton.style.display = "block";}
    else {
        mybutton.style.display = "none";}}


//When Button is clicked, scroll to top

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;}


//Search Bar Functionality
/*
function searchClothes() {
    let input = document.getElementById("searchBar").value
    input = input.toLowerCase();

}*/

//Create Menu Button Physics

function menuButton(){
    documentgetElementById("dropdownContents").classList.toggle("show");}

//Close Menu Button when clicked outside

window.onclick = function(event){
    if (!event.target.matches('Dropdown')) {
        var dDowns = document.getElementsByClassName("dropdownContents");
        var i;
        for ( i = 0; i < dDowns.length; i++) {
            var openDropDown = dDowns[i]
            if (openDropDown.classList.contains("show")){
                openDropDown.classList.remove("show");}}}}

