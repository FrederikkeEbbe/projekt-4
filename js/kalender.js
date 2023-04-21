const nuværendeDato = document.querySelector(".idag");  //Konstant der referere til en class
const dageTag = document.querySelector(".dage");        //Konstant der referere til en class
const pile = document.querySelectorAll(".pil span");    //Konstant der referere til en class med alle span-elementer
let neutraldage;                                        //Opretter en tom variabel til inaktive dage

const dato = new Date();                                //Generere nuværende tidspunkt (år, måned, dag, time, minut, sekundt) Altid i dag
let detteAar = dato.getFullYear();                      //Beder om nuværende år igennem variablen dato
let denneMaaned = dato.getMonth();                      //Beder om nuværende måned igennem variablen dato
let aktivdato = new Date();                             //Generere nuværende tidspunkt, I dag eller den der er valgt

const maaned = ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"] //Array med månederne

function renderCalendar() {
    let forsteDagIMaaneden = new Date(detteAar, denneMaaned, 1).getDay();                   //Finder ugedag for første dag i måneden. Find den 1, april, 2023, hvilken ugedag er det? Det er en torsdag...
    let sidsteDatoIMaaneden = new Date(detteAar, denneMaaned + 1, 0).getDate();             //Find dagen før den første dag i næste måned, dermed den sidste dag i denne måned, hvilket tal er det?
    let sidsteDagIMaaneden = new Date(detteAar, denneMaaned, sidsteDatoIMaaneden).getDay(); //Ovenstående, hvilken ugedag er det?
    let sidsteDatoAfSidsteMåned = new Date(detteAar, denneMaaned, 0).getDate();             //Finder dagen før den første dag i denne måned
    let liTag = "";                                                                         //Beholder til indhold i HTML listen (månedens dage)

    //Generere de inaktive dage fra forrige måned
    for (let i = forsteDagIMaaneden; i > 1; i--) {                                          //For-loop, i=ugedag, så længe ugedag er større end 1, kør da koden. Træk 1 fra i når koden er kørt. 
        liTag +=  '<li class="inaktiv">' + (sidsteDatoAfSidsteMåned - i + 2) + '</li>';     //Generer ugedage som repræsentere forige månedes ugedage og gør dem inaktive med class.
    }

    //Generere denne måneds dage
    for (let i = 1; i <= sidsteDatoIMaaneden; i++) {                                                                    //For-loop, i=1, så længe at 1 er mindre end eller lig med den sidste dag i måneden, kør da koden. Læg 1 til i når koden er kørt.
        let dagenIdag = "";                                                                                             //Beholder til aktiv eller neutral dag
        if (i === aktivdato.getDate() && denneMaaned === aktivdato.getMonth() && detteAar === aktivdato.getFullYear()){ //Den valgte dag/i dag til at starte med
            dagenIdag = "aktiv";                                                                                        //Hvis i har samme værdi som aktivdatos dag og dennemåned har samme værdi som aktivdatos måned og dette år har samme værdi som aktivdatos år, bliv da tildelt classen aktiv
        } else  {                                                                                                       //Alle andre dage i måneden
            dagenIdag = "neutral";                                                                                      //ellers tildeles den classen neutral
            if (i === dato.getDate() && denneMaaned === dato.getMonth() && detteAar === dato.getFullYear()){            //Hvis i, denne måned og dette år tilsammen er i dag, få da tildelt idet "nu"
                dagenIdag += " id=nu";
            }
        }
        
        liTag += '<li class=' + dagenIdag + '>' + i + '</li>';                        //Alle de dage vi lige har tildelt en class eller et id kommer i en liste
    }

    //Generere de inaktive dage fra næste måned
    for (let i = sidsteDagIMaaneden; i < 7; i++) {                                    //Samme som de forrige inaktive, bare med næste måned i stedet for forrige
        liTag +=  '<li class="inaktiv">' + (i - sidsteDagIMaaneden + 1) + '</li>';
    }
    
    //Udskriver i DOM 
    nuværendeDato.innerText = maaned[denneMaaned] + ' ' +  detteAar; //TIlføjer overskriften (Måend og år)
    dageTag.innerHTML = liTag;                                       //Tilføjer alle dagene

    //Tillader at kunne gøre en neutral dag til en aktiv dag
    neutraldage = document.querySelectorAll(".neutral");    //Liste af alt med classen neutral
    neutraldage.forEach(dag => {                            //For hvert element i listen,
        dag.addEventListener("click", () => {               //får elementet en eventlistener (click)
            aktivdato.setDate(dag.innerText);               //Ændre aktiv dato til den dato man klikkede på
            aktivdato.setMonth(denneMaaned);                //Ændre aktiv dato til den dato man klikkede på
            aktivdato.setFullYear(detteAar);                //Ændre aktiv dato til den dato man klikkede på
            renderCalendar();                               //Opdater kalenderen
        });
    });
}
renderCalendar();                               //Opdater kalenderen

//Pilene
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



