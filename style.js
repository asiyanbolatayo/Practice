
function light(sw) {
    var pic;
    if (sw == 0) {
      pic = "Media/pic_bulboff.gif"
    } else {
      pic = "Media/pic_bulbon.gif"
    }
    document.getElementById('myImage').src = pic;
  }
  
    
  function myFunction() {
    document.getElementById("demo").style.fontSize = "25px"; 
    document.getElementById("demo").style.color = "red";
    document.getElementById("demo").style.backgroundColor = "yellow";        
  }
  