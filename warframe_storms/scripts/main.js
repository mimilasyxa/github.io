const TIERS = [
    'Лит',
    'Мезо',
    'Нео',
    'Акси',
    'Реквием'
];

const MISSION_INFO = [
    'tier', 'missionType', 'enemy', 'node', 'eta'
]

let items = Array.from(document.querySelectorAll(".package"));


var xhr = new XMLHttpRequest()
setInterval(()=> {
    xhr.open(
        'GET',
        'https://api.warframestat.us/PC/fissures',
        true
    )
    xhr.send()
}, 8000)



setInterval(function () {
    clearPage();
    let $result = JSON.parse(xhr.responseText);
    for (var i = 0; i < TIERS.length; i++) {
        for (var k = 0; k < $result.length; k++) {
            if ($result[k].isStorm === true) {
                if ($fissure = filterResponse($result[k], TIERS[i])) {
                    createDIV(filterResponse($result[k], TIERS[i]), items[0]);
                }
            }
        }
    }
}, 10000)

function createDIV(value, parent) {
    let div = document.createElement("div");
    div.classList.add("fissure");
    parent.appendChild(div);
    createFissure(div, value);
}

function clearPage() {
    let $fissures = document.querySelectorAll('.fissure')

    $fissures.forEach($fissure => {
        $fissure.remove();
    })
}

function createFissure(parent, value) {
    for (let i = 0; i < MISSION_INFO.length; i++) {
        div = document.createElement('div')
        if (MISSION_INFO[i] == 'node') {
            div.classList.add('title-location');
        } else {
            div.classList.add('title-item');
        }
        if (value.node == 'Рудники Ню-Гуа (Нептун)') {
            div.classList.add('golden');
        }
        div.innerHTML = value[MISSION_INFO[i]];
        parent.appendChild(div);
    }
}

function filterResponse(result, tier) {
    if (result.tier === tier) {
        return result
    }
}
