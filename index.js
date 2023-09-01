const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Définir les URL des fichiers JSON
const urls = {
  stable: 'https://launcher.skym-mc.fr/launcher/distribution/version_stable.json',
  development: 'https://launcher.skym-mc.fr/launcher/distribution/version_development.json',
};

// Fonction pour choisir l'URL et l'exporter
async function chooseAndExport(urlKey) {
  if (!urls[urlKey]) {
    console.error('URL non valide');
    return;
  }

  const selectedUrl = urls[urlKey]; // Récupérer l'URL sélectionnée

  // Exporter l'URL sélectionnée en tant que module.exports
  module.exports = {
    urlChosen: selectedUrl
  };

  console.log(`URL sélectionnée : ${selectedUrl}`);

  try {
    // Effectuer la requête HTTP
    const response = await axios.get(selectedUrl);
    const jsonData = response.data;

    // Vous pouvez maintenant utiliser "jsonData" comme vous le souhaitez
    console.log('Données récupérées :', jsonData);
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
  }
}

// Poser la question à l'utilisateur
rl.question('Choisissez une option (stable/development) : ', (answer) => {
  const selectedOption = answer.toLowerCase();

  // Vérifier la réponse de l'utilisateur et basculer en conséquence
  if (selectedOption === 'stable' || selectedOption === 'development') {
    chooseAndExport(selectedOption);
  } else {
    console.error('Option non valide');
  }

  // Fermer l'interface readline
  rl.close();
});
