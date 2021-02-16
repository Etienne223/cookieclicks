var a = 1;
//variable de productions
var prodChocChiffre = 100;
//variable de niveaux
var levelChocChiffre = 0;
//variable de couts
var prixChocChiffre = 100;

//quand on clique ça monte le score
document.getElementById("bigClick").addEventListener('click', function plusUn(){
    points = points + a; 
    CookieCount.innerHTML = points;
    acheterChoc()
})

//fonction pour les amélioration d'auto click
document.getElementById("choc").addEventListener('click', function autoClick() {
    setInterval(function(){ points = points + 1; }, 1000);        //<= augmente les points de 1 par seconde
    setInterval(function(){ CookieCount.innerHTML = points; }, 1000);  //<= actualise les points gagner par seconde
    prodChocChiffre = prodChocChiffre + 100;
    prodChoc.innerHTML = "Production actuelle : " + prodChocChiffre + ".000/sec";
    levelChocChiffre = levelChocChiffre + 1;
    levelChoc.innerHTML = levelChocChiffre;
    points = points - prixChocChiffre;
    prixChocChiffre = prixChocChiffre * 2;
    prixChoc.innerHTML = prixChocChiffre + "bisous";
   
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