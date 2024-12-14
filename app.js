const express = require('express');
const app = express();
const PORT = 3000;

// Liste des messages drôles, structurée par catégorie
const messages = [
    { text: "Ça compile enfin... je crois. 🤞", category: "success" },
    { text: "Patché avec du scotch et des rêves. 🩹✨", category: "fix" },
    { text: "Adieu petit bug, tu vas me manquer (ou pas). 👋🐞", category: "bugs" },
    { text: "Ça marche ! Je ne touche plus à rien. 🤐", category: "success" },
    { text: "Correction rapide, mais je sens que ça va casser ailleurs. 🔧💥", category: "fix" },
    { text: "Si ça ne marche pas, c’est la faute du réseau. 🌐🚫", category: "excuses" },
    { text: "Ajout de code inutile pour demain. 📅🐢", category: "features" },
    { text: "C'était lent, maintenant c'est moins lent. ⏱️➡️🐌", category: "performance" },
    { text: "Ce commit est en production, bonne chance. 🍀💻", category: "deploy" },
    { text: "Optimisation du chaos. 🎯🔥", category: "performance" },
    { text: "Si quelqu’un comprend ce code, appelez-moi. 📞🤯", category: "code" },
    { text: "Réduction de la dette technique... enfin je crois. 📉🤔", category: "refactor" },
    { text: "Refacto : une ligne en moins, 3 bugs en plus. ➖🐛🐛🐛", category: "refactor" },
    { text: "Ajouté un commentaire pour moi-même dans 6 mois. 📝⏳", category: "comments" },
    { text: "Ça marche sur ma machine, c’est tout ce qui compte. 💻✔️", category: "success" },
    { text: "Le code est propre, mais la logique est morte. 🧹💀", category: "code" },
    { text: "Ajout de fonctionnalités inutiles mais cool. ✨🙃", category: "features" },
    { text: "Si tu lis ce commit, prépare le café. ☕📖", category: "comments" },
    { text: "Ajout d’un TODO : résoudre ce problème (peut-être jamais). 📝❓", category: "comments" },
    { text: "J’ai fait ce que j’ai pu, le reste est entre les mains du backend. 🛠️🙌", category: "teamwork" },
    { text: "Code testé en local, mais en prod c’est une autre histoire. 🧪🚀", category: "deploy" },
    { text: "Ajouté un bug volontaire pour faire rire l’équipe QA. 🐞😂", category: "bugs" },
    { text: "J’espère que ce fix ne va pas tout casser. 🛠️😅", category: "fix" },
    { text: "Debugging : l’art de retirer le dernier bug et d’en ajouter trois nouveaux. 🐛➡️🐛🐛🐛", category: "bugs" },
    { text: "Le code fonctionne, mais il est moche... comme un hackathon en fin de nuit. 🌙💻", category: "code" },
    { text: "Ajout d’un easter egg que personne ne trouvera jamais. 🐣🔍", category: "features" },
    { text: "Encore un commit avant la pause café. ☕⌛", category: "comments" },
    { text: "Quand le code devient poésie, mais personne ne le comprend. 🎼🧩", category: "code" },
    { text: "Feature ajoutée : mais pour qui, on ne sait pas encore. ❓✨", category: "features" },
    { text: "C’était censé être simple, mais ça ne l’est jamais. 😓🤷", category: "bugs" },
    { text: "Encore une refacto, on y croit ! 🔄💡", category: "refactor" },
    { text: "Ajout de logs pour comprendre pourquoi tout casse. 🖨️💥", category: "debug" },
    { text: "Si ça marche, c’est que j’ai eu de la chance. 🍀🤖", category: "success" }
];

// Endpoint pour obtenir un message aléatoire
app.get('/', (req, res) => {
    const { category } = req.query;

    // Filtrer les messages si une catégorie est spécifiée
    const filteredMessages = category
        ? messages.filter(msg => msg.category === category)
        : messages;

    // Gérer le cas où aucune correspondance n'est trouvée
    if (filteredMessages.length === 0) {
        return res.status(404).json({ error: "Aucun message trouvé pour cette catégorie." });
    }

    // Générer un message aléatoire parmi les résultats filtrés
    const randomIndex = Math.floor(Math.random() * filteredMessages.length);
    const randomMessage = filteredMessages[randomIndex];

    res.json({
        message: randomMessage.text,
        category: randomMessage.category
    });
});

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
