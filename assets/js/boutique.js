const btns = document.querySelectorAll('.btn-ajouter'); //Permet de selectionner les boutons dans le HTML.
const overlay = document.querySelector('.popup-overlay'); //Permet de selectionner le pop-up.
const btnClose = document.querySelector('.popup-overlay__btn--close'); //Permet de selectionner le bouton pour fermer le pop-up.
const modale = document.querySelector('.modale'); //Permet de selectionner la modale.

for(let btn of btns){ 
    btn.addEventListener('click', () =>{ 
        const articleName = btn.dataset.articleName; 
        const modaleTitle = modale.querySelector('.title');
        
        overlay.classList.add('popup-overlay--show'); //Pour ajouter la classe qui fait afficher le pop-up.
        
        modaleTitle.textContent = articleName; //Pour ajouter le nom de l'article à l'emplacement selectionné. 
    });
}

btnClose.addEventListener('click', () =>{ //Pour faire fonctionner le bouton qui permet de fermer le pop-up. 
    overlay.classList.remove('popup-overlay--show');
});