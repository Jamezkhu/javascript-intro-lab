// alert("found in external file")
// console.info("James Khurwal")
// console.dir(document.getElementById("myHeading"))
document.getElementById("myHeading").innerHTML = 'James Khurwal'
document.querySelector('nav ul li').setAttribute('class', 'currentPage')
// document.querySelector('nav ul li a').setAttribute('href', 'https://www.google.co.uk')
let colourButtons = document.querySelectorAll(".colPicker")
console.dir(colourButtons)
// for (let i = 0; i < colourButtons.length; i++){
//     colourButtons[i].style.backgroundColor = "green";
// }
let myButton = document.getElementById("myTestBtn")
myButton.addEventListener("click", function(){
    console.info("hi")
})
let documentBody = document.querySelector("body")
let redButton = document.querySelector(".red")
redButton.addEventListener("click", function(){
    console.info("red clicked")
    documentBody.setAttribute("class", "redBack")
})

let greenButton = document.querySelector(".green")
greenButton.addEventListener("click", function(){
    console.info("green clicked")
    documentBody.setAttribute("class", "greenBack")
})

let blueButton = document.querySelector(".blue")
blueButton.addEventListener("click", function(){
    console.info("blue clicked")
    documentBody.setAttribute("class", "blueBack")
})

let defaultButton = document.querySelector(".reset")
defaultButton.addEventListener("click", function(){
    console.info("default clicked")
    documentBody.removeAttribute("class")
})