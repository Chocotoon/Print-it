const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// "Activation" des flèches
const arrowRight = document.querySelector("#banner .arrow_right");
arrowRight.addEventListener("click", slideRight); 
const arrowLeft = document.querySelector("#banner .arrow_left");
arrowLeft.addEventListener("click", slideLeft);

// création des points
window.addEventListener('load', (event) => {
    let dots = document.querySelector ("#dots");
    for (let i= 0; i< slides.length; i++){
        dot = document.createElement ("div");
        dot.classList.add("dot");
        dot.id= "dot"+i;
        dots.appendChild(dot);
		dot0.classList.add("dot_selected");
    }  
})

let n = Number;
n=0;

// Définit l'image
function setCurrentImage(imageIndex){
	currentImage.src = slides[imageIndex].image;

}

// Définit le texte associé
function setCurrentText(imageIndex){
	currentText.innerHTML = slides[imageIndex].tagLine;

}

let currentDot = document.getElementsByClassName("dot_selected");

// Définit le point actif
function setCurrentDot(imageIndex){
    for(let i=0; i<slides.length; i++){
        document.querySelector("#dot"+i).classList.remove("dot_selected");
    }
    document.querySelector("#dot"+imageIndex).classList.add("dot_selected");
}


let currentImage = document.createElement ("img");
currentImage.classList.add ("banner-img");
setCurrentImage(n);
let currentText = document.createElement ("p");
setCurrentText(n);
const divBanner = document.querySelector ("#banner");
divBanner.appendChild(currentImage);
divBanner.appendChild(currentText);


// Fonction navigation carroussel
function slide(step){
	n = (n+step); 
	if (n + step > slides.length){
		n = 0;
	}
	else if ((n +step) <-1) {
		n = slides.length -1;
	} 

	setCurrentImage(n);
	setCurrentText(n);
	setCurrentDot(n);
}

function slideLeft(){
	slide(-1);

}
function slideRight(){ 
	slide(1);
	
}
