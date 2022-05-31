console.log('joehoe')
//Foto's en versieringen toevoegen aan kaart

var fotoPlek, alleSier

fotoPlek = document.querySelector('.voorkantFoto');
alleSier = Array.from(document.querySelectorAll('.sier'));
// array.form is een methode om array achtige lijsten als array om te toveren

function fotoToevoegen(event) {
    console.log(event.target.src);

    fotoPlek.src = event.target.src
}
// event is de naam (parameter) van onze nieuwe variabelen die we alleen in deze functie gaan declaren. 
// De target roept het geselecteerde item aan binnen de gedefinieerde elementen van eventlistener. Uitleg in Nienke taal:
// we 'targeten' de functie 'event' die wordt gegeven aan het variabele 'alleSier' die wordt uitgevoerd met 'click' om uiteindelijk de functie 'fotoToevoegen' te laten werken

alleSier.forEach(function(element) {
    element.addEventListener('click', fotoToevoegen)
});
// Bij een ForEach maken we automatisch een nodelist aan met alle properties met de class .sier
// De forEach roept een functie aan voor alle elementen in het variabele
// Alle elementen met class .sier hebben we gezocht met de queryselectorall 
// "element" is in dit geval een parameter. Ookwel een nieuw variabele. deze var declaren we binnen de {}
// om bijvoorbeeld(in deze opdracht) een eventlistener toe te voegen bij een ForEach statement. 
// De variabelen horen alleen bij deze functie








// Button om kaart om te draaien
var draaiButVoor, draaiButAchter, voorkantKaart, achterkantKaart

draaiButVoor = document.querySelector('.buttonVoor')
draaiButAchter = document.querySelector('.buttonAchter')
voorkantKaart = document.querySelector('.voorkant')
achterkantKaart = document.querySelector('.achterkant')

function kaartNaarAchter() {
    voorkantKaart.style.display = 'none'
    achterkantKaart.style.display = 'block'
}
    
function kaartNaarVoren() {
    voorkantKaart.style.display = 'block'
    achterkantKaart.style.display = 'none'

}

draaiButVoor.addEventListener('click', kaartNaarAchter)
draaiButAchter.addEventListener('click', kaartNaarVoren)









// Teksten invoeren
// Ik heb bij dit stuk op elke regel "var" neergezet om orde te houden in de leesbaarheid. Bij alles samenschrijven op 1 regel 
// werd het heel onoverzichtelijk en kon je een deel van de variabelen niet meer lezen. Beide methodes kunnen. Ik vind dat deze methode
// bij dit gedeelte een stuk efficienter is
var achterkantInputTekst = document.querySelector('.langeTekst')
var achterkantLegeTekst = document.querySelector('.legeTekst')
var achterkantInputNaam = document.querySelector('.volleNaam')
var achterkantLegeNaam = document.querySelector('.legeNaam')
var achterkantInputStraat = document.querySelector('.volleStraat')
var achterkantLegeStraat = document.querySelector('.legeStraat')
var achterkantInputPostcode = document.querySelector('.volleCode')
var achterkantLegePostcode = document.querySelector('.legeCode')
var schrijvenButton = document.querySelector('.schrijven')
var adresButton = document.querySelector('.adres')


function tekstVeranderen() {
    console.log('yeet')
    achterkantLegeTekst.textContent = achterkantInputTekst.value;
}

function adresVeranderen() {
    console.log('alles')
    achterkantLegeNaam.textContent = achterkantInputNaam.value;
    achterkantLegeStraat.textContent = achterkantInputStraat.value;
    achterkantLegePostcode.textContent = achterkantInputPostcode.value;
}

schrijvenButton.addEventListener('click', tekstVeranderen)
adresButton.addEventListener('click', adresVeranderen)








// Postzegel kopen 
var kopenButton, koopGeluid

kopenButton = document.querySelector('.kopen')
koopGeluid = document.querySelector('audio')

function zegelKopen() {
    koopGeluid.play();
    kopenButton.style.display = 'none';
}

kopenButton.addEventListener('click', zegelKopen)









// Plekken bezoeken en geld verdienen
var balansWaarde, buttonsLanden, gekkeStacks

buttonsLanden = document.querySelectorAll('.land')
balansWaarde = document.querySelector('span');
gekkeStacks = 0

function geldVerdienen() {
    console.log('godverdomme hij werkt gewoon een soort van')
   if (gekkeStacks == 0){
    gekkeStacks = gekkeStacks + 5;
    balansWaarde.value = gekkeStacks;
    balansWaarde.textContent = gekkeStacks
    kopenButton.disabled = true
   }

// Als gekkestacks 0 is gaan we bij het uitvoeren van de functie +5 op de waarde doen
// We geven deze waarde terug via textcontent en verandering in de tekst op het scherm
// De button is nog disabled omdat de juiste waarde nog niet is bereikt

   else if (gekkeStacks == 5) {
       gekkeStacks = gekkeStacks + 5;
       balansWaarde.value = gekkeStacks;
       balansWaarde.textContent = gekkeStacks
       kopenButton.disabled = true
   }

   else if (gekkeStacks == 10) {
        gekkeStacks = gekkeStacks + 5;
        balansWaarde.value = gekkeStacks;
        balansWaarde.textContent = gekkeStacks + ', je kan nu een postzegel kopen!';
        kopenButton.disabled = false
   }

   else if (gekkeStacks > 14) {
    gekkeStacks = gekkeStacks + 5;
    balansWaarde.value = gekkeStacks;
    balansWaarde.textContent = gekkeStacks + ', je kan nu een postzegel kopen!';
    kopenButton.disabled = false
   }
// De button word geabled omdat de juiste waarde (15 of hoger) is bereikt en we de postzegel kunnen kopen
}

buttonsLanden.forEach(function (buttonLand){
    buttonLand.addEventListener('click', geldVerdienen);
});

