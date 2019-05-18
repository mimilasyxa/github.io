let wheel = document.getElementById("wheel");
let rand = Math.random()*96 * 172;

wheel.setAttribute('style','transform:rotate(' +rand +'deg)');


setInterval(function(){
    alert("КАМИК СОСИ ХУЙ");
},1000);