const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

(async () => {
    const qteDesTache = await askQuestion("Quelle quantité des taches souhaitez-vous ajouter ? :")
    lesTache = qteDesTache;
    var tache = [];
    async function ajouteDesTache(lesTache){
        for(let i = 0; i < lesTache; i++){
            const name = await askQuestion("Enter your tache: ");
            tache.push(name);
            console.log(tache.join(' / '));
        }
    }


    async function terminerLesTache() {
        const finDeTache = await askQuestion("Quelle tâche avez-vous terminé ? : ");
        tache.splice(finDeTache- 1, 1, '(terminer)');
        console.log(tache.join(' / '));
    }


    
    async function supprimerLesTache() {
        const supprimerDeTache = await askQuestion("Lequel tache souhaitez-vous supprimer ? : ");
        tache.splice(supprimerDeTache - 1, 1);
        console.log(tache.join(' / '));
    }

    await ajouteDesTache(qteDesTache);
    await terminerLesTache();
    await supprimerLesTache()
    rl.close();
})();