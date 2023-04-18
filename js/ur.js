// Frederikke count down
//tilføj en var med en dato. Den gemmer tid og dato, når nedtællingen ender
var countDownDato = new Date("Sep 15, 2023 00:00:00").getTime();

//Tilføjer en funktion. Den gentager sig ved 1000 milisekunder. Det vil sige et sekundt
var x = setInterval(function(){

  //Tølføjer i dag og tiden
  var now = new Date().getTime();
  // Tilføjer afstanden mellem i dags dato, og count downs slut dato.
  var distance = countDownDato - now;

  // Nu udregnes afstanden på dage, timer, minutter og sekunder.
  // Her gemmer vi det i flere variabler. 
  var dage = Math.floor(distance / (1000 * 60 * 60 * 24));
  var timer = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutter = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var sekunder = Math.floor((distance % (1000 * 60)) / 1000);

  // Nu skal vi fremvise/display dette 
  document.getElementById("dage").innerHTML = dage;
  document.getElementById("timer").innerHTML = timer;
  document.getElementById("minutter").innerHTML = minutter;
  document.getElementById("sekunder").innerHTML = sekunder;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("dage").innerHTML = "00";
    document.getElementById("timer").innerHTML = "00";
    document.getElementById("minutter").innerHTML = "00";
    document.getElementById("sekunder").innerHTML = "00";
  }
},1000);