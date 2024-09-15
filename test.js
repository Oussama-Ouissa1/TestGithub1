

// var x = 151 ;
// var y = 103 ;
// var z = x - y;
// console.log(z);



// var x, y, z;
// x = 151;
// y = 133;
// b = x - y ;
// w = x * y ;
// a = x / y ;
// console.log(b);
// console.log(w);
// console.log(a);




// function calcul(aficher) {
//     for ( let i=0; i<=10; i++){
//         let x = aficher * i
//         console.log(i + " * " + aficher+ " = "+ x)
//     }
// }
// calcul(19);


// for(let i=0; i<=10; i++){
//     console.log(i +" * 2 = "+ i*2)
// }


// function multiplication(n){
//     var mult = 1;
//     for(let i=1; i<=n; i++){
//         mult *= i;
//     }
//     return mult;
// }

// console.log(multiplication(210))


// function laSomme(n){
//     var sum = 0;
//     for(let i=1; i<=n; i++){
//         sum += i;
//         if(sum %2!= 0){
//             console.log(sum)
//         }
//     }
// }

// console.log(laSomme(20))



// function calcul(n){
//     var x = "";
//     for(let i=n.length-1; i>=0; i--){
//         x += n[i];
//     }
//     return x;
// }

// console.log(calcul("oussama"))

// var ous = "oussama";
// console.log(ous[6])
// console.log("ab" + "cd")
// console.log("ab" + "cd" + 2)


// var numbrePaire = [2, 4, 6, 10, 20, 16, 8, 30, 100, 50];
// console.log(numbrePaire[-1])




// function rever(x){
//     var list = [];
//     for (let i=x.length-1; i>=0; i--){
//         list.push(x[i])
//     }
//     return list;
// }

// console.log(rever(li))


// function mult(z){
//     for (let i=0; i<z.length; i++){
//         z[i] *= 2
//     }
//     return z;
// }

// console.log(mult(li))





// var li = [4, 6, 10, 20, 13, 16, 8, 30, 1, 5];


// function nombrePaire(osm){
//     var nubrPaire = [];
//     for ( let j=0; j<osm.length; j++){
//         if (osm[j] % 2 === 0){
//             nubrPaire.push(osm[j])
//         }
//     }
//     return nubrPaire;
// }
// // var nubrPaire = nombrePaire(li);
// // console.log(nubrPaire);

// console.log(nombrePaire(li));





// function pairOuImpair(my){
//     var paire = [];
//     var impaire = [];
//     for (let i = 0; i < my.length; i++){
//         if(my[i] % 2 === 0){
//             paire.push(my[i])
//         } else {
//             impaire.push(my[i])
//         }
//     }
//     console.log(paire);
//     console.log(impaire);
// }

// pairOuImpair(li);




// function calc(nub1, nub2, operation){
//     if(operation == "+"){
//         return nub1 + nub2;
//     } else if (operation == "-") {
//         return nub1 - nub2;
//     } else if (operation == "/") {
//         return nub1 / nub2;
//     } else if (operation == "*") {
//         return nub1 * nub2;
//     } else {
//         return "opération invalid";
//     }
// }

// console.log(calc(10, 5, "*"));
// console.log(calc(10, 5, "/"));
// console.log(calc(10, 5, "+"));
// console.log(calc(10, 5, "z"));
// console.log(calc(10, 5, "-"));




// function testSwitch(nombre1, nombre2, operation){
//     switch(operation){
//         case "+" :
//             return nombre1 + nombre2;
//         case "-" :
//             return nombre1 - nombre2;
//         case "*" :
//             return nombre1 * nombre2;
//         case "/" :
//             return nombre1 / nombre2;
//         default :
//             return "opération invalid"
//     }
// }

// console.log(testSwitch(30, 13, "*"));
// console.log(testSwitch(30, 13, "-"));
// console.log(testSwitch(30, 13, "+"));
// console.log(testSwitch(30, 13, "/"));
// console.log(testSwitch(30, 13, "s"));



// function fibonacci(numbre){
//     var stockerNumbre = [];
//     for (let i = 1; i<=numbre; i++){
//         stockerNumbre.push(i);
//     }
//     return stockerNumbre;
// }

// var stockerNumbre = fibonacci(10);
// console.log(stockerNumbre);


// function sumCaractere(check){
//     return check.length;
// }

// console.log(sumCaractere("nabil"));


// function getStringSum(str) {
//     let count = 0;
//     for (let char of str) {
//         count++;
//     }
//     return count;
// }

// console.log(getStringSum("nabil"))


// function typeFor(x){
//     for (let i of x){
//         console.log(i)
//     }
// }

// var y = [19, 3, 12, 34, 456, "jscid"];

// typeFor(y);


// Défi 4 : Maximum de Trois Nombres
// Créez une fonction maxDeTrois qui prend trois nombres en arguments et retourne le plus grand des trois. Utilisez des conditions if-else pour résoudre ce défi.

function maxDeTrois(nub1, nub2, nub3){
    if(nub1 > nub2 , nub1 > nub3){
        console.log(nub1);
    } else if (nub2 > nub1 , nub2 > nub3){
        console.log(nub2);
    } else {
        console.log(nub3);
    }
}

maxDeTrois(191, 1102, 354);


var Tache = [];
function liste(ajoutDesTache){
    for (let i = 0; i < ajoutDesTache; i++){
        console.log(ajoutDesTache);
    }
}

liste(10);


(async () => {
    const name = await askQuestion("Enter your name: ");
    
    console.log(`Hello, ${name}!`);
    
    rl.close();
})();

if(finDeTache == '1'){
    console.log('les tache : ' + tache[0],' (terminer) ; ' + tache[1],'; ' + tache[2])
    console.log('les tache : ' + tache[0],'; ' + tache[1],'; ' + tache[2] +' (terminer) ')
} else {
    
}




if(supprimerDeTache == '1'){
    console.log('les tache : '+ tache[1],'; ' + tache[2])
} else {
    console.log('les tache : ' + tache[0],'; ' + tache[1],'; ' + tache[2]);
}







