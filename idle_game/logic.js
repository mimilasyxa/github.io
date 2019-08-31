let counter = document.querySelector("#counter"),
    btn = document.querySelector(".click"),
    units = document.querySelectorAll(".unit"),
    helpers = Array.from(units),
    helper = [0,0,0,0,0];
    counter.innerHTML = 0;

btn.addEventListener("mouseup",()=>{
    counter.innerHTML++;
} )

setInterval(add,1000);

document.addEventListener("mouseup",(e)=>{
    if (Number(e.target.innerHTML) <= counter.innerHTML){
    counter.innerHTML-= Number(e.target.innerHTML);
    e.target.innerHTML = Math.floor(e.target.innerHTML * 1.1);
    switch (e.target){
        case helpers[0]:
            helper[0]++;
            break;
        case helpers[1]:
            helper[1]++;
            break;
        case helpers[2]:
            helper[2]++;
            break;
        case helpers[3]:
            helper[3]++;
            break;
        case helpers[4]:
            helper[4]++;
            break;
    }
}
})

function add(){
    let fas = Number(counter.innerHTML) + (helper[0] * 1 + helper[1] * 4 + helper[2] * 10 + helper[3] * 15 + helper[4] * 50);
    counter.innerHTML= fas;
}