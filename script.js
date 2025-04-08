window.onmousemove = function(e){
    document.getElementById("circle").style.left = e.clientX + "px"
    document.getElementById("circle").style.top = e.clientY +-50 + "px"

}
document.getElementById("img-one").onclick = function(){
   document.body.style.backgroundImage ="url('img1.jpg') ";
   
 
}
document.getElementById("img-two").onclick = function(){
    document.body.style.backgroundImage ="url('img2.jpg') ";
    
  
 }
 document.getElementById("img-three").onclick = function(){
    document.body.style.backgroundImage ="url('img3.jpg') ";
    
  
 }