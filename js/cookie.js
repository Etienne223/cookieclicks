// ***** NOMBRES DE POINTS TOT *****
var points = 0;

//variable d'amélioration du clique
var a = 1;

// ***** VAR CHOC *****
var prodChocChiffre = 0;
var levelChocChiffre = 0;
var prixChocChiffre = 10;

// ***** VAR FLEUR *****
var prodFleurChiffre = 0;
var levelFleurChiffre = 0;
var prixFleurChiffre = 20;

//désactive le boutton 
document.querySelector(".boutons_cadeaux").disabled = true;

//quand on clique ça monte le score
document.getElementById("bigClick").addEventListener('click', function plusUn(){
    points = points + a; 
    CookieCount.innerHTML = "You have " + points + " bisouuuus";
    acheterChoc();
    acheterFleur();
    acheterResto();
    acheterBijou();
    acheterAnimal();
    acheterVoyage();
    acheterMariage();
    acheterEnfant();
    acheterClick();
})

// **** FONCTION CHOC ****

document.getElementById("choc").addEventListener('click', function autoClick() {
    setInterval(function(){ points = points + 1; }, 1000);        //<= augmente les points de 1 par seconde
    setInterval(function(){ CookieCount.innerHTML = "You have " + points + " bisouuuus"; }, 1000);  //<= actualise les points gagner par seconde
    prodChocChiffre = prodChocChiffre + 1;
    prodChoc.innerHTML = "Production actuelle : " + prodChocChiffre + " bisous/sec";
    levelChocChiffre = levelChocChiffre + 1;
    levelChoc.innerHTML = levelChocChiffre;
    points = points - prixChocChiffre;
    prixChocChiffre = prixChocChiffre * 2;
    prixChoc.innerHTML = prixChocChiffre + "bisous";
    acheterChoc();
    })

//fonction qui active le bouton quand on as asser pour acheter l'amélioration
function acheterChoc(){
    if (points < prixChocChiffre){
        document.getElementById("choc").disabled = true;
    }
    else {
        document.getElementById("choc").disabled = false;
    }
    }     

    // ***** FONCTION FLEUR *****

    document.getElementById("fleur").addEventListener('click', function autoClick() {
        setInterval(function(){ points = points + 1; }, 1000);        //<= augmente les points de 1 par seconde
        setInterval(function(){ CookieCount.innerHTML = "You have " + points + " bisouuuus"; }, 1000);  //<= actualise les points gagner par seconde
        prodFleurChiffre = prodFleurChiffre + 1;
        prodFleur.innerHTML = "Production actuelle : " + prodFleurChiffre + " bisous/sec";
        levelFleurChiffre = levelFleurChiffre + 1;
        levelFleur.innerHTML = levelFleurChiffre;
        points = points - prixFleurChiffre;
        prixFleurChiffre = prixFleurChiffre * 2;
        prixFleur.innerHTML = prixFleurChiffre + "bisous";
        acheterFleur();
        })

        function acheterFleur(){
            if (points < prixFleurChiffre){
                document.getElementById("fleur").disabled = true;
            }
            else {
                document.getElementById("fleur").disabled = false;
            }
            }     