let randomNum1 = Math.floor(Math.random() * 6) + 1;
let changePic = "images/dice" + randomNum1 + ".png";
document.querySelectorAll('img')[0].setAttribute('src', changePic );

let randomNum2 = Math.floor(Math.random() * 6) + 1;
let changePic2 = "images/dice" + randomNum2 + ".png";
document.querySelectorAll('img')[1].setAttribute('src', changePic2);


if (randomNum1 > randomNum2) {
    document.querySelector('h1').innerHTML = 'Player 1 Won';
} else if (randomNum1 < randomNum2) {
    document.querySelector('h1').innerHTML = 'Player 2 Won';

} else {
    document.querySelector('h1').innerHTML = 'Draw';
}