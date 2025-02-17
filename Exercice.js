// // afficher l'age

// function afficherage(){
//     do{
//         var age=prompt("Entrer votre age");

//     }while(isNaN(age) || age<=0 || age.trim().length ===null) // trim permet de gérer les espace et la longeur d'un nombre

//     alert(age < 18 ? "vous etes mineur" :"vous etes majeur");
// }

// // afficherage();

// // afficher un nombre paire et impaire

// function Pairetimpair(){
//     do{
//         var nombre=prompt("entrer votre nombre");
//     }while(isNaN(nombre) || nombre.trim().length ===null)

//     alert(nombre%2 == 0 ? "votre nombre est paire" :"votre nombre est impaire");
// }

// Pairetimpair();

// // afficher le mois en fonction du cchiffre entrer
// function DateMois(chiffreMoies){
//     const date = new Date(2000, chiffreMoies-1, 1);
//     console.log(date);
//     return date.toLocaleString('fr-FR', { month:'long'});
   
// }

// do{
//     var moiscourant= parseInt(prompt("entrez un nombre entre 1 et 12"));

// }while(moiscourant <1 || moiscourant > 12 || isNaN(moiscourant) )
// alert (DateMois(moiscourant));

// trouver un nombre secret
function NombreSecret(){
    let sicretnomber= Math.floor(Math.random()*100) + 1;
    let secrette;
    let nombreessaie;

    do{
        secret=parseInt(prompt("Entrer un nombre compris entre 0 et 100"));
        if(secrette < sicretnombre){
          alert("le nombre entrer est plus petit que le nombre secret");
          nombreessaie++;
          continue;
        }

        if(secrette > sicretnombre){
            alert("le nombre entrer est plus grand que le nombre secret");
            nombreessaie++;
            continue;
        }

        if(secrette === sicretnombre){
            alert("vous avez trouvez le nombre secret");
            alert("il vous afallut ",nombreessaie,"essaie");
            continue;
        }

    } while(secret!= secretnomber)
}
NombreSecret();

//suite de fibonacie qui affiche un nombre et la suite de ce nombre

function fibonacie(){
    let nombre=0;
    do{
        nombre=parseInt(prompt("entrer un nombre"));
    }while(isNaN(nombre) || nombre > 1 || nombre.trim().length ===null);
    for(let i=0;i<2;i++ ){
        let fib=[0,1];
        fib.push([i-1] + [i-2]);
        alert(fib);
    }
    
}
fibonacie();

// la somme des nombre de zero à 100

function SommeNombre(){
    let N=parseInt(prompt("entre un nombre et je vous donne la somme des nombre compris"));
    let resultat;
    for(let i=0 ; i<N;i++ ){
        resultat = resultat + i;
    }
    alert("la somme des chiffres est", resultat);
}

SommeNombre();