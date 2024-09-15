const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

(async () => {
    var tache = [];
    async function ajouteDesTache(lesTache){
        for(let i = 0; i < lesTache; i++){
            const name = await askQuestion("Enter your tache: ");
            tache.push(name);
            console.log('les tache : ' + tache[0],'; ' + tache[1],'; ' + tache[2]);
        }
    }
    async function terminerLesTache() {
        const finDeTache = await askQuestion("Quelle tâche avez-vous terminé ? : ");
        if(finDeTache == '1'){
            console.log('les tache : ' + tache[0],' (terminer) ; ' + tache[1],'; ' + tache[2])
        } else if (finDeTache == '2'){
            console.log('les tache : ' + tache[0],'; ' + tache[1],' (terminer) ; ' + tache[2])
        } else if (finDeTache == '3'){
            console.log('les tache : ' + tache[0],'; ' + tache[1],'; ' + tache[2] +' (terminer) ')
        } else {
            console.log('les tache : ' + tache[0],'; ' + tache[1],'; ' + tache[2]);
        }
    }
    async function supprimerLesTache() {
        const supprimerDeTache = await askQuestion("Lequel tache souhaitez-vous supprimer une fois terminé ? : ");
        if(supprimerDeTache == '1'){
            console.log('les tache : '+ tache[1],'; ' + tache[2])
        } else if (supprimerDeTache == '2'){
            console.log('les tache : ' + tache[0],'; ' + tache[2])
        } else if (supprimerDeTache == '3'){
            console.log('les tache : ' + tache[0],'; ' + tache[1])
        } else {
            console.log('les tache : ' + tache[0],'; ' + tache[1],'; ' + tache[2]);
        }
    }

    await ajouteDesTache(3);
    await terminerLesTache();
    await supprimerLesTache();
    rl.close();
})();