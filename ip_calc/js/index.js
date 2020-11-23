let ip_input = document.querySelector("#ip"),
    mask_input = document.querySelector("#mask"),
    btn = document.querySelector("button"),
    first_ip = [1],
    last_ip = [],
    ip_bin_array = [],
    mask_bin_array = [],
    ip = document.querySelector(".ip_"),
    mask = document.querySelector(".mask_"),
    node = document.querySelector(".node");
    first = document.querySelector(".first");
    last = document.querySelector(".last");
    network = [];
    network_bin = [];
    network_number = 0;



btn.addEventListener("click", ()=>{
    ip_array = ip_input.value.split(".");
    mask_array = mask_input.value.split(".");
    last_ip[network_number] = 255 - Number(mask_array[3]);
    processInfo();
    getNetwork(ip_array, mask_array);
    getFirstnLast();
})

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

function getFirstnLast(){
    var ip_bin_array = [];
    for (var i= 0; i < 3; i++){
        ip_bin_array[i] = Number(ip_array[i]);
    }
    ip_bin_array[3] = first_ip[network_number];
    first.innerHTML = "первый адрес в сети =" + res2string(ip_bin_array) + " в двоином виде = " + dec2bin(ip_bin_array);
    ip_bin_array[3] = last_ip[network_number];
    last.innerHTML = "последний адрес в сети =" + res2string(ip_bin_array) + " в двоином виде = " + dec2bin(ip_bin_array) ;


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
    for (var i = 0; i<3 ; i++){
        difference = (Number(ip[i]) & Number(mask[i]))
        network.push(difference);
        network_bin.push(dec2bin(difference));
    }
    network[3] = Number(first_ip[network_number]) - 1;
    network_bin[3] = dec2bin(Number(first_ip[network_number]) - 1);
    node.innerHTML = "адрес сети = " + res2string(network) + " в двоичном виде " + res2string(network_bin);
    network = [];
    network_bin= [];
}

function res2string(array){
    var result = "";
    for (var i=0; i< array.length ;i++){
        result = result + array[i] + ".";
    }
    return result.substring(0, result.length - 1);
}