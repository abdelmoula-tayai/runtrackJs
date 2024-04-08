// backoffice.js

// Fonction pour charger et afficher les demandes d'autorisation de présence
function loadAuthorizationRequests() {
    // Ici, tu effectueras une requête AJAX ou une récupération des données depuis une API
    // Pour l'exemple, je vais simuler des données statiques
    const authorizationRequests = [
        { id: 1, name: 'John Doe', date: '2024-04-15', status: 'Pending' },
        { id: 2, name: 'Alice Smith', date: '2024-04-16', status: 'Pending' },
        { id: 3, name: 'Bob Johnson', date: '2024-04-17', status: 'Pending' }
    ];

    // Récupérer l'élément parent où afficher les demandes d'autorisation
    const authorizationRequestsContainer = document.getElementById('authorizationRequests');

    // Parcourir les demandes d'autorisation et les afficher
    authorizationRequests.forEach(request => {
        const requestElement = document.createElement('div');
        requestElement.classList.add('d-flex', 'flex-column', 'flex-md-row', 'p-4', 'gap-4', 'py-md-5', 'align-items-center', 'justify-content-center', 'authorization-request');
        requestElement.innerHTML = `
            <div class="list-group list-group-checkable d-grid gap-2 border-0">
                <input class="list-group-item-check pe-none" type="radio" name="listGroupCheckableRadios" id="listGroupCheckableRadios${request.id}" value="">
                <label class="list-group-item rounded-3 py-3" for="listGroupCheckableRadios${request.id}">
                    <span class="fw-bold">Nom:</span> ${request.name} <br>
                    <span class="fw-bold">Date:</span> ${request.date} <br>
                    <span class="fw-bold">Statut:</span> ${request.status} <br>
                    <span class="fw-bold">ID:</span> ${request.id}
                </label>
            </div>
            <div class="d-grid gap-2">
                <button type="button" class="btn btn-primary" onclick="acceptAuthorization(${request.id})">Accepter</button>
                <button type="button" class="btn btn-info" onclick="rejectAuthorization(${request.id})">Refuser</button>
            </div>
        `;
        authorizationRequestsContainer.appendChild(requestElement);
    });
}

// Fonction pour accepter une demande d'autorisation
function acceptAuthorization(id) {
    // Logique pour accepter la demande avec l'ID spécifié
    console.log(`Demande d'autorisation acceptée pour l'ID ${id}`);
}

// Fonction pour refuser une demande d'autorisation
function rejectAuthorization(id) {
    // Logique pour refuser la demande avec l'ID spécifié
    console.log(`Demande d'autorisation refusée pour l'ID ${id}`);
}

// Appeler la fonction pour charger et afficher les demandes d'autorisation au chargement de la page
window.onload = function() {
    loadAuthorizationRequests();
    // Éventuellement, ajouter d'autres initialisations ici
};