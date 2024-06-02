let btn_cards = document.querySelectorAll('.card-btn');
let hide_cards = document.querySelectorAll('.card-shop');

// Variable pour suivre l'index de la carte actuellement ouverte
let openedIndex = null;

// Pour chaque bouton de carte
btn_cards.forEach((btn, index) => {
    // Ajouter un gestionnaire d'événements de clic
    btn.addEventListener('click', (event) => {
        // Si une autre carte est ouverte et ce n'est pas celle actuelle
        if (openedIndex !== null && openedIndex !== index) {
            // Fermer la carte précédente en retirant la classe "visible"
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
hide_cards.forEach(card => {
    // Ajouter un gestionnaire d'événements de clic
    card.addEventListener('click', (event) => {
        // Empêcher la propagation de l'événement de clic
        event.stopPropagation();
    });
});


// Explication :
//     Nous sélectionnons tous les boutons de carte et toutes les cartes cachées.
//     Nous suivons l'index de la carte actuellement ouverte avec la variable openedIndex.
//     Pour chaque bouton de carte, nous ajoutons un gestionnaire d'événements de clic.

//     Lorsqu'un bouton est cliqué :
//         Si une autre carte est ouverte et ce n'est pas celle actuellement cliquée, nous la fermons.
//         Nous basculons ensuite la visibilité de la carte actuelle.
//         Nous mettons à jour openedIndex en fonction de la carte actuellement cliquée.
//         Nous empêchons la propagation de l'événement de clic pour éviter de fermer la carte lorsqu'on clique dessus.
//     Pour chaque carte cachée, nous ajoutons un gestionnaire d'événements de clic pour empêcher la propagation de l'événement de clic lorsqu'une carte est cliquée.