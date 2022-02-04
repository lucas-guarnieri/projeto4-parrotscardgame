const imageList = [
    "bobrossparrot.gif",
    "explodyparrot.gif",
    "fiestaparrot.gif",
    "metalparrot.gif",
    "revertitparrot.gif",
    "tripletsparrot.gif",
    "unicornparrot.gif"
];

let numOfCards = null;
let randomImageList = [];

setNumOfCards();
createRandomList();
createCards();


function setNumOfCards(){
    let num = prompt("Com quantas cartas você quer jogar?\nO número de cartas deve ser par e no máximo 14");
    if (num % 2 == 0 && num <= 14){
        numOfCards = num;
    }
    else{
        alert("O NÚMERO de cartas DEVE ser PAR e MENOR que 14")
        setNumOfCards();
    }
}

function createRandomList(){
    for (let i = 0; i < numOfCards/2; i++){
        randomImageList.push(imageList[i]);
        randomImageList.push(imageList[i]);
    }
    randomImageList =randomImageList.sort(randomizer); // Após esta linha, a minhaArray estará embaralhada
}

function randomizer() { 
	return Math.random() - 0.5; 
}

function createCards(){
    const gameBoard = document.querySelector(".gameBoard");
    for (let i = 0; i < randomImageList.length; i++){
        gameBoard.innerHTML += `
        <div class="card" onclick="turnCard(this)" data-identifier="card">
            <div class="front-face face" data-identifier="front-face">
                <img src="/images/front.png">
            </div>
            <div class="back-face face"  data-identifier="back-face">
                <img src="/images/${randomImageList[i]}" alt = 'gif of slack parrot'">
            </div>
        </div>
        `
    }
}

function turnCard(card) {
    card.querySelector(".front-face").classList.add("turn-front");
    card.querySelector(".back-face").classList.add("turn-back");
}



