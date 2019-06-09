let divs = document.querySelectorAll(".item"),
    cards = Array.from(divs),
    parentElement = document.querySelector(".container"),
    cardObj = [],
    colours = ["red","green","pink",'yellow'];

class Card {
    constructor(color){
        this.color = color;
    }
    add(){
        this.div = document.createElement("div");
        this.div.className = "item";
        this.div.style.background = this.color;
        this.div.style.height = "25%";
        this.div.style.width = "15%";
        this.div.style.margin = "auto";
        parentElement.appendChild(this.div);
    }
}

for (var i = 0; i<12 ; i++){
    cardObj.push( new Card(colours[Math.floor(Math.random()*3)]));
    cardObj[i].add();
}

setTimeout(() => {
    cardObj.forEach(card => {
        card.div.style.background = "black";
    });
}, 5000);

cardObj.forEach(card => {
    card.div.addEventListener("click",(event) => {
        event.target.style.background = card.color;
})});

