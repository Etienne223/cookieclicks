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

// ***** VAR RESTO *****
var prodRestoChiffre = 0;
var levelRestoChiffre = 0;
var prixRestoChiffre = 20;

// ***** VAR BIJOU *****
var prodBijouChiffre = 0;
var levelBijouChiffre = 0;
var prixBijouChiffre = 20;

// ***** VAR ANIMAL *****
var prodAnimalChiffre = 0;
var levelAnimalChiffre = 0;
var prixAnimalChiffre = 20;

// ***** VAR VOYAGE *****
var prodVoyageChiffre = 0;
var levelVoyageChiffre = 0;
var prixVoyageChiffre = 20;

// ***** VAR MARIAGE *****
var prodMariageChiffre = 0;
var levelMariageChiffre = 0;
var prixMariageChiffre = 20;

// ***** VAR ENFANT *****
var prodEnfantChiffre = 0;
var levelEnfantChiffre = 0;
var prixEnfantChiffre = 20;



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
});

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

//fonction qui active le bouton quand on a assez pour acheter l'amélioration
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

// ***** FONCTION RESTO *****

    document.getElementById("resto").addEventListener('click', function autoClick() {
        setInterval(function(){ points = points + 1; }, 1000);        //<= augmente les points de 1 par seconde
        setInterval(function(){ CookieCount.innerHTML = "You have " + points + " bisouuuus"; }, 1000);  //<= actualise les points gagner par seconde
        prodRestoChiffre = prodRestoChiffre + 1;
        prodResto.innerHTML = "Production actuelle : " + prodRestoChiffre + " bisous/sec";
        levelRestoChiffre = levelRestoChiffre + 1;
        levelResto.innerHTML = levelRestoChiffre;
        points = points - prixRestoChiffre;
        prixRestoChiffre = prixRestoChiffre * 2;
        prixResto.innerHTML = prixRestoChiffre + "bisous";
        acheterResto();
        })

        function acheterResto(){
            if (points < prixRestoChiffre){
                document.getElementById("resto").disabled = true;
            }
            else {
                document.getElementById("resto").disabled = false;
            }
            }     

// ***** FONCTION BIJOUX *****

document.getElementById("bijou").addEventListener('click', function autoClick() {
    setInterval(function(){ points = points + 1; }, 1000);        //<= augmente les points de 1 par seconde
    setInterval(function(){ CookieCount.innerHTML = "You have " + points + " bisouuuus"; }, 1000);  //<= actualise les points gagner par seconde
    prodBijouChiffre = prodBijouChiffre + 1;
    prodBijou.innerHTML = "Production actuelle : " + prodBijouChiffre + " bisous/sec";
    levelBijouChiffre = levelBijouChiffre + 1;
    levelBijou.innerHTML = levelBijouChiffre;
    points = points - prixBijouChiffre;
    prixBijouChiffre = prixBijouChiffre * 2;
    prixBijou.innerHTML = prixBijouChiffre + "bisous";
    acheterBijou();
    })

    function acheterBijou(){
        if (points < prixFleurChiffre){
            document.getElementById("bijou").disabled = true;
        }
        else {
            document.getElementById("bijou").disabled = false;
        }
        }     

// **** FONCTION ANIMAL ****

document.getElementById("animal").addEventListener('click', function autoClick() {
    setInterval(function(){ points = points + 1; }, 1000);        //<= augmente les points de 1 par seconde
    setInterval(function(){ CookieCount.innerHTML = "You have " + points + " bisouuuus"; }, 1000);  //<= actualise les points gagner par seconde
    prodAnimalChiffre = prodAnimalChiffre + 1;
    prodAnimal.innerHTML = "Production actuelle : " + prodAnimalChiffre + " bisous/sec";
    levelAnimalChiffre = levelAnimalChiffre + 1;
    levelAnimal.innerHTML = levelAnimalChiffre;
    points = points - prixAnimalChiffre;
    prixAnimalChiffre = prixAnimalChiffre * 2;
    prixAnimal.innerHTML = prixAnimalChiffre + "bisous";
    acheterAnimal();
    })

//fonction qui active le bouton quand on as asser pour acheter l'amélioration
function acheterAnimal(){
    if (points < prixAnimalChiffre){
        document.getElementById("animal").disabled = true;
    }
    else {
        document.getElementById("animal").disabled = false;
    }
    }     

// **** FONCTION VOYAGE ****

document.getElementById("voyage").addEventListener('click', function autoClick() {
    setInterval(function(){ points = points + 1; }, 1000);        //<= augmente les points de 1 par seconde
    setInterval(function(){ CookieCount.innerHTML = "You have " + points + " bisouuuus"; }, 1000);  //<= actualise les points gagner par seconde
    prodVoyageChiffre = prodVoyageChiffre + 1;
    prodVoyage.innerHTML = "Production actuelle : " + prodAnimalChiffre + " bisous/sec";
    levelVoyageChiffre = leveVoyageChiffre + 1;
    levelVoyage.innerHTML = levelVoyageChiffre;
    points = points - prixVoyageChiffre;
    prixVoyageChiffre = prixVoyageChiffre * 2;
    prixVoyage.innerHTML = prixVoyageChiffre + "bisous";
    acheterVoyage();
    })

//fonction qui active le bouton quand on as asser pour acheter l'amélioration
function acheterVoyage(){
    if (points < prixAnimalChiffre){
        document.getElementById("voyage").disabled = true;
    } 
    else {
        document.getElementById("voyage").disabled = false;
    }
    }  

 // ***** FONCTION MARIAGE *****
        
document.getElementById("mariage").addEventListener('click', function autoClick() {
    setInterval(function(){ points = points + 1; }, 1000);        //<= augmente les points de 1 par seconde
    setInterval(function(){ CookieCount.innerHTML = "You have " + points + " bisouuuus"; }, 1000);  //<= actualise les points gagner par seconde
    prodMariageChiffre = prodMariageChiffre + 1;
    prodMariage.innerHTML = "Production actuelle : " + prodMariageChiffre + " bisous/sec";
    levelMariageChiffre = levelMariageChiffre + 1;
    levelMariage.innerHTML = levelMariageChiffre;
    points = points - prixMariageChiffre;
    prixMariageChiffre = prixMariageChiffre * 2;
    prixMariage.innerHTML = prixMariageChiffre + "bisous";
    acheterMariage();
    })
function acheterMariage(){
    if (points < prixMariageChiffre){
            document.getElementById("mariage").disabled = true;
    }
    else {
        document.getElementById("mariage").disabled = false;
    }
    }
// ***** FONCTION ENFANT *****
    
document.getElementById("enfant").addEventListener('click', function autoClick() {
    setInterval(function(){ points = points + 1; }, 1000);        //<= augmente les points de 1 par seconde
    setInterval(function(){ CookieCount.innerHTML = "You have " + points + " bisouuuus"; }, 1000);  //<= actualise les points gagner par seconde
    prodEnfantChiffre = prodEnfantChiffre + 1;
    prodEnfant.innerHTML = "Production actuelle : " + prodEnfantChiffre + " bisous/sec";
    levelEnfantChiffre = levelEnfantChiffre + 1;
    levelEnfant.innerHTML = levelEnfantChiffre;
    points = points - prixEnfantChiffre;
    prixEnfantChiffre = prixEnfantChiffre * 2;
    prixEnfant.innerHTML = prixEnfantChiffre + "bisous";
    acheterEnfant();
  })
function acheterEnfant(){
    if (points < prixEnfantChiffre){
        document.getElementById("enfant").disabled = true;
    }
    else {
        document.getElementById("enfant").disabled = false;
    }
    } 

//désactive le boutton 
document.querySelector("boutons_cadeaux").disabled = true;