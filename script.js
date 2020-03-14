var num = Math.floor((Math.random()*10)+1);
console.log(num);
function myFunction(){
    document.getElementById("img1").src = "images/"+Math.floor((Math.random()*10)+1)+".svg";
    document.getElementById("img2").src = "images/"+Math.floor((Math.random()*10)+1)+".svg";
    document.getElementById("img3").src = "images/"+Math.floor((Math.random()*10)+1)+".svg";
}
