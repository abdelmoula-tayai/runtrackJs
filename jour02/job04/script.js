function estBisextile(annee) {

    if ((annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0){
            return true;
    } else { 
            return false;
    }
}

let annee = 2024;

if (estBisextile(annee)) {
    console.log("L'année " + annee + " est bisextile");
} else {
    console.log("L'année " + annee + " n'est pas bisextile");
}