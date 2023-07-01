const TIERS = [
    'Лит',
    'Мезо',
    'Нео',
    'Акси',
    'Реквием'
];
let filteredResponse = [];
const ZERO_VALUE_TIMER_REGEX = /(^0[A-Za-zа-яА-Я])|(\s0[A-Za-zа-яА-Я])/g;
const EXPIRED = 'Закончилось';

const REFRESH_TIMER_SECONDS = 120000;

const railjackBlock = document.querySelector('.railjack');
const normalBlock = document.querySelector('.normal');
const steelPathBlock = document.querySelector('.steel-path');

const BLOCKS = [
    railjackBlock,
    normalBlock,
    steelPathBlock
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
}, REFRESH_TIMER_SECONDS);

setInterval(() => {
    filteredResponse.forEach((fissure) => {
        fissure.eta = getRemainingTime(fissure.expiry);
    })
    clearPage();
    fillFissures(filteredResponse);
}, 1000)

async function getFissures()
{
    return await fetch('https://api.warframestat.us/PC/fissures', { cache: "no-cache"}).
    then((response) => response.json());
}

function filterResponse(response)
{
    filteredResponse = [];
    TIERS.forEach((tier) => {
        response.forEach((fissure) => {
            if (fissure.tier === tier) {
                fissure.eta = getRemainingTime(fissure.expiry)
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
        for (let i=children.length - 1; i >= 2; i--) {
            children[i].remove();
        }
    })
}

function fillFissures(response)
{
    response.forEach((fissure) => {
        let fissureItem = document.createElement('div');
        let fissureBlock = chooseBlock(fissure);

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

function chooseBlock(fissure)
{
    if (fissure.isHard) {
        return steelPathBlock;
    }

    if (fissure.isStorm) {
        return railjackBlock;
    }

    return normalBlock;
}

function getRemainingTime(expireAt)
{
    let expireAtDate = new Date(expireAt),
        now = Date.now(),
        difference = expireAtDate - now;

    if (difference <= 0) {
        return EXPIRED;
    }

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds = Math.floor((difference % (1000 * 60)) / 1000),
        result = hours + 'ч ' + minutes + 'м ' + seconds + 'с';

    return result.replaceAll(ZERO_VALUE_TIMER_REGEX, '');
}

