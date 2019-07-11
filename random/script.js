let age = document.querySelector(".age"),
    btn = document.querySelector("button"),
    input = document.querySelector("input");

function currentAge(birthAge){
    let currentYear = new Date().getFullYear(),
        currentMonth = new Date().getMonth() + 1,
        currentDate = new Date().getDate(),
        strInput = input.value.split("-",3),
        result;
    switch (true){
        case (birthAge>currentYear):{
            result = "Вы не могли родиться после " + currentYear;
            break;
        }
        case (birthAge<0):{
            result = "Отрицательный год невозможен";
            break;
        }
        case (birthAge<currentAge):{
            if (strInput[1]>currentMonth){
                currentYear--;
            }
            result =  "Ваш возраст: " + (currentYear - strInput[0]) + " лет " + Math.abs(currentMonth - strInput[1]) + " месяцев " + Math.abs(currentDate - strInput[2]) + " дней";
            break;
        }
        default:{
            result = "Введите корректную дату";
            break;
        }
    }
    return result;
}

btn.addEventListener("click", ()=> {
    age.innerHTML = currentAge(input.value);
})
/////////////////////////////////////////////////////////////////////////////
let firstArr = document.querySelector(".firstshow"),
    secondArr = document.querySelector(".secondshow"),
    thirdArr = document.querySelector(".thirdshow"),
    groups = [394 , 392 , 391 , 393],
    temp;

firstArr.innerHTML = "До сортировки: " + groups;

for (let j = 0 ; j<groups.length ; j++){
    for (let i = 0 ; i<groups.length - 1 ; i++){
     if (groups[i] < groups[i+1]){
            temp = groups[i];
            groups[i] = groups[i+1];
            groups[i+1] = temp;
    }
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