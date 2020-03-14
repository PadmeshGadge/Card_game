function myFunction(){
    setTimeout( () =>
      {reset();}, 200);
    setTimeout( () =>
      {document.getElementById("img1").src = "images/"+Math.floor((Math.random()*100)%25+1)+".svg"; }, 500);
    setTimeout( () =>
      {document.getElementById("img2").src = "images/"+Math.floor((Math.random()*100)%25+1)+".svg"; }, 1000);
    setTimeout( () =>
      {document.getElementById("img3").src = "images/"+Math.floor((Math.random()*100)%25+1)+".svg"; }, 1500);
}
function reset(){
  document.getElementById("img1").src = "images/1535949379.png";
  document.getElementById("img2").src = "images/1535949379.png";
  document.getElementById("img3").src = "images/1535949379.png";
}
