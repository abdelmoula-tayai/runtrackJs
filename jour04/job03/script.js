document.getElementById("filtrer").addEventListener("click", function() {
    const id = getValueAndTrim("id");
    const nom = getValueAndTrim("nom");
    const type = getValueAndTrim("type");

    fetch("pokemon.json")
        .then(response => response.json())
        .then(data => {
            const filteredData = data.filter(pokemon => {
                return (
                    (!id || pokemon.id == id) &&
                    (!nom || pokemon.name.english.toLowerCase().includes(nom.toLowerCase())) &&
                    (!type || pokemon.type.includes(type))
                );
            });

            displayPokemon(filteredData);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});

function getValueAndTrim(elementId) {
    return document.getElementById(elementId).value.trim();
}

function displayPokemon(pokemonData) {
    const pokemonListDiv = document.getElementById("pokemonList");
    pokemonListDiv.innerHTML = "";

    if (pokemonData.length === 0) {
        pokemonListDiv.textContent = "Aucun Pokémon trouvé.";
        return;
    }

    const ul = document.createElement("ul");

    pokemonData.forEach(pokemon => {
        const li = document.createElement("li");
        li.textContent = `${pokemon.name.english} - Type: ${pokemon.type.join(", ")}`;
        ul.appendChild(li);
    });

    pokemonListDiv.appendChild(ul);
}
