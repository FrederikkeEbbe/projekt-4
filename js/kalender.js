const nuværendeDato = document.querySelector(".idag");
//hvorfor kan getElementsByClassName("idag") ikke bruges?
dageTag = document.querySelector(".dage");
pile = document.querySelectorAll(".pil span");
let neutraldage;

let dato = new Date(),
detteAar = dato.getFullYear(),
denneMaaned = dato.getMonth();
let aktivdato = new Date();

const maaned = ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"]

const renderCalendar = () => {
    let forsteDatoIMaaneden = new Date(detteAar, denneMaaned, 1).getDay(),
    sidsteDatoIMaaneden = new Date(detteAar, denneMaaned + 1, 0).getDate(),
    sidsteDagIMaaneden = new Date(detteAar, denneMaaned, sidsteDatoIMaaneden).getDay(),
    sidsteDatoAfSidsteMåned = new Date(detteAar, denneMaaned, 0).getDate();        
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
renderCalendar();


pile.forEach(pil => {
    pil.addEventListener("click", () => {
        if (pil.id == "forrige") {
            denneMaaned -= 1;
            if (denneMaaned == -1) {
                denneMaaned = 11;
                detteAar -= 1;
            }
        } else {
            denneMaaned += 1;
            if (denneMaaned == 12) {
                denneMaaned = 0;
                detteAar += 1;
            }
        }
        renderCalendar();
    });
});



