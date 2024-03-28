document.getElementById("updateButton").addEventListener("click", function() {
    fetch("utilisateur.json")
        .then(response => response.json())
        .then(data => {
            updateUserTable(data);
        })
        .catch(error => {
            console.error("Error fetching user data:", error);
        });
});

function updateUserTable(users) {
    const tbody = document.querySelector("#userTable tbody");
    tbody.innerHTML = ""; // Efface les anciennes données

    users.forEach(user => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.nom}</td>
            <td>${user.prenom}</td>
            <td>${user.email}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Au chargement initial de la page, mettez à jour le tableau des utilisateurs
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("updateButton").click();
});
