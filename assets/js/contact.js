
document.addEventListener('DOMContentLoaded', function () {
    var selectElement = document.getElementById('province');
    var options = selectElement.querySelectorAll('option');

    // Masquer toutes les options sauf la première
    for (var i = 1; i < options.length; i++) {
        options[i].classList.add('hidden');
    }

    // Afficher les autres options lors du clic sur le sélecteur
    selectElement.addEventListener('click', function () {
        for (var i = 1; i < options.length; i++) {
            options[i].classList.remove('hidden');
        }
    });
});

const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    // Empêche l'envoi du form
    event.preventDefault();

    // Get form inputs
    const firstName = document.getElementById('prenom').value.trim();
    const lastName = document.getElementById('nomFamille').value.trim();
    const email = document.getElementById('email').value.trim();
    const postalCode = document.getElementById('postalCode').value.trim();
    const password = document.getElementById('password').value.trim();
    const files = document.getElementById('fileInput').files;

     // Vérifie si le nom et le prénom contient plus de 2 lettres
    if (firstName.length < 2 || lastName.length < 2) {
        alert('Le prénom et le nom de famille doivent comporter au moins 2 lettres.');
        return;
    }

    // Vérifie si l'addresse email est valide
    if (email.toLowerCase().includes('@yahoo.com')) {
        alert('Veuillez fournir une adresse e-mail autre que Yahoo.');
        return;
    }

     // Vérifie si le code postale respecte la nomenclature
    const postalCodeRegex = /^[A-Za-z0-9]{6}$/;
    if (!postalCodeRegex.test(postalCode)) {
        alert('Veuillez saisir un code postal valide.');
        return;
    }

    // Vérifie si c'est le bon mot de passe
    if (password !== 'Kaput Draconis') {
        alert('Mauvais mot de passe.');
        return;
    }

     // Vérifie si il y a bien un fichier qui a été choisi
    if (files.length === 0) {
        alert('Veuillez sélectionner au moins un fichier à télécharger.');
        return;
    }

     // Si tout était correct, permet de soumettre le form
    this.submit();
});
