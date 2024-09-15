const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let tasks = [];

const showMenu = () => {
    console.log('\n=== Liste de Tâches ===');
    console.log('1. Ajouter une nouvelle tâche');
    console.log('2. Afficher toutes les tâches');
    console.log('3. Marquer une tâche comme terminée');
    console.log('4. Supprimer une tâche');
    console.log('5. Quitter');
    rl.question('Choisissez une option : ', handleMenu);
};

const handleMenu = (choice) => {
    switch (choice) {
        case '1':
            addTask();
            break;
        case '2':
            listTasks();
            break;
        case '3':
            markTaskComplete();
            break;
        case '4':
            deleteTask();
            break;
        case '5':
            rl.close();
            break;
        default:
            console.log('Choix invalide.');
            showMenu();
    }
};

const addTask = () => {
    rl.question('Entrez la nouvelle tâche : ', (task) => {
        tasks.push({ title: task, completed: false });
        console.log(`Tâche "${task}" ajoutée.`);
        showMenu();
    });
};

const listTasks = () => {
    console.log('\n=== Toutes les Tâches ===');
    if (tasks.length === 0) {
        console.log('Aucune tâche disponible.');
    } else {
        tasks.forEach((task, index) => {
            const status = task.completed ? '(Terminée)' : '(En cours)';
            console.log(`${index + 1}. ${task.title} ${status}`);
        });
    }
    showMenu();
};

const markTaskComplete = () => {
    rl.question('Entrez le numéro de la tâche à marquer comme terminée : ', (num) => {
        const index = parseInt(num) - 1;
        if (index >= 0 && index < tasks.length) {
            tasks[index].completed = true;
            console.log(`Tâche "${tasks[index].title}" marquée comme terminée.`);
        } else {
            console.log('Numéro de tâche invalide.');
        }
        showMenu();
    });
};

const deleteTask = () => {
    rl.question('Entrez le numéro de la tâche à supprimer : ', (num) => {
        const index = parseInt(num) - 1;
        if (index >= 0 && index < tasks.length) {
            const removedTask = tasks.splice(index, 1);
            console.log(`Tâche "${removedTask[0].title}" supprimée.`);
        } else {
            console.log('Numéro de tâche invalide.');
        }
        showMenu();
    });
};

showMenu();

rl.on('close', () => {
    console.log('\nMerci d\'avoir utilisé la liste de tâches. À bientôt !');
    process.exit(0);
});















var tache =['Oussama Aouissa', 'acjao,lafn']


lesTache = tache.length;



async function aficheLesTache(){
    for(let i = 1; i < lesTache.length+1; i++){
        console.log(i +'- ' + lesTache[i] + '  (en cours)');
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




function choiceNumber(){
    if(choice == 1){
        console.log();
    } else if (choice == 2){
        console.log();
    } else if (choice == 3){
        console.log();
    } else if (choice == 4){
        console.log()
    } else if (choice == 5){
        console.log()
    } else {
        console.log('Choix invalide.')
    }
};




const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}





(async () => {
    
    async function showMenu(){
        console.log('\n=== Liste de Tâches ===');
        console.log('1. Ajouter une nouvelle tâche');
        console.log('2. Afficher toutes les tâches');
        console.log('3. Marquer une tâche comme terminée');
        console.log('4. Supprimer une tâche');
        console.log('5. Quitter');
        const choice = await askQuestion('Choisissez une option : ');
    };

    switch (choice) {
        case '1':
            console.log(ajouteDesTache());
            break;
        case '2':
            console.log(aficheLesTache());
            break;
        case '3':
            console.log(terminerLesTache());
            break;
        case '4':
            console.log(supprimerLesTache());
            break;
        case '5':
            console.log('Quitter...');
            return; // Quitte la fonction et arrête le menu
        default:
            console.log('Option non valide, veuillez réessayer.');
        }
        


        lesTache = tache.length+1;
        async function ajouteDesTache(lesTache){
            for(let i = 0; i < lesTache; i++){
                const name = await askQuestion("Enter your tache: ");
                tache.push(name);
                console.log('la tache a été bien ajouté');
            }
            await ajouteDesTache(lesTache);
        };
          



    await showMenu();
    rl.close();
})();