function myFunction(){
    reset();
      // var num1 = 3;
      // var num2 = 3;
      // var num3 = 3;
      var num1 = Math.floor((Math.random()*100)%51+1);
      var num2 = Math.floor((Math.random()*100)%51+1);
      var num3 = Math.floor((Math.random()*100)%51+1);
    setTimeout( () =>
      {document.getElementById("img1").src = "images/"+num1+".svg"; }, 500);
    setTimeout( () =>
      {document.getElementById("img2").src = "images/"+num2+".svg"; }, 1000);
    setTimeout( () =>
      {document.getElementById("img3").src = "images/"+num3+".svg";
        check(num1,num2,num3); }, 1500);
}

//Resetting function
function reset(){
  document.getElementById("img1").src = "images/05a.svg";
  document.getElementById("img2").src = "images/05a.svg";
  document.getElementById("img3").src = "images/05a.svg";
  document.getElementById("color").innerHTML = "0";
  document.getElementById("number").innerHTML = "0";
  document.getElementById("design").innerHTML = "0";
  document.getElementById("completely").innerHTML = "0";
}

//Check points
function check(a,b,c){
  console.log(a,b,c);

  //CHECKING FOR SAME CARD
  if(a==b && a==c) {
  document.getElementById("color").innerHTML = "30";
  document.getElementById("number").innerHTML = "50";
  document.getElementById("design").innerHTML = "50";
  document.getElementById("completely").innerHTML = "200";
  return;
  }

  //CHECKING FOR SAME COLOR
  if(a<27&&b<27&&c<27){
    document.getElementById("color").innerHTML = "30";
  }
  else if (a>27&&b>27&&c>27) {
    document.getElementById("color").innerHTML = "30";
  }

  //CHECKING FOR SAME NUMBER
  if((a%13)==(b%13) && (a%13)==(c%13)){
    document.getElementById("number").innerHTML = "50";
  }

  //CHECKING FOR SAME DESIGN
  if (between(a,b,c,1,13))
    document.getElementById("design").innerHTML = "50";
  if (between(a,b,c,14,26))
    document.getElementById("design").innerHTML = "50";
  if (between(a,b,c,27,39))
    document.getElementById("design").innerHTML = "50";
  if (between(a,b,c,40,52))
    document.getElementById("design").innerHTML = "50";

}

function between(a,b,c, min, max) {
  if (a>=min && a<=max){
    if (b>=min && b<=max){
      if (c>=min && c<=max)
        return true;
    }
  }
  return false;
}
