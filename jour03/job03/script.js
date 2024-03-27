function tri(numbers, order) {
    if (order === "asc") {
        return numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        return numbers.sort((a, b) => b - a);
    }
}

let numbers = [4, 2, 7, 1, 9];
let order = "asc";
console.log("Tableau trié en ordre ascendant:", tri(numbers.slice(), order));

order = "desc";
console.log("Tableau trié en ordre descendant:", tri(numbers.slice(), order));