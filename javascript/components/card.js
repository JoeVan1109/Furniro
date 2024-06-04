document.addEventListener('DOMContentLoaded', (event) => {
    let btn_cards = document.querySelectorAll('.card-btn');
    let hide_cards = document.querySelectorAll('.card-shop');

    // Vérifier le nombre de boutons et de cartes sélectionnés
    console.log('Nombre de boutons de carte:', btn_cards.length);
    console.log('Nombre de cartes cachées:', hide_cards.length);

    // Variable pour suivre l'index de la carte actuellement ouverte
    let openedIndex = null;

    // Pour chaque bouton de carte
    btn_cards.forEach((btn, index) => {
        // Ajouter un gestionnaire d'événements de clic
        btn.addEventListener('click', (event) => {
            console.log('Bouton cliqué, index:', index);
            // Si une autre carte est ouverte et ce n'est pas celle actuelle
            if (openedIndex !== null && openedIndex !== index) {
                // Fermer la carte précédente en retirant la classe "visible"
                console.log('Fermeture de la carte à l\'index:', openedIndex);
                hide_cards[openedIndex].classList.remove("visible");
            }
            // Basculer la visibilité de la carte actuelle
            hide_cards[index].classList.toggle("visible");
            // Mettre à jour openedIndex en fonction de la carte actuelle
            openedIndex = (openedIndex === index) ? null : index;
            // Empêcher la propagation de l'événement de clic
            event.stopPropagation();
        });
    });

    // Pour chaque carte cachée
    hide_cards.forEach((card, index) => {
        // Ajouter un gestionnaire d'événements de clic
        card.addEventListener('click', (event) => {
            console.log('Carte cliquée, index:', index);
            // Empêcher la propagation de l'événement de clic
            event.stopPropagation();
        });
    });
});
