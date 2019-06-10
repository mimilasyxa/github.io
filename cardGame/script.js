let divs = document.querySelectorAll(".item"),
    cards = Array.from(divs),
    parentElement = document.querySelector(".container"),
    cardObj = [],
    colours = ["red","green","pink",'yellow',"blue","orange"],
    cardClicked = false,
    first,second;

class Card {
    constructor(color){
        this.color = color;
        this.flipped = false;
    }
    add(){
        this.div = document.createElement("div");
        this.div.className = "item";
        this.div.style.background = this.color;
        parentElement.appendChild(this.div);
    }
}

for (var i = 0; i<12 ; i++){
    cardObj.push( new Card(colours[Math.floor(Math.random()*6)]));
    cardObj[i].add();
}

setTimeout(() => {
    cardObj.forEach(card => {
       blackOut(card);
    });
}, 5000);

function blackOut(card){
    card.div.style.background = "black";
}

cardObj.forEach(card => {
    card.div.addEventListener("click",(event) => {
        event.target.style.background = card.color;
        if (cardClicked){
            first = card;
            cardClicked = false;
            if (first.div.style.background == second.div.style.background &(first.flipped == false & second.flipped == false)){
                match(first,second);
                console.log("yes");
            }
            else {
                blackOut(first);
                blackOut(second);
            }
        }
        else {
            second = card;
            cardClicked = true;
        }
})});

function match(first,second){
    first.flipped = true;
    second.flipped = true;
}
