var interval = null;
function flyv1() {
    var elem = document.getElementById("animationbillet1");   
    var position = -35;
    clearInterval(interval);
    interval = setInterval(frame, 5);
    function frame() {
            if (position == 300) {
                clearInterval(interval);         
            } else {
                position++; 
                elem.style.top = position + 'px'; 
            }
    }
}

var interval = null;
function flyv2() {
    var elem = document.getElementById("animationbillet2");   
    var position = -35;
    clearInterval(interval);
    interval = setInterval(frame, 5);
    function frame() {
            if (position == 300) {
                clearInterval(interval);         
            } else {
                position++; 
                elem.style.top = position + 'px'; 
            }
    }
}