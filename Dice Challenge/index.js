var randomNumber1 =Math.floor(Math.random()*6)+1;
var randomImage1="dice"+randomNumber1+".png"; //dice1.png-dice6.png
var randomSource1="images/"+randomImage1;     //images/dice1.png-images/dice6.png

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomSource1);


var randomNumber2 =Math.floor(Math.random()*6)+1;
var randomSource2="images/dice"+randomNumber2+".png"; //images/dice1.png-images/dice6.png
document.querySelectorAll("img")[1].setAttribute("src",randomSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!"
}
else if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").innerHTML="Draw!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins!"
}