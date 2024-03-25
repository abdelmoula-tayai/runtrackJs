function joursTravail(date) {
    const annee = date.getFullYear();
    const mois = date.getMonth() + 1;
    const jour = date.getDate();


    if (date.getDate() === 0 || date.getDate() === 6) {
        console.log(`non, ${jour}/${mois}/{annee} est un week-end`);
    }
    else {
        const joursferies = [
            "01/01", // Nouvel An
            "08/03", // Journée internationale des femmes
            "01/05", // Fête du travail
            "08/05", // Victoire 1945
            "14/07", // Fête nationale
            "15/08", // Assomption
            "01/11", // Toussaint
            "11/11", // Armistice 1918
            "25/12"  // Noël
        ];
        const dateStr = '${jour}/${mois}';
        if (joursferies.includes(dateStr)){
            console.log(`non, ${jour}/${mois}/${annee} est un jour férié`);
        }
        else {
            console.log(`oui, ${jour}/${mois}/${annee} est un jour de travail`);
        }
    }
}

const maDate = new Date(2024, 0, 1);
joursTravail(maDate);