let age = document.querySelector(".age"),
    btn = document.querySelector("button"),
    input = document.querySelector("input");

function currentAge(birthAge){
    return [new Date().getFullYear()-birthAge];
}

btn.addEventListener("click", ()=> {
    age.innerHTML = "Ваш возраст: "+ currentAge(input.value);
})
/////////////////////////////////////////////////////////////////////////////
let firstArr = document.querySelector(".firstshow"),
    secondArr = document.querySelector(".secondshow"),
    thirdArr = document.querySelector(".thirdshow"),
    groups = [394 , 392 , 391 , 393],
    temp;

firstArr.innerHTML = "До сортировки: " + groups;

for (let i = 0 ; i<groups.length - 1 ; i++){
    if (groups[i] < groups[i+1]){
        temp = groups[i];
        groups[i] = groups[i+1];
        groups[i+1] = temp;
    }
}

secondArr.innerHTML = "После сортировки: " + groups;

groups.push(397);
groups[6] = 399;

thirdArr.innerHTML = "После push() и добавления элемента: " + groups + "Кол-во элементов: " + groups.length;
/////////////////////////////////////////////////////////////////////////////
let x = 7,
    comp1 = document.querySelector(".comp1"),
    comp2 = document.querySelector(".comp2"),
    comp3 = document.querySelector(".comp3"),
    comp4 = document.querySelector(".comp4");

comp1.innerHTML = "x==7 " + (x==7);
comp2.innerHTML = "x==='7' " + (x==="7");
comp3.innerHTML = "x<9 " + (x<9);
comp4.innerHTML = "x!==7 " + (x!==7);