const readline = require('readline');

function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  return new Promise(resolve => rl.question(query, ans => {
    rl.close();
    resolve(ans);
  }));
}
let tache = [];
async function showMenu() {
    console.log('\n=== Liste de Tâches ===');
    console.log('1. Ajouter une nouvelle tâche');
    console.log('2. Afficher toutes les tâches');
    console.log('3. Marquer une tâche comme terminée');
    console.log('4. Supprimer une tâche');
    console.log('5. Quitter');

    const choice = await askQuestion('Choisissez une option : ');

    switch (choice) {
        case '1':
            await ajouteDesTache();
        break;
        case '2':
            await aficheLesTache();
        break;
        case '3':
            await terminerLesTache();
        break;
        case '4':
            await supprimerLesTache();
        break;
        case '5':
            await quitteLesTache();
        return;
        default:
        console.log('Option non valide, veuillez réessayer.');
    }



    async function ajouteDesTache(){
            const name = await askQuestion("Enter your tache: ");
            tache.push(name + '  (en cours)');
            console.log('la tache a été bien ajouté');
    };


    async function aficheLesTache(){
        for(let i = 1; i < tache.length+1; i++){
            console.log(i +'- ' + tache[i-1]);
        }
    }

    async function terminerLesTache(){
        const finDeTache = await askQuestion("Quelle tâche avez-vous terminé ? : ");
        if( finDeTache <= tache.length){
            tache[finDeTache - 1] = tache[finDeTache - 1].replace('(en cours)', '(termine)');
            console.log('la teche '+ finDeTache +' est terminé');
        } else {
            console.log('Option non valide, veuillez réessayer.');
        }
    }


    async function supprimerLesTache(){
        const supprimerDeTache = await askQuestion("Lequel tache souhaitez-vous supprimer ? : ");
        if( supprimerDeTache <= tache.length){
            tache.splice(supprimerDeTache - 1, 1);
            console.log('la teche '+ supprimerDeTache +' a été supprimer');
        } else {
            console.log('Option non valide, veuillez réessayer.');
        }
    }


    showMenu(); // Rappelle la fonction pour réafficher le menu après chaque choix
}

// Démarre le programme
showMenu();

async function quitteLesTache() {
    console.log('Merci de utilisé la liste de tâches. À bientôt !')
}