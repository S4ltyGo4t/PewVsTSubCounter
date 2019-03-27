const request = require("request")

const pSubs = document.getElementById("p-subs");
const tSubs = document.getElementById("t-subs");
const aheadHeader = document.getElementById("name-ahead");

console.log(pSubs.innerHTML);
console.log(tSubs.innerHTML);

const _url = "https://www.googleapis.com/youtube/v3/channels";
let _qs = {
    "part": "statistics",
    "id": "",
    "key": ""
}


_qs.key = "AIzaSyD6Dq71z17NupL7_c4zjYPOul64itj3lIQ";

function getSubs(name) {
    let element;
    if (name == "PewDiePie") {
        _qs.id = "UC-lHJZR3Gqxm24_Vd_AJ5Yw";
        element = pSubs;
    } else if (name == "T-Series") {
        _qs.id = "UCq-Fj5jknLsUf-MWSy4_brA"
        element = tSubs;
    }
    request.get({
        url: _url,
        qs: _qs
    }, function (err, response, body) {
        element.innerHTML = JSON.parse(body)["items"][0]["statistics"]["subscriberCount"];
    });
}

function numberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function updateSubs() {
    getSubs("PewDiePie");
    getSubs("T-Series");
    let difference = numberWithDots(Math.abs(pSubs.innerHTML - tSubs.innerHTML));

    if (parseInt(pSubs.innerHTML, 10) >= parseInt(tSubs.innerHTML, 10)) {
        aheadHeader.innerHTML = `PewDiePie is currently ${difference} Subs ahead.`;
        aheadHeader.style.color = "#4dcc7d";
    } else {
        aheadHeader.innerHTML = `T-Series is currently ${difference} Subs ahead.`;
        aheadHeader.style.color = "#fc121b";
    }
}
var update_loop = setInterval(updateSubs, 1000);
updateSubs();