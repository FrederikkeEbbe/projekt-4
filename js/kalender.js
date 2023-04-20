const nuværendeDato = document.querySelector(".idag");  //Konstant der referere til en class
const dageTag = document.querySelector(".dage");        //Konstant der referere til en class
const pile = document.querySelectorAll(".pil span");    //Konstant der referere til en class med alle span-elementer
let neutraldage;                                        //Opretter en tom variabel til inaktive dage

let dato = new Date();                                  //Generere nuværende tidspunkt (år, måned, dag, time, minut, sekundt)
let detteAar = dato.getFullYear();                      //Beder om nuværende år igennem variablen dato
let denneMaaned = dato.getMonth();                      //Beder om nuværende måned igennem variablen dato
let aktivdato = new Date();                             //Generere nuværende tidspunkt

const maaned = ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"]

const renderCalendar = () => {
    let forsteDatoIMaaneden = new Date(detteAar, denneMaaned, 1).getDay();
    let sidsteDatoIMaaneden = new Date(detteAar, denneMaaned + 1, 0).getDate();
    let sidsteDagIMaaneden = new Date(detteAar, denneMaaned, sidsteDatoIMaaneden).getDay();
    let sidsteDatoAfSidsteMåned = new Date(detteAar, denneMaaned, 0).getDate();        
    let liTag = "";

    for (let i = forsteDatoIMaaneden; i > 1; i--) {
        liTag +=  '<li class="inaktiv">' + (sidsteDatoAfSidsteMåned - i + 2) + '</li>';
    }

    for (let i = 1; i <= sidsteDatoIMaaneden; i++) {
        let dagenIdag = "";
        if (i === aktivdato.getDate() && denneMaaned === aktivdato.getMonth() && detteAar === aktivdato.getFullYear()){
            dagenIdag = "aktiv";
        } else  {
            dagenIdag = "neutral";
            if (i === dato.getDate() && denneMaaned === dato.getMonth() && detteAar === dato.getFullYear()){
                dagenIdag += " id=nu";
            }
        }
        
        liTag += '<li class=' + dagenIdag + '>' + i + '</li>';
    }

    for (let i = sidsteDagIMaaneden; i < 7; i++) {
        liTag +=  '<li class="inaktiv">' + (i - sidsteDagIMaaneden + 1) + '</li>';
    }
    
    nuværendeDato.innerText = maaned[denneMaaned] + ' ' +  detteAar;
    dageTag.innerHTML = liTag;
    neutraldage = document.querySelectorAll(".neutral");
    neutraldage.forEach(dag => {
        dag.addEventListener("click", () => {
            aktivdato.setDate(dag.innerText);
            aktivdato.setMonth(denneMaaned);
            aktivdato.setFullYear(detteAar);
            renderCalendar();
        });
    });
}
renderCalendar();                               //Opdater kalenderen


pile.forEach(pil => {                           //Kør kode for begge pile
    pil.addEventListener("click", () => {       //Når klik, kør da følgende
        if (pil.id == "forrige") {              //Hvis id'et på pil = forrige, kør da følgende
            denneMaaned -= 1;                   //Tilbage 1 måned
            if (denneMaaned == -1) {            //Hvis januar, som er måned 0, og dermed -1, kør nedenstående
                denneMaaned = 11;               //Bliv til måned 11 hvis ovenstående
                detteAar -= 1;                  //Træk et år fra
            }
        } else {
            denneMaaned += 1;                   //Frem 1 måned
            if (denneMaaned == 12) {            //Hvis december, som er måned 11, og dermed 12, kør nedenstående
                denneMaaned = 0;                //Bliv til måned 0 hvis ovenstående
                detteAar += 1;                  //Læg et år til
            }
        }
        renderCalendar();                       //Opdater kalenderen
    });
});



