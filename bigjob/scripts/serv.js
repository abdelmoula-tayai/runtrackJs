const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 5500;

app.use(cors({
    origin: '*', // Allow all origins
    methods: ['GET', 'POST'], // Autoriser à la fois GET et POST
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: true
}));

app.options('/submit-form', cors());

app.use(express.json());

app.post('/submit-form', (req, res) => {
    const jsonData = req.body;

    fs.writeFile('user.json', JSON.stringify(jsonData), err => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Erreur lors de l\'enregistrement des données.' });
            return;
        }
        
        // Envoyer une réponse réussie une fois l'écriture terminée
        res.status(200).json({ message: 'Données enregistrées avec succès.' });
    });
});


app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
