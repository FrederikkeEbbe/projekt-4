// Frederikke count down
//tilføj en let med en dato. Den gemmer tid og dato, når nedtællingen ender
let countDownDato = new Date("Sep 15, 2023 00:00:00").getTime();

//Tilføjer en funktion. Den gentager sig ved 1000 milisekunder. Det vil sige et sekundt
let x = setInterval(function(){

  //Tølføjer i dag og tiden
  let now = new Date().getTime();
  // Tilføjer afstanden mellem i dags dato, og count downs slut dato.
  let distance = countDownDato - now;

  // Nu udregnes afstanden på dage, timer, minutter og sekunder.
  // Her gemmer vi det i flere variabler. 
  let dage = Math.floor(distance / (1000 * 60 * 60 * 24));
  let timer = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutter = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let sekunder = Math.floor((distance % (1000 * 60)) / 1000);

  // Nu skal vi fremvise/display dette 
  document.getElementById("dage").innerHTML = dage;
  document.getElementById("timer").innerHTML = timer;
  document.getElementById("minutter").innerHTML = minutter;
  document.getElementById("sekunder").innerHTML = sekunder;

  // if, der laver count down om, når datoen er nået.
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("dage").innerHTML = "00";
    document.getElementById("timer").innerHTML = "00";
    document.getElementById("minutter").innerHTML = "00";
    document.getElementById("sekunder").innerHTML = "00";
  }
},1000);

//array med beskeder
let hilsen = ["STØRSTE", "VILDESTE", "SJOVESTE"]

//variabler
let datoHilsen, tidHilsen, hilsenText;

//sætter værdi på variablerne
datoHilsen = new Date();
tidHilsen = datoHilsen.getHours();
hilsenText = document.getElementById("urSpan");

//if statement -> hvis klokken er under eller lig med 10 skriv "STØRSTE"
//hvis klokken er over 10 og under eller lig med 17 så skriv "VILDESTE"
//hvis klokken er onder 17 og under eller lig med 24 så skriv "SJOVESTE"
if(tidHilsen <= 10) {
    hilsenText.innerHTML = hilsen[0];
    console.log(hilsen[0]);
}
else if (tidHilsen > 10 && tidHilsen <= 17) {
    hilsenText.innerHTML = hilsen[1];
    console.log(hilsen[1]);
}
else if (tidHilsen > 17 && tidHilsen <= 24) {
    hilsenText.innerHTML = hilsen[2];
    console.log(hilsen[2]);
}
