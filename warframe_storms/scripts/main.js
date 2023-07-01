const TIERS = [
    'Лит',
    'Мезо',
    'Нео',
    'Акси',
    'Реквием'
];

const railjackBlock = document.querySelector('.railjack');
const normalBlock = document.querySelector('.normal');

const BLOCKS = [
    railjackBlock,
    normalBlock
];

const MISSION_INFO = [
    'tier', 'missionType', 'enemy', 'node', 'eta'
];

getFissures().then(response => fillFissures(filterResponse(response)));

setInterval(async () => {
    getFissures().then((response) => {
        clearPage();
        fillFissures(filterResponse(response));
    });
}, 30000);

async function getFissures()
{
    return await fetch('https://api.warframestat.us/PC/fissures').
    then((response) => response.json());
}

function filterResponse(response)
{
    let filteredResponse = [];
    TIERS.forEach((tier) => {
        response.forEach((fissure) => {
            if (fissure.tier === tier) {
                filteredResponse.push(fissure);
            }
        })
    });

    return filteredResponse;
}

function clearPage()
{
    BLOCKS.forEach((block) => {
        let children = block.children;
        for (let i=children.length - 1; i >= 1; i--) {
            children[i].remove();
        }
    })
}

function fillFissures(response)
{
    response.forEach((fissure) => {
        let fissureItem = document.createElement('div');
        let fissureBlock = fissure.isStorm
            ? railjackBlock
            : normalBlock;

        fissureItem.classList.add('fissure-mission');

        for (let i=0; i < MISSION_INFO.length; i++) {
            let fissureHeader = document.createElement('div');
            fissureHeader.classList.add('header-item')
            fissureHeader.innerHTML = fissure[MISSION_INFO[i]];

            fissureItem.appendChild(fissureHeader);
        }
        fissureBlock.appendChild(fissureItem);
    })
}

