const imageList = [
    "<img src='/images/bobrossparrot.gif' alt = 'gif of bob ross parrot'></img>",
    "<img src='/images/explodyparrot.gif' alt = 'gif of exploding parrot'></img>",
    "<img src='/images/fiestaparrot.gif' alt = 'gif of parrot in a sombrero'></img>",
    "<img src='/images/metalparrot.gif' alt = 'gif of metalhead parrot'></img>",
    "<img src='/images/revertitparrot.gif' alt = 'gif of a sailor parrot'></img>",
    "<img src='/images/tripletsparrot.gif' alt = 'gif parrot triplets'></img>",
    "<img src='/images/unicornparrot.gif' alt = 'gif of unicor parrot'></img>"
];

let numOfCards = null;
let randomImageList = [];
let openedCards = [];
let isClickAvailable = true;
let turnCounter = 0;
let victoryCont = 0;

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
    randomImageList =randomImageList.sort(randomizer); 
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
                ${randomImageList[i]}
            </div>
        </div>
        `
    }
}

function turnCard(card) {
    if (isClickAvailable && !card.classList.contains("locked")){
        card.querySelector(".front-face").classList.add("turn-front");
        card.querySelector(".back-face").classList.add("turn-back");
        card.classList.add("locked");
        openedCards.push(card);
        if (openedCards.length === 2){
            turnCounter += 1;
            isClickAvailable = false;
            if (openedCards[0].isEqualNode(openedCards[1])){
                victoryCont += 1;
                if (victoryCont === numOfCards/2){
                    setTimeout(() => {
                        victoryAchieved();
                    }, 500);
                }
                openedCards = [];
                isClickAvailable = true;
            }else{
                setTimeout(() => {
                    cleanBoard();
                }, 1000);
            }

        }
    console.log(openedCards.length +  " tamanho da lista");
    console.log("contador vitoria" + victoryCont);
    console.log("contador turnos" + turnCounter);
    console.log(isClickAvailable);
    }
}

function cleanBoard(){
    openedCards[0].querySelector(".front-face").classList.remove("turn-front");
    openedCards[0].querySelector(".back-face").classList.remove("turn-back");
    openedCards[0].classList.remove("locked");
    openedCards[1].querySelector(".front-face").classList.remove("turn-front");
    openedCards[1].querySelector(".back-face").classList.remove("turn-back");
    openedCards[1].classList.remove("locked");
    openedCards = [];
    isClickAvailable = true;
}

function victoryAchieved(){
    alert(`Fim de jogo. Sua pontuação:\nN° de turnos: ${turnCounter}`)
}





// if (openedCards[0].isEqualNode(openedCards[1])){


