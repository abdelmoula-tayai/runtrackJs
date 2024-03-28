function jsonValueKey(json, key) {
    let jsonObject = json;
    return jsonObject[key];
}

const json = {
    "name": "La Plateforme_",
    "address": "8 rue d'Hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
};

const key = "city";
const value = jsonValueKey(json, key);
console.log(`La valeur associée à la clé "${key}" est : ${value}`);