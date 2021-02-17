// ***** NOMBRES DE POINTS TOT *****
var points = 0;

//variable d'amélioration du clique
var a = 1;
var stat = 0;

// ***** VAR CHOC *****
var prodChocChiffre = 0;
var levelChocChiffre = 0;
var prixChocChiffre = 100;

// ***** VAR FLEUR *****
var prodFleurChiffre = 0;
var levelFleurChiffre = 0;
var prixFleurChiffre = 200;

// ***** VAR RESTO *****
var prodRestoChiffre = 0;
var levelRestoChiffre = 0;
var prixRestoChiffre = 500;

// ***** VAR BIJOU *****
var prodBijouChiffre = 0;
var levelBijouChiffre = 0;
var prixBijouChiffre = 1000;

// ***** VAR ANIMAL *****
var prodAnimalChiffre = 0;
var levelAnimalChiffre = 0;
var prixAnimalChiffre = 2500;

// ***** VAR VOYAGE *****
var prodVoyageChiffre = 0;
var levelVoyageChiffre = 0;
var prixVoyageChiffre = 5000;

// ***** VAR MARIAGE *****
var prodMariageChiffre = 0;
var levelMariageChiffre = 0;
var prixMariageChiffre = 7500;

// ***** VAR ENFANT *****
var prodEnfantChiffre = 0;
var levelEnfantChiffre = 0;
var prixEnfantChiffre = 12500;

// ***** VAR Click *****
var prodClickChiffre = 0;
var levelClickChiffre = 0;
var prixClickChiffre = 10;

// **** VAR BONUS *****
var prixBonusChiffre = 3000;
// var time = 30;
// var id = setInterval(argent, 1000);

//Enregistre le nom du user dans les cookies
function usernaming() {
	let username = prompt("Quel est ton prénom? Ceci nous permet d'utiliser les cookies pour se souvenir de toi. Ton score n'est pour l'instant pas mémorisé, juste ton nom.");
	document.cookie = 'user='+username+' ;expires=Sun, 28 Feb 2021 12:00:00 UTC; path=/';
	var allcookies = document.cookie;
	cookiearray = allcookies.split(';');
	value = cookiearray[0].split('=')[1];
  alert("Merci, " + value)
}

// **** TIMER ****
// function argent(id){
//     if(time === 0){
//         clearInterval(id);
//     } else{
//         time = time-1;
//         document.getElementById("time").innerHTML = time;
//     }
// }

//désactive tous les bouttons
document.getElementById("choc").disabled = true;
document.getElementById("fleur").disabled = true;
document.getElementById("resto").disabled = true;
document.getElementById("bijou").disabled = true;
document.getElementById("animal").disabled = true;
document.getElementById("voyage").disabled = true;
document.getElementById("mariage").disabled = true;
document.getElementById("enfant").disabled = true;
document.getElementById("click").disabled = true;
document.getElementById("bonus").disabled = true;

//fonction lors des achats

function achat(){
    acheterChoc();
    acheterFleur();
    acheterResto();
    acheterBijou();
    acheterAnimal();
    acheterVoyage();
    acheterMariage();
    acheterEnfant();
    acheterClick();
    acheterBonus();
}

setInterval(function(){achat(); }, 100)

//quand on clique ça monte le score
document.getElementById("bigClick").addEventListener('click', function plusUn(){
    points = (Math.round(points * 100) /100) + a;
    CookieCount.innerHTML = "You have " + points + " bisouuuus";
    stat++;
    document.getElementById("nbClick").innerHTML = "You clicked " + stat +" times."
    achat();
});

// **** FONCTION CHOC ****

document.getElementById("choc").addEventListener('click', function autoClick() {
    setTimeout(function(){achat(); }, 100)
    setInterval(function(){ points = points + 1; }, 1000);        //<= augmente les points de 1 par seconde
    setInterval(function(){ CookieCount.innerHTML = "You have " + points + " bisouuuus"; }, 1000);  //<= actualise les points gagner par seconde
    prodChocChiffre = prodChocChiffre + 1;
    prodChoc.innerHTML = "Production actuelle : " + (Math.round(prodChocChiffre *100)/100) + " bisous/sec";
    levelChocChiffre = levelChocChiffre + 1;
    levelChoc.innerHTML = levelChocChiffre;
    points = points - prixChocChiffre;
    prixChocChiffre = prixChocChiffre * 1.5;
    prixChoc.innerHTML = prixChocChiffre + " bisous";
    achat();
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
        setInterval(function(){ points = points + 15; }, 1000);        //<= augmente les points de 1 par seconde
        setInterval(function(){ CookieCount.innerHTML = "You have " + points + " bisouuuus"; }, 1000);  //<= actualise les points gagner par seconde
        prodFleurChiffre = prodFleurChiffre + 15;
        prodFleur.innerHTML = "Production actuelle : " + (Math.round(prodFleurChiffre *100)/100)+ " bisous/sec";
        levelFleurChiffre = levelFleurChiffre + 1;
        levelFleur.innerHTML = levelFleurChiffre;
        points = points - prixFleurChiffre;
        prixFleurChiffre = prixFleurChiffre * 1.5;
        prixFleur.innerHTML = "Cost : " + prixFleurChiffre + " bisous";
        achat();
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
        setInterval(function(){ points = points + 30; }, 1000);        //<= augmente les points de 1 par seconde
        setInterval(function(){ CookieCount.innerHTML = "You have " + points + " bisouuuus"; }, 1000);  //<= actualise les points gagner par seconde
        prodRestoChiffre = prodRestoChiffre + 30;
        prodResto.innerHTML = "Production actuelle : " + (Math.round(prodRestoChiffre*100)/100) + " bisous/sec";
        levelRestoChiffre = levelRestoChiffre + 1;
        levelResto.innerHTML = levelRestoChiffre;
        points = points - prixRestoChiffre;
        prixRestoChiffre = prixRestoChiffre * 1.5;
        prixResto.innerHTML = "Cost : " + prixRestoChiffre + " bisous";
        achat();
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
    setInterval(function(){ points = points + 50; }, 1000);        //<= augmente les points de 1 par seconde
    setInterval(function(){ CookieCount.innerHTML = "You have " + points + " bisouuuus"; }, 1000);  //<= actualise les points gagner par seconde
    prodBijouChiffre = prodBijouChiffre + 50;
    prodBijou.innerHTML = "Production actuelle : " + prodBijouChiffre + " bisous/sec";
    levelBijouChiffre = levelBijouChiffre + 1;
    levelBijou.innerHTML = levelBijouChiffre;
    points = points - prixBijouChiffre;
    prixBijouChiffre = prixBijouChiffre * 1.5;
    prixBijou.innerHTML = "Cost : " + prixBijouChiffre + " bisous";
    achat();
    })

    function acheterBijou(){
        if (points < prixBijouChiffre){
            document.getElementById("bijou").disabled = true;
        }
        else {
            document.getElementById("bijou").disabled = false;
        }
        }

// **** FONCTION ANIMAL ****

document.getElementById("animal").addEventListener('click', function autoClick() {
    setInterval(function(){ points = points + 75; }, 1000);        //<= augmente les points de 1 par seconde
    setInterval(function(){ CookieCount.innerHTML = "You have " + points + " bisouuuus"; }, 1000);  //<= actualise les points gagner par seconde
    prodAnimalChiffre = prodAnimalChiffre + 75;
    prodAnimal.innerHTML = "Production actuelle : " + prodAnimalChiffre + " bisous/sec";
    levelAnimalChiffre = levelAnimalChiffre + 1;
    levelAnimal.innerHTML = levelAnimalChiffre;
    points = points - prixAnimalChiffre;
    prixAnimalChiffre = prixAnimalChiffre * 1.5;
    prixAnimal.innerHTML = "Cost : " + prixAnimalChiffre + " bisous";
    achat();
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
    setInterval(function(){ points = points + 100; }, 1000);        //<= augmente les points de 1 par seconde
    setInterval(function(){ CookieCount.innerHTML = "You have " + points + " bisouuuus"; }, 1000);  //<= actualise les points gagner par seconde
    prodVoyageChiffre = prodVoyageChiffre + 100;
    prodVoyage.innerHTML = "Production actuelle : " + prodVoyageChiffre + " bisous/sec";
    levelVoyageChiffre = levelVoyageChiffre + 1;
    levelVoyage.innerHTML = levelVoyageChiffre;
    points = points - prixVoyageChiffre;
    prixVoyageChiffre = prixVoyageChiffre * 1.5;
    prixVoyage.innerHTML = "Cost : " + prixVoyageChiffre + " bisous";
    achat();
    })

//fonction qui active le bouton quand on as asser pour acheter l'amélioration
function acheterVoyage(){
    if (points < prixVoyageChiffre){
        document.getElementById("voyage").disabled = true;
    }
    else {
        document.getElementById("voyage").disabled = false;
    }
    }

 // ***** FONCTION MARIAGE *****

document.getElementById("mariage").addEventListener('click', function autoClick() {
    setInterval(function(){ points = points + 125; }, 1000);        //<= augmente les points de 1 par seconde
    setInterval(function(){ CookieCount.innerHTML = "You have " + points + " bisouuuus"; }, 1000);  //<= actualise les points gagner par seconde
    prodMariageChiffre = prodMariageChiffre + 125;
    prodMariage.innerHTML = "Production actuelle : " + prodMariageChiffre + " bisous/sec";
    levelMariageChiffre = levelMariageChiffre + 1;
    levelMariage.innerHTML = levelMariageChiffre;
    points = points - prixMariageChiffre;
    prixMariageChiffre = prixMariageChiffre * 1.5;
    prixMariage.innerHTML = "Cost : " + prixMariageChiffre + " bisous";
    achat();
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
    setInterval(function(){ points = points + 150; }, 1000);        //<= augmente les points de 1 par seconde
    setInterval(function(){ CookieCount.innerHTML = "You have " + points + " bisouuuus"; }, 1000);  //<= actualise les points gagner par seconde
    prodEnfantChiffre = prodEnfantChiffre + 150;
    prodEnfant.innerHTML = "Production actuelle : " + prodEnfantChiffre + " bisous/sec";
    levelEnfantChiffre = levelEnfantChiffre + 1;
    levelEnfant.innerHTML = levelEnfantChiffre;
    points = points - prixEnfantChiffre;
    prixEnfantChiffre = prixEnfantChiffre * 1.5;
    prixEnfant.innerHTML = "Cost : " + prixEnfantChiffre + " bisous";
    achat();
  })
function acheterEnfant(){
    if (points < prixEnfantChiffre){
        document.getElementById("enfant").disabled = true;
    }
    else {
        document.getElementById("enfant").disabled = false;
    }
    }

// ***** FONCTION CLICK *****

document.getElementById("click").addEventListener('click', function multiplier() {
    a = a + 1;        //<= augmente les points de clicque de 1
    prodClickChiffre = prodClickChiffre + 1;
    prodClick.innerHTML = "Production actuelle : " + (prodClickChiffre + 1)+" bisous/cliques";
    levelClickChiffre = levelClickChiffre + 1;
    levelClick.innerHTML = levelClickChiffre;
    points = points - prixClickChiffre;
    prixClickChiffre = prixClickChiffre * 1.5;
    prixClick.innerHTML = "Cost : " + (Math.round(prixClickChiffre *100)/100) + " bisous";
    achat();
  })
            //fonction qui active le bouton quand on as asser pour acheter l'amélioration

function acheterClick(){
    if (points < prixClickChiffre){
        document.getElementById("click").disabled = true;
    }
    else {
        document.getElementById("click").disabled = false;
    }
    }

// ***** BONUS TIME *****



document.getElementById("bonus").addEventListener('click', function bonus() {
    a = a * 2;
    setTimeout(function(){ a = a / 2; }, 30000)
    points = points - prixBonusChiffre;
    prixBonusChiffre = prixBonusChiffre * 2;
    prixBonus.innerHTML = prixBonusChiffre + "bisous";
    // argent();
    achat();
    })

function acheterBonus(){
    if (points < prixBonusChiffre){
        document.getElementById("bonus").disabled = true;
    }
    else {
        document.getElementById("bonus").disabled = false;
    }
    }

