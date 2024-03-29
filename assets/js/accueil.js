// Index de l'image présentement affichée
let indexCaroussel = 0;

/**
 * Cache l'image qui se trouve à l'index donné
 * @param {number} index - La position de l'image à cacher
 */
function cacherImage(index) {
	// Prendre toutes les images du caroussel
	let cartes = document.getElementsByClassName("caroussel-image");

	// Si une image existe à l'index, la cacher
	if (index >= 0 && index < cartes.length) {
		cartes[index].style.display = "none";
	}
}

/**
 * Affiche l'image qui se trouve à l'index donné
 * @param {number} index - La position de l'image à afficher
 * @return {number} - L'index ajusté selon la rotation du caroussel
 */
function afficherImage(index) {
	// Prendre toutes les images du caroussel
	let cartes = document.getElementsByClassName("caroussel-image");

	// Garder une copie du paramètre pour pouvoir l'ajuster
	let indexCorrige = index;

	// Faire boucler le caroussel si l'index est hors limites
	// Sous zéro on va à la dernière image. Passé la dernière on retourne à la première.
	if (index >= cartes.length) {
		indexCorrige = 0;
	} else if (index < 0) {
		indexCorrige = cartes.length - 1;
	}

	// Afficher l'image
	cartes[indexCorrige].style.display = "block";

	return indexCorrige;
}

/**
 * Avance le caroussel d'une image
 */
function avancerImage() {
	cacherImage(indexCaroussel);
	indexCaroussel = afficherImage(indexCaroussel + 1);
}

/**
 * Recule le caroussel d'une image
 */
function reculerImage() {
	cacherImage(indexCaroussel);
	indexCaroussel = afficherImage(indexCaroussel - 1);
}

// À l'ouverture de la page, afficher la première image
window.onload = function() {
	afficherImage(indexCaroussel);
}

// Lorsque la fenêtre dépasse 800px, réafficher les 4 images
onresize = () => {
	console.log("Resize: " + document.documentElement.clientWidth);

	// Prendre toutes les images du caroussel
	let cartes = document.getElementsByClassName("caroussel-image");

	// Afficher toutes les images si la fenêtre dépasse 800px. Sinon, les cacher sauf celle acive
	if (document.documentElement.clientWidth > 800) {
		// Boucler sur toutes les images et les afficher
		for (i = 0; i < cartes.length; i++) {
			cartes[i].style.display = "block";
		}
	} else {
		for (i = 0; i < cartes.length; i++) {
			if (i != indexCaroussel) {
				cartes[i].style.display = "none";
			}
		}
	}
};
