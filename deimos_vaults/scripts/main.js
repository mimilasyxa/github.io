var xhr = new XMLHttpRequest()
xhr.open(
  'GET',
  'https://api.warframestat.us/PC/syndicateMissions',
  true
)
xhr.send()

setTimeout(function(){
    result = JSON.parse(xhr.responseText)[1];
    a = result.jobs[6];
    b = result.jobs[7];
    c = result.jobs[8];
    for (var i = 0; i < a.rewardPool.length; i++){
        createDIV(a.rewardPool[i], items[0]);
    }
    for (var i = 0; i < b.rewardPool.length; i++){
        createDIV(b.rewardPool[i], items[1]);
    }
    for (var i = 0; i < c.rewardPool.length; i++){
        createDIV(c.rewardPool[i], items[2]);
    }
}, 1000)

let items = Array.from(document.querySelectorAll(".info_item"));

function createDIV(value, parent){
    div = document.createElement("div");
    div.innerHTML = value;
    div.classList.add("reward");
    parent.appendChild(div);
}

