let images = [
    "dice-1.png",
    "dice-2.png",
    "dice-3.png",
    "dice-4.png",
    "dice-5.png",
    "dice-6.png"
];
let dice= document.querySelectorAll("img");

function roll() {
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOnValue = Math.floor(Math.random()*6);
        let dieTwoValue = Math.floor(Math.random()*6);
        console.log(dieOnValue,dieTwoValue);
        document.querySelector("#die-1").setAttribute("src", images[dieOnValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#total").innerHTML ="Your roll is" + ((dieOnValue +1) +(dieTwoValue +1) );
    },
    1000
    );
}
roll();
