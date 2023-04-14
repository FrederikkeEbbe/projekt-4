var id = null;
function myMove() {
  var elem = document.getElementById("myAnimation");   
  var pos = -35;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
    }
  }
}