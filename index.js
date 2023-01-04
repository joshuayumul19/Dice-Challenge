var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var diceImage1 = "dice" + randomNumber1 + ".png";
var diceImageSource1 = "images/" + diceImage1;
var image1 = document.querySelector(".img1");
image1.setAttribute("src", diceImageSource1);
var diceImage2 = "dice" + randomNumber2 + ".png";
var diceImageSource2 = "images/" + diceImage2;
var image2 = document.querySelector(".img2");
image2.setAttribute("src", diceImageSource2);

if (randomNumber1 > randomNumber2) {
    document.getElementsByTagName("h1")[0].textContent = "🚩Player 1 Wins";
}
else if (randomNumber2 > randomNumber1) {
    document.getElementsByTagName("h1")[0].textContent = "Player 2 Wins🚩";
}
else {
    document.getElementsByTagName("h1")[0].textContent = "Draw";
}