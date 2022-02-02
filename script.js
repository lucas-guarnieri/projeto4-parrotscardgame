/*GLOBAL VARIABLES*/

let numOfCArds = null;

getNumOfCards();
function getNumOfCards(){
    let num = prompt("Com quantas cartas você quer jogar?\nO número de cartas deve ser par e no máximo que 14");
    if (num % 2 == 0 && num <= 14){
        numOfCArds = num;
        
    }
    else{
        alert("O NÚMERO de cartas DEVE ser PAR e MENOR que 14")
        getNumOfCards();
    }
}