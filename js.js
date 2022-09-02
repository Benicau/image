//locale storage
imageSelection = document.querySelector(".img img")
var Vleft 
var Vtop 
//window.localStorage.clear()
const movUp = localStorage.getItem("positionTop")
const movGauche = localStorage.getItem("positionLeft")


if(movUp === null)
{
    localStorage.setItem("positionTop", 40)
    Vtop = parseInt(40)

}
else{
    Vtop =  parseInt(movUp)
}

if(movGauche === null)
{
    localStorage.setItem("positionLeft", 40)
    Vleft = parseInt(40)

}
else{
    Vleft = parseInt(movGauche)
}


imageSelection.style.left = Vleft + "%"
imageSelection.style.top = Vtop + "%"

// deplacement
document.querySelector('.haut i').addEventListener('click', moveUp)
document.querySelector('.bas i').addEventListener('click', moveDown)
document.querySelector('.droite i').addEventListener('click', moveRight)
document.querySelector('.gauche i').addEventListener('click', moveLeft)


function moveUp() {
    Vtop = Vtop - 1
    imageSelection.style.top = Vtop + "%"
    localStorage.setItem("positionTop", Vtop)
    
}

function moveDown() {
    Vtop = Vtop + 1
    imageSelection.style.top = Vtop + "%"
    localStorage.setItem("positionTop", Vtop)
}

function moveRight() {
    Vleft = Vleft + 1
    imageSelection.style.left = Vleft + "%"
    localStorage.setItem("positionLeft", Vleft)
}

function moveLeft() {
    Vleft = Vleft - 1
    imageSelection.style.left = Vleft + "%"
    localStorage.setItem("positionLeft", Vleft)
}


// zoom
document.querySelector('.zoomPlus i').addEventListener('click', zoomUp)
document.querySelector('.zoomBas i').addEventListener('click', zoomDown)
const widthInMemorry = localStorage.getItem('widthM')
const heightInMemorry = localStorage.getItem('heightM')

if (widthInMemorry === null)
{
    localStorage.setItem("widthM",250)
}
else
{
    var width = localStorage.getItem("widthM")
    imageSelection.setAttribute("width", width)
}
if (heightInMemorry === null)
{
    localStorage.setItem("heightM",125)
}
else
{
    var height = localStorage.getItem("heightM")
    imageSelection.setAttribute("height", height)
}

function zoomUp() {
    var width = imageSelection.getAttribute("width")
    var height = imageSelection.getAttribute("height")
    width = width * 1.02
    height = height * 1.02
    imageSelection.setAttribute("width", width)
    imageSelection.setAttribute("height", height)
    localStorage.setItem("widthM",width)
    localStorage.setItem("heightM",height)

}

function zoomDown() {
    var width = imageSelection.getAttribute("width")
    var height = imageSelection.getAttribute("height")
    width = width * 0.98
    height = height * 0.98
    imageSelection.setAttribute("width", width)
    imageSelection.setAttribute("height", height)
    localStorage.setItem("widthM",width)
    localStorage.setItem("heightM",height)
}


// rotation
document.querySelector('.rotGauche i').addEventListener('click', rotLeft)
document.querySelector('.rotDroite i').addEventListener('click', rotRight)
let angle = 0
const rotationMemory = localStorage.getItem('rotateM')
if (rotationMemory === null)
{
    localStorage.setItem("rotateM",0)
}
else{
    angle = localStorage.getItem("rotateM")
    imageSelection.style.transform = "rotate(" + angle + "deg)"

}

function rotLeft() {
    angle = (angle - 10) % 360
    imageSelection.style.transform = "rotate(" + angle + "deg)"
    localStorage.setItem("rotateM",angle)
}

function rotRight() {
    angle = (angle + 10) % 360
    imageSelection.style.transform = "rotate(" + angle + "deg)"
    localStorage.setItem("rotateM",angle)
}


// defaut 
document.querySelector('.reset').addEventListener('click', defPosition)

function defPosition() {
    imageSelection.style.transform = "rotate(" + 0 + "deg)"
    angle = 0
    Vleft = parseInt(40)
    Vtop = parseInt(40)
    imageSelection.style.left = Vleft + "%"
    imageSelection.style.top = Vtop + "%"
    width = 250
    height = 125
    imageSelection.setAttribute("width", width)
    imageSelection.setAttribute("height", height)

}