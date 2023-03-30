// alert("hola");
var randomno1=Math.floor(Math.random()*6)+1; //taking random no form 1 to 6

var randomDiceImage= "dice" + randomno1 + ".png";

var randomImageSource= "images/" + randomDiceImage;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);


var randomno2=Math.floor(Math.random()*6+1);

var randomImageSource2="images/dice" + randomno2 + ".png";

var image2=document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomno1==randomno2)
 document.querySelector("h1").innerHTML="It's a tie! ";

else if(randomno1>randomno2)
document.querySelector("h1").innerHTML="🚩Player 1 Wins";

else
document.querySelector("h1").innerHTML="Player 2 wins🚩";