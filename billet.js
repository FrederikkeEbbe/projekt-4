var interval = null;
function flyv() {
    var elem = document.getElementById("animationbillet");   
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