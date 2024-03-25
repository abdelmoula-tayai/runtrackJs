function estNombrePremier(nombre) {
    if (nombre <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    return true;
}

function sommeNombresPremiers(nombre1, nombre2) {
    if (estNombrePremier(nombre1) && estNombrePremier(nombre2)) {
        return nombre1 + nombre2;
    } else {
        return false;
    }
}

// Test de la fonction
let nombre1 = 17;
let nombre2 = 13;
let resultat = sommeNombresPremiers(nombre1, nombre2);
if (resultat !== false) {
    console.log(`La somme des nombres premiers ${nombre1} et ${nombre2} est : ${resultat}`);
} else {
    console.log(`Au moins un des nombres n'est pas premier.`);
}
