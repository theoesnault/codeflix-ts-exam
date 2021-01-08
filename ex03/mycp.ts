import fs from 'fs';
import path from 'path';

var nombreArgs = process.argv.length;
console.log("Nombre d'arguments :", nombreArgs)

if (process.argv.length == 4) {
    // 0/ récupérer les arguments dans des variables 
    var argument1 = process.argv[2].toLocaleString();
    var argument2 = process.argv[3].toLocaleString();
    // 1/ récupérer le dossier actuel
    var dirName = __dirname;
    console.log("dirname :", dirName);
    // concaténer le nom du dossier avec le nom du fichier 
    var processedArgument1 = dirName + "/" + argument1;
    var processedArgument2 = dirName + "/" + argument2;

    // 2/ vérifier si les deux fichiers existent et sont des fichiers avec l'extention ".txt"
    if(path.extname(processedArgument1) === '.txt' && path.extname(processedArgument2) === '.txt'){
        fs.copyFileSync(processedArgument1, processedArgument2);
        console.log("Copied " + processedArgument1 + " to "+ processedArgument2)
    } else{
        console.error("ERROR - A provided argument isn't a file ! (at least 2 files are needed)");
    }
    console.log("argument1 :", processedArgument1)
    console.log("argument2 :", processedArgument2)
} else if (process.argv.length == 5) {
    // arguments en entrée
    var option = process.argv[2].toLocaleString();
    var argument1 = process.argv[3].toLocaleString();
    var argument2 = process.argv[4].toLocaleString();
} else {
    // Gestion des erreurs
    if (process.argv.length <3) {
        console.error("ERROR - MISSING ARGUMENTS !")
    }
    if (process.argv.length > 5) {
        console.error("ERROR - TOO MANY ARGUMENTS !")
    }
}
