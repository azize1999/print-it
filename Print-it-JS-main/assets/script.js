const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log(slides);
//afficher les variables
const dotsContainer = document.querySelector('.dots');
const img = document.querySelector(".banner-img");
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const TagLine = document.querySelector('#banner p');
// index du diapositive actuellement affiché
let index = 0;

//Cette fonction crée des points indicateurs pour chaque diapositive.
//aficher les dots 
function createDot() {
	for(let i=0; i < slides.length; i++) { 
		const dot = document.createElement("span"); 
		dot.classList.add("dot"); 
		dotsContainer.appendChild(dot);
	
		if (i == index) {
			dot.classList.add("dot_selected"); 
		} 
	}
	}
	createDot(); //j'appelle la fonction  pour l'exécuter


// Ajout des écouteurs d'événements aux flèches pour déclencher les fonctions de mise à jour.
/*affichage au click droit*/
	arrowRight.addEventListener("click", () =>{
	updateSlide("right") ;
})
/*affichage au click gauche*/
	arrowLeft.addEventListener("click", () =>{
	updateSlide("left") ;
})


//Cette fonction met à jour les points indicateurs.


	function updateDot() {
		const tableauDot = document.querySelectorAll(".dots .dot");
		
		for(let i = 0; i < tableauDot.length; i++) {
			tableauDot[i].classList.remove("dot_selected");
		}
		tableauDot[index].classList.add("dot_selected");  
		img.src =`./assets/images/slideshow/${slides[index].image}` 
		TagLine.innerHTML = slides[index].tagLine;
	}
	


//Cette fonction met à jour l'index de la diapositive lors du clic sur les flèches.
function updateSlide(buttonDirection) {
    if (buttonDirection == "right") {
        index++;
        if (index > slides.length -1) {
            index = 0;
        }
		updateDot()

    } else if (buttonDirection == "left") {
        index--;
        if (index < 0) {
            index = slides.length - 1;
        }
		updateDot()
    }
}


 