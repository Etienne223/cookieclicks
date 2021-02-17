//les variables
//total de points 
var points = 0;
//variable d'amélioration du clique
var a = 1;
//variable de productions
var prodChocChiffre = 0;
//variable de niveaux
var levelChocChiffre = 0;
//variable de couts
var prixChocChiffre = 10;

//quand on clique ça monte le score
document.getElementById("bigClick").addEventListener('click', function plusUn(){
    points = points + a; 
    CookieCount.innerHTML = "You have " + points + " bisouuuus";
    acheterChoc()
})

//fonction pour les amélioration d'auto click
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

    
//désactive le boutton 
document.querySelector(".boutons_cadeaux").disabled = true;



//fonction qui active le bouton quand on as asser pour acheter l'amélioration
function acheterChoc(){
    if (points < prixChocChiffre){
        document.getElementById("choc").disabled = true;
    }
    else {
        document.getElementById("choc").disabled = false;
    }
    }     