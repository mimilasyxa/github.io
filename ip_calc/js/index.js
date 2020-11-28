let ip_input = document.querySelector("#ip"),
    mask_input = document.querySelector("#mask"),
    btn = document.querySelector("button"),
    ip_bin_array = [],
    mask_bin_array = [],
    ip = document.querySelector(".ip_"),
    mask = document.querySelector(".mask_"),
    node = document.querySelector(".node"),
    first = document.querySelector(".first"),
    last = document.querySelector(".last"),
    broadcast = document.querySelector(".broadcast"),
    network = [],
    network_bin = [],
    network_number = 0;

btn.addEventListener("click", ()=>{
    ip.innerHTML = mask.innerHTML = first.innerHTML = last.innerHTML  = node.innerHTML = broadcast.innerHTML = " ";
    ip_array = ip_input.value.split(".");
    mask_array = mask_input.value.split(".");
    if (checkMask(mask_array) && checkIP(ip_array)){
        processInfo();
        getNetwork(ip_array, mask_array);
        getFirstnLast();
        getBroadcast();
    }
    else {
        ip.innerHTML = "Неправильный ввод";
    }

})

function checkMask(mask_array){
    for (var i = 0; i < mask_array.length - 1; i++){
        if (Number(mask_array[i]) < Number(mask_array[i+1]) || mask_array.length < 4 || ((isNaN(mask_array[i]) == true)) || (mask_array[i] > 255 || mask_array[i] < 0) || (mask_array[3] > 255 || mask_array[3] < 0)){
            console.log(i);
            return false;
        }
    }
    return true;
}

function checkIP(ip_array){
    for (var i = 0; i < ip_array.length; i++){
        if (((isNaN(ip_array[i]) == true) || ip_array.length < 4) || (ip_array[i] > 255 || ip_array[i] < 0)){
            return false;
        }
    }
    return true;
}


function getFirstnLast(){
    var first_ip= [];
    var last_ip = [];
    for (var i= 0; i < 3; i++){
        first_ip[i] = (Number(ip_array[i]) & Number(mask_array[i]));
    }
    first_ip[3] = (Number(ip_array[i]) & Number(mask_array[i])) + 1;
    for (var i= 0; i < 4; i++){
        if ((Number(ip_array[i]) & Number(mask_array[i])) == 0){
            if (i == 3){
                last_ip[i] = 254 -  Number(mask_array[i]); 
            }
            else {
                last_ip[i] = 255 -  Number(mask_array[i]); 
            }
        }
        else {
            last_ip[i] = Number(ip_array[i]) & Number(mask_array[i]);
        }
    }
    if (mask_array[3] == 255){
        first.innerHTML = "В заданной сети нет адресов для рабочих хостов. ";
    }
    else {
        first.innerHTML = "первый адрес в сети =" + res2string(first_ip) + " в двоином виде = " + dec2bin(first_ip);
        last.innerHTML = "последний адрес в сети =" + res2string(last_ip) + " в двоином виде = " + dec2bin(last_ip);
    }
}

function processInfo(){
    var ip_bin_array = [];
    var mask_bin_array = [];
    for (var i= 0; i < 4; i++){
        ip_bin_array[i] = dec2bin(Number(ip_array[i]));
        mask_bin_array[i] = dec2bin(Number(mask_array[i]));
    }
    ip.innerHTML = "ip - адрес = " + res2string(ip_array) + ", в двоичном виде " + dec2bin(ip_array);
    mask.innerHTML = "маска  = " + res2string(mask_array) + ", в двоичном виде " + dec2bin(mask_array);
}

function getNetwork(ip, mask){
    for (var i = 0; i<4 ; i++){
        difference = (Number(ip[i]) & Number(mask[i]))
        network.push(difference);
        network_bin.push(dec2bin(difference));
    }

    node.innerHTML = "адрес сети = " + res2string(network) + " в двоичном виде " + res2string(network_bin);
    network = [];
    network_bin= [];
}

function getBroadcast(){
    var broadcast_array = [];
    for (var i= 0; i < 4; i++){
        if ((Number(ip_array[i]) & Number(mask_array[i])) == 0){
                broadcast_array[i] = 255 -  Number(mask_array[i]); 
        }
        else {
            broadcast_array[i] = Number(ip_array[i]) & Number(mask_array[i]);
        }
    }
    broadcast.innerHTML = "широковещательный адрес = " + res2string(broadcast_array) + " в двоичном виде " + dec2bin(broadcast_array);
}

function dec2bin(dec){
    if (Array.isArray(dec) == false){
        return (dec >>> 0).toString(2);
    }
    else {
        result = "";
        for (var i = 0; i< 4; i++){
            result+= (dec[i] >>> 0).toString(2) + ".";
        }
        return result.substring(0, result.length - 1);
    }
}

function res2string(array){
    var result = "";
    for (var i=0; i< array.length ;i++){
        result = result + array[i] + ".";
    }
    return result.substring(0, result.length - 1);
}