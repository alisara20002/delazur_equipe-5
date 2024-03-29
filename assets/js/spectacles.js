// Tableau de booléens qui indique quels spectacles sont aimés
const spectaclesAimes = [];

/**
 * Compte le nombre de spectacles qui sont aimés
 * @return {number} - Le nombre de spectacles aimés
 */
function compterSpectaclesAimes() {
	let nbAimes = 0;

	// Parcourir le tableau et compter le nombre de "true"
	for (i = 0; i < spectaclesAimes.length; i++) {
		if (spectaclesAimes[i] === true) {
			nbAimes++;
		}
	}

	return nbAimes;
}

/**
 * Met à jour le compteur de spectacles aimés
 * @param {number} nbSpectacles - Le nombre de spectacles aimés
 */
function inscrireSpectaclesAimes(nbSpectacles) {
	// Trouver le compteur dans la page
	const compteur = document.getElementById("compteur-spectacles-aimes");

	// Modifier le nombre affiché dans la page
	compteur.innerHTML = nbSpectacles;
}

/**
 * Change un spectacle et son coeur de aimé à non aimé, ou vice versa,
 * puis met à jour le compteur de spectacles aimés
 * @param {number} index - La position du spectale à modifier
 */
function changerCoeur(index) {
	// Ne rien faire si l'index est hors limites
	if (index < 0 || index >= spectaclesAimes.length) {
		return;
	}

	// Prendre un tableau de tous les coeurs des spectacles
	let coeurs = document.getElementsByClassName("case-spectacle-coeur");

	// Si le spectacle est déjà aimé, le remettre à non aimé. Sinon, le mettre à aimé
	if (spectaclesAimes[index] === true) {
		spectaclesAimes[index] = false;
		coeurs[index].classList.remove("fa-solid");
		coeurs[index].classList.add("fa-regular");
	} else {
		spectaclesAimes[index] = true;
		coeurs[index].classList.remove("fa-regular");
		coeurs[index].classList.add("fa-solid");
	}

	// Mettre le compteur à jour
	const nbAimes = compterSpectaclesAimes();
	inscrireSpectaclesAimes(nbAimes);
}

// À l'ouverture de la page, initialiser le tableau des spectacles aimés
window.onload = function() {
	// Prendre un tableau de tous les coeurs des spectacles
	let coeurs = document.getElementsByClassName("case-spectacle-coeur");

	for (i = 0; i < coeurs.length; i++) {
		// Ajouter un événement au click sur le coeur. Fait changer l'état "aimé" de ce spectacle.
		coeurs[i].addEventListener("click", changerCoeur.bind(this, i));

		// Ajouter un élément au tableau des spectacles. À l'ouverture aucun spectacle est aimé.
		spectaclesAimes.push(false);
	}
}
