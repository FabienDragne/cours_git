/*==================================================================================================
====================================================================================================
||||                                                                                            ||||   
||||                                     COURS : JavaScript                                     ||||
||||                                                                                            ||||
====================================================================================================
==================================================================================================*/



                    //-----------------------------------------------------------//



                    //-----------------------------------------------------------//



                    //-----------------------------------------------------------//



/*==================================================================================================
||                                                                                                ||
||                                         Zone de test                                           ||
||                                                                                                ||
====================================================================================================
||                                                                                                ||
==================================================================================================*/


/*
class Weapon {
    constructor (name, weight, magazine, damage){
    this.name = name;
    this.weight = weight;
    this.magazine = magazine;
    this.damage = damage
    }
};

var assaultRiffle = new Weapon("fusil d'assault", 3, 30, 2);
var sonicRiffle = new Weapon("fusil sonic", 2, 25, 6);
var gaussRiffle = new Weapon("fusil gauss", 4, 30, 5);
var laserRiffle = new Weapon("fusil laser", 3, "infinite", 4);
var plasmaRiffle = new Weapon("fusil plasma", 4, 30, 7);

var weaponsList = [assaultRiffle, sonicRiffle, gaussRiffle, laserRiffle, plasmaRiffle];

for (let i = 0; i < weaponsList.length; i++){
    console.log(i.name);
};

/*
for (let i of weaponsList){
    console.log(i.name);
};

while (let i = 0; i)
*/

















/*==================================================================================================
||                                                                                                ||
==================================================================================================*/



/*==================================================================================================
||                                                                                                ||
||                                               Titre                                            ||
||                                                                                                ||
==================================================================================================*/



/*================================================
||                                              ||
||                Sous-titre                    ||
||                                              ||
================================================*/



/*======================
||                    ||
||         ?          ||
||                    ||
======================*/



/*==========
||        ||
||   ?    ||
||        ||
==========*/



/*===============================================
                                              
                -= Index =-
                                              
    Les Variables ========================= 0000

    Les opérateurs arithmétiques ========== 0000

    Les types de données ================== 0000
        Les types primitifs --------------- 0000
            number ------------------------ 0000
            string ------------------------ 0000
            boolean ----------------------- 0000

    Les objets/classes ==================== 0000
        Les objets ------------------------ 0000
            déclaration ------------------- 0000
            la notation pointée ----------- 0000
        Les classes ----------------------- 0000
            déclaration ------------------- 0000

    Les collections ======================= 0000
        Array ----------------------------- 0000
            déclaration ------------------- 0000
            manipulation ------------------ 0000
        set ------------------------------- 0000
        map ------------------------------- 0000
                                              
    Les conditions ======================== 0000
        if / else if / else --------------- 0000
        switch ---------------------------- 0000

    La portée des variables =============== 0000

    Les boucles =========================== 0000
        Les boucles for ------------------- 0000
            for --------------------------- 0000
            for...in ---------------------- 0000
            for...of ---------------------- 0000
        Les boucles while ----------------- 0000
    
    Les fonctions ========================= 0000

    Gestion d'erreurs et d'exceptions ===== 0000                                      
        Les trois types d'erreurs --------- 0000
        Gérer les erreurs d'exécution ----- 0000

===============================================*/



                    //-----------------------------------------------------------//



// Les cours utilisé comme support principaux:

// La formation openclassroom de Will Alexander:
// https://openclassrooms.com/fr/courses/6175841-apprenez-a-programmer-avec-javascript?status=published

// Le cours de Pierre Giraud:
// https://www.pierre-giraud.com/javascript-apprendre-coder-cours/

// Divers sites et articles que je linkerai durant le mon parcours (parfois en anglais)



/*==================================================================================================
||                                                                                                ||
||                                            Les variables                                       ||
||                                                                                                ||
==================================================================================================*/



/*

const constanteConst = "Constante, ne peut être changée";
var variableVar = "Variable, portée globale";  
let variable_let = "Variable, bloc";

*/


// La convention de nommage la plus courante en JS
// est le camel case:

// camelCase
// snake_case

// Ne jamais commencer son nom de variable par une majuscule
// car on réserve cela aux class.

// Les mots clés utiliser en JS ne sont pas utilisables
// pour déclarer une variable (pas de "var let = 10").

// Privilégier les noms en anglais.

// Ne pas utiliser d'accents ou de symbole.

// Sans partir dans des noms à rallonges, ne pas hésiter
// à les faire suffisament explicites et détaillés.

// Une fois la variable déclarée, on ne doit plus utiliser
// les commandes const/var/let pour les appeler. 



/*==================================================================================================
||                                                                                                ||
||                                  Les opérateurs arithmétiques                                  ||
||                                                                                                ||
==================================================================================================*/



/*===============================================
||                                              ||
||              Calcul de base                  ||
||                                              ||
================================================*/

/*

        let stockDeBoites = 10;
        let arrivageDeBoites = 5;
        let retraitDuClient = 3;
        let totalApresArrivage = 0;

        const Tva = 1.2;
        let prixBoiteUnitaire = 4.9;

// a_L'addition:

totalApresArrivage = stockDeBoites + arrivageDeBoites;
totalApresArrivage += 5;                                    // ajout de 5 au total

// b_La soustraction:

stockDeBoites = stockDeBoites - 5;
stockDeBoites -= retraitDuClient;                           //retrait de 5 au total

// c_La Multiplication:

let commande1 = prixBoiteUnitaire * 5;
commande1 *= Tva;

alert("le prix de votre commande est de " + commande1 + " euros.");

// d_La division:

*/



/*===============================================
||                                              ||
||        Les opérateurs de comparaison         ||
||                                              ||
================================================*/

/*

<       inférieur à                     // Içi on ne compare que la valeur
                                        // il est donc possible de comparer
<=      inférieur ou égal à             // une chaîne de caractères à un nombre
                                        // et obtenir une réponse "true"
==      égal à

>=      supérieur ou égal à 

>       supérieur à 

!=      différent de.

*/

                    //-----------------------------------------------------------//


                    
/*

===      égalité stricte de valeur et de type       // Içi on compare la valeur ET le type
                                                    // Une comparaison entre une chaîne 
<==      de même type et inférieur ou égal à        // de caractères et un nombre renverrait
                                                    // donc "false" quand bien même la valeur
>==      de même type et supérieur ou égal à        // serait la même.

!==      de type et de valeur différent de 

*/

/*==================================================================================================
||                                                                                                ||
||                                      Les types de données                                      ||
||                                                                                                ||
==================================================================================================*/



/*===============================================
||                                              ||
||              Les types primitifs             ||
||                                              ||
================================================*/



// Le JavaScript est un langage à typage faible,
// il n'est donc pas nécessaire de préciser leur nature
// lors de leur déclaration.



/*======================
||                    ||
||   number (nombre)  ||
||                    ||
======================*/



// les variables de type number peuvent être:

//      entières (integer)
//      décimales (float)
//      négatives ou positive

// Privilégiez les entiers au maximum, le calcul des décimals
// étant sujet à des aproximations/erreurs.


/*======================
||                    ||
||   String (chaîne)  ||
||                    ||
======================*/



// string (chaîne de caractères, entre "" ou '')
//
//



/*======================
||                    ||
||      Boolean       ||
||                    ||
======================*/

// Boolean (valeur logique, true ou false)
//
//

/*
let varNumber = 6;

let varString1 = "Ceci est une chaîne de caractères entre guillemets.";
let varString2 = 'Ceci est une chaîne de caractères entre apostrophes.';

let varBooleanTrue = true;
let varBooleanFalse = false;
*/


/*======================
||                    ||
||       Autres       ||
||                    ||
======================*/



// Il existe 7 types primitif de données en tout en JavaScript
// Les 4 autres sont:
//      Null
//      Undefined
//      symbole
//      BigInt


// A étudier plus tard.



/*==================================================================================================
||                                                                                                ||
||                                    Les objets / Les classes                                    ||
||                                                                                                ||
==================================================================================================*/



/*===============================================
||                                              ||
||                Les objets                    ||
||                                              ||
================================================*/



/*======================
||                    ||
||     Déclaration    ||
||                    ||
======================*/



// Variable de type "complexe"
// Voir l'objet comme un "dossier" de variables.
// Regroupe des clés associées à des valeurs entre accolades, séparées par des virgules:

/*
let elephant = {                    // Les pairs de clé/valeur sont entre accolades
    nbPattes: 4,                    // On sépare les pairs par une virgule
    alimentation: "herbivore",      //
    ageMax: 70                      // Pas de virgule après la dernière valeur
};
*/



/*======================
||                    ||
||  Notation pointée  ||
||                    ||
======================*/



// Permet de faire appel à une ou plusieurs clé donnée d'un objet

/*
let elephant = {                    
    nbPattes: 4,                    
    alimentation: "herbivore",      
    ageMax: 70                      
};

let dumboNbPattes = elephant.nbPattes;  // içi j'assigne à ma variable dumboNbPattes
                                        // la valeur contenue dans la clé nbPattes
                                        // de mon objet elephant

console.log(dumboNbPattes);
*/




/*===============================================
||                                              ||
||                Les classes                   ||
||                                              ||
================================================*/



// sert de modèle/patron à des "objets" que l'on appelera "instance de classe"



/*======================
||                    ||
||     Déclaration    ||
||                    ||
======================*/



// pour créer une classe on passe par une fonction présente de base au sein
// de JavaScript, "constructor"

/*
class Animal {                                                    // Une classe démarre
    constructor(race, nombreDePattes, alimentation, ageMax){      // toujours par une majuscule
        this.race = race;                                         // Elle n'utilise pas le signe
        this.nombreDePattes = nombreDePattes;                     // d'affectation "="
        this.alimentation = alimentation;
        this.ageMax = ageMax;
    }
};

// La classe est créée, il est temps de l'appeler
// pour créer une nouvelle instance (objet):

let elephant = new Animal("pachiderme", 4, "herbivore", 70);

console.log(elephant);
console.log(elephant.race, elephant.nombreDePattes, elephant.nombreDePattes);
*/



/*==================================================================================================
||                                                                                                ||
||                                         Les collections                                        ||
||                                                                                                ||
==================================================================================================*/



/*===============================================
||                                              ||
||                Array (tableau)               ||
||                                              ||
================================================*/



/*======================
||                    ||
||     Déclaration    ||
||                    ||
======================*/

// Se déclare entre crochet
// Peut être initialiser vide: 

/*
let weaponsList = [];                                       
weaponsList = ["fusil balistique", "fusil Gauss", "carabine sonique"];

console.log(weaponsList);
*/

// Ou directement avec des valeurs:

/*
let weaponsList = ["fusil balistique", "fusil Gauss", "carabine sonique"];

console.log(weaponsList);
*/



/*======================
||                    ||
||    Manipulation    ||
||                    ||
======================*/



// Parcourir un tableau:

/*
let weaponsList = [                          // je déclare mon tableau
    "fusil balistique",                      // [0]   
    "fusil Gauss",                           // [1] 
    "carabine sonique"                       // [2]   
];                                           // Les éléments sont comptés à partir de 0     

let alienWeapon = weaponsList[2];            // J'affecte la valeur de weaponsList[2]
                                             // à la nouvelle variable alienWeapon       
console.log(alienWeapon);
*/

// Dans le cours d'Openclassrooms, le formateur Will Alexander nomme les éléments du
// tableau des références et non des valeurs, car si un objet est stocké,
// seul la référence de l'objet (son nom pour faire simple) y est stocké
// et non ses valeurs. (commentaire à accompagner d'un exemple de tableau
// intégrant des obkets)

                    //-----------------------------------------------------------//

// Changer une valeur au tableau:

/*
let weaponsList = [                          // 
    "fusil balistique",                      //    
    "fusil Gauss",                           //  
    "carabine sonique"                       //    
];                                           //      

weaponsList[2] = "canon sonique";

console.log(weaponsList[2]);
*/

                    //-----------------------------------------------------------//

// Ajouter un élément au début du tableau:

/*
let weaponsList = [                          // 
    "fusil balistique",                      //    
    "fusil Gauss",                           //  
    "carabine sonique"                       //    
];                                           //      

weaponsList.unshift("pistolet laser");       // On utilise la commande unshift pour ajouter
                                             // un élément en début de tableau,
console.log(weaponsList);                    // les autres éléments sont décalés
*/

                    //-----------------------------------------------------------//

// Ajouter un élément en fin de tableau:

/*
let weaponsList = [                          // 
    "fusil balistique",                      //    
    "fusil Gauss",                           //  
    "carabine sonique"                       //    
];                                           //      

weaponsList.push("fusil laser");             // On utilise la commande push pour ajouter
                                             // un élément en fin de tableau
console.log(weaponsList);                    
*/

                    //-----------------------------------------------------------//

// Supprimer un éléments en début de tableau:

/*
let weaponsList = [                          // 
    "fusil balistique",                      //    
    "fusil Gauss",                           //  
    "carabine sonique"                       //    
];                                           //      

weaponsList.shift();                         // On utilise la commande shift pour supprimer
                                             // un élément en début de tableau
console.log(weaponsList);                    // Rien n'est à préciser entre paranthèse
*/

                    //-----------------------------------------------------------//

// Supprimer un éléments en fin de tableau:

/*
let weaponsList = [                          // 
    "fusil balistique",                      //    
    "fusil Gauss",                           //  
    "carabine sonique"                       //    
];                                           //      

weaponsList.pop();                           // On utilise la commande pop pour supprimer
                                             // un élément en fin de tableau
console.log(weaponsList);                    // Rien n'est à préciser entre paranthèse
*/



/*===============================================
||                                              ||
||             Les sets (ensembles)             ||
||                                              ||
================================================*/



// Pour l'instant le cours d'openclassrooms préfère éluder la question
// les sets sont des listes de clé-valeur à l'instar des arrays
// sauf qu'ils ne sont pas ordonnés/indexés (numéroté).

// Les doublons n'y sont pas autorisés (logique).



/*===============================================
||                                              ||
||                   Les maps                   ||
||                                              ||
================================================*/



// Pour l'instant le cours d'Openclassrooms préfère éluder la question
// Les maps partagent énormément de similitudes avec les objets classique
// à l'exception que leur clés/valeurs sont indéxées (numérotées)
// et que leur clés peuvent être déterminées par des nombres ou des symboles
// en plus des chaînes de caractères.

// Sur le papier, les maps semblent allier le meilleur de toutes les collections.



/*==================================================================================================
||                                                                                                ||
||                                         Les conditions                                         ||
||                                                                                                ||
==================================================================================================*/



/*===============================================
||                                              ||
||             Opérateurs logiques              ||
||                                              ||
================================================*/



//  &&      — ET logique — pour vérifier si deux conditions sont toutes les deux vraies
//  ||      — OU logique — pour vérifier si au moins une condition est vraie
//  !       — NON logique — pour vérifier si une condition n'est pas vraie 

/*
let userLoggedIn = true;
let userPremiumAccount = true;
let userMegaPremiumAccount = false;

userLoggedIn && userHasPremiumAccount;              // Renverra true
userLoggedIn && userHasMegaPremiumAccount;          // Renverra false

userLoggedIn || userHasPremiumAccount;              // Renverra true
userLoggedIn || userHasMegaPremiumAccount;          // Renverra true

!userLoggedIn;                                      // Renverra false
!userHasMegaPremiumAccount;                         // Renverra true
*/



/*===============================================
||                                              ||
||             if / else if / else              ||
||                                              ||
================================================*/



/*
const numberOfSeats = 30;
let numberOfGuests = 25;

if (numberOfGuests == numberOfSeats) {                      // tous les sièges sont occupés
    console.log("La salle affiche complet.");
} else if (numberOfGuests < numberOfSeats) {                // autoriser plus d'invités
    console.log("Il reste une/des places.");
} else {
    console.log("ne pas autoriser de nouveaux invités");    // ne pas autoriser de nouveaux invités
}
*/


/*===============================================
||                                              ||
||                   switch                     ||
||                                              ||
================================================*/


/*
// Sorte de boucle de comparaison
// Dans le cours de Will Alexander sur Openclasserooms il déclare trois objets utilisateurs:

let firstUser = {
    name: "Will Alexander",
    age: 33,
    accountLevel: "normal"
};

let secondUser = {
    name: "Sarah Kate",
    age: 21,
    accountLevel: "premium"
};

let thirdUser = {
    name: "Audrey Simon",
    age: 27,
    accountLevel: "mega-premium"
};

let fourthUser = {                                      // je rajoute volontairement un quatrième
    name: "Fabien Dragne",                              // compte avec un niveau d'autorisation
    age: 32,                                            // inexistant pour les tests
    accountLevel: "omega"
};

// une fois fait, il utilise la notation pointée (dot) pour appeler une clé particulière
// de l'objet qu'il veut étudier:

switch (thirdUser.accountLevel) {                           // On appelle la référence "accountlevel"
    case 'normal':                                          // A chaque itération on compare sa
        console.log('You have a normal account!');          // valeur affectée à un cas souhaité.
        break;                                              
    case 'premium':                                         // Si "true" est renvoyé, l'instruction
        console.log('You have a premium account!');         // console.log est envoyée et la "boucle"
        break;                                              // arrêtée par "break".
    case 'mega-premium':
        console.log('You have a mega premium account!');        
        break;
    default:                                                // "Default" met fin à la boucle et spécifie       
        console.log('Unknown account type!');               // un retour par défaut si aucune "case"
}                                                           // ne renvoit "true".
*/


/*==================================================================================================
||                                                                                                ||
||                                      Le scop des variables                                     ||
||                                                                                                ||
==================================================================================================*/




/*==================================================================================================
||                                                                                                ||
||                                         Les boucles                                            ||
||                                                                                                ||
==================================================================================================*/



/*===============================================
||                                              ||
||                Les boucles "for"             ||
||                                              ||
================================================*/



// Utilisé pour travailler sur des tableaux ou des maps
// Permet d'automatiser des actions


// https://thecodebarbarian.com/for-vs-for-each-vs-for-in-vs-for-of-in-javascript
// Un excellent article en anglais expliquant les différences entre les 4 types de boucle "for"

// En résumé:

// Syntaxe mise à part, on peut séparer les boucles en deux groupes:

//      for et for/in qui accèdent à l'index du tableau manipulé
//      for/of et for/each qui eux accèdent aux éléments

// il conseille d'utiliser autant que faire se peut la boucle for/of



/*======================
||                    ||
||        for         ||
||                    ||
======================*/



 /*
 const numberOfPassengers = 10;

 for (                                      // Je débute ma boucle avec for

    let i = 0;                              // première commande,
                                            // le départ de ma boucle avec une variable i
                                            // (i pour index, mais le choix est libre)
                                            // (en let pour rester dans le bloc). 

    i < numberOfPassengers;                 // seconde commande,
                                            // je déclare la condition déterminant
                                            // la fin de la boucle.

    i++                                     // troisième commande,
                                            // j'ammorce ma boucle
                                            // via une incrémentation de i. 
    )

    {
     console.log("Passager embarqué !");    // Entre crochet ce qui arrive
 };                                         // une fois la boucle finie
*/

 // On écrira plus volontier l'ensemble de la boucle sur une seule ligne:

/*
const numberOfPassengers = 10;

for (let i = 0; i < numberOfPassengers; i++) {      // je délcare mon index i
    console.log("Passager embarqué !");             // tant que i est plus petit que:
};                                                  // numberOfPassengers
*/                                                  // lui rajouter 1 à chaque itération

// Techniquement, içi je parcours la liste, mais je n'en fais rien.



/*======================
||                    ||
||      for...in      ||
||                    ||
======================*/



/*
const passengers = [
    "Will Alexander",
    "Sarah Kate'",
    "Audrey Simon",
    "Tao Perkington"
]

for (let i in passengers) {
    console.log("Embarquement du passager " + passengers[i]);
}
*/

// Dans cet exemple, j'utilise un tableau
// la boucle for...in s'occupe de le parcourir automatiquement
// du début à la fin

// Si j'avais voulu utiliser la boucle for classique pour le même résultat:

/*
const passengers = [
    "Will Alexander",
    "Sarah Kate'",
    "Audrey Simon",
    "Tao Perkington"
]

for (let i = 0; i < passengers.length; i++) {
    console.log("Passager " + passengers[i] + " embarqué !");
}
*/



/*======================
||                    ||
||      for...of      ||
||                    ||
======================*/



/*
const passengers = [
    "Will Alexander",
    "Sarah Kate",
    "Audrey Simon",
    "Tao Perkington"
]

for (let i of passengers) {
    console.log("Embarquement du passager " + i);
}
*/


/*======================
||                    ||
||      for...each    ||
||                    ||
======================*/

// Non abordée dans le cours openclassrooms de Will Alexander



/*===============================================
||                                              ||
||                Les boucles while             ||
||                                              ||
================================================*/



// Une boucle  while  vérifie si une condition est vraie.
// Si c'est le cas, la boucle se poursuit ; sinon elle s'arrête.

// En revenant à l'exemple de l'embarquement d'avion :
// supposons que vous ayez des variables représentant le nombre de sièges restants et
// le nombre de passagers restants.

// Vous souhaitez continuer l'embarquement jusqu'à l'épuisement du nombre de sièges ou de passagers :

/*

let seatsLeft = 10;
let passengersStillToBoard = 8;

let passengersBoarded = 0;

while (seatsLeft > 0 && passengersStillToBoard > 0) {
    passengersBoarded++;                                // un passager embarque
    passengersStillToBoard--;                           // donc il y a un passager de moins à embarquer
    seatsLeft--; // et un siège de moins
}

console.log(passengersBoarded);                         // imprime 8, car il y a 8 passagers
                                                        // pour 10 sièges
*/

// Cette boucle  while  poursuit son exécution jusqu'à ce que l'un des nombres  seatsLeft  et 
// passengersStillToBoard  atteigne zéro, et à ce point elle se termine.



/*==================================================================================================
||                                                                                                ||
||                              Gestion d'erreurs et d'exceptions                                 ||
||                                                                                                ||
==================================================================================================*/



/*================================================
||                                              ||
||          Les trois types d'erreurs           ||
||                                              ||
================================================*/



// Erreur de Syntaxe (parenthèse mal fermée, opérateur manquant, etc...)
// Erreur de logique
// Erreur d'exécution (cause externe au programme)



/*================================================
||                                              ||
||        Gérez les erreurs d'exécution         ||
||                                              ||
================================================*/



// Une façon de traiter les erreurs potentielles
// consiste à utiliser une instruction  if / else  pour vérifier la validité des données :

/*

if (dataExists && dataIsValid) {
    // utiliser les données ici
} else {
    // gérer l'erreur ici
}

*/

// Le cours d'Openclassrooms présente pour se faire l'utilisation des blocs try/catch
// j'ignore comment m'en servir pour l'heure.

/*

try {
    // code susceptible à l'erreur ici
} catch (error) {
    // réaction aux erreurs ici
}

*/



