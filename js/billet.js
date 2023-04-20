//Animation der river stregkoden til billetten over

var interval = null;                                            //Sættes lig med null (ingenting)

function flyv1() {
    var stregkode = document.getElementById("animationbillet1");//Referere til id
    var position = -35;                                         //Startkoordinat (y) = -35
    clearInterval(interval);                                    //Sikre den ikke kører igen samtidig
    interval = setInterval(move, 5);                            //Laver interval som kører move() hver 5 millisekund indtil if-sætning er nået
    function move() {
            if (position == 300) {                              //Slut koordinat (y) = 300
                clearInterval(interval);                        //Stopper interval
            } else {
                position++;                                     //Sikre retning af bevægelse
                stregkode.style.top = position + 'px';          //+1px hver gang den kørers
            }
    }
}

var interval = null;
function flyv2() {
    var stregkode = document.getElementById("animationbillet2");   
    var position = -35;
    clearInterval(interval);
    interval = setInterval(move, 5);
    function move() {
            if (position == 300) {
                clearInterval(interval);         
            } else {
                position++; 
                stregkode.style.top = position + 'px'; 
            }
    }
}