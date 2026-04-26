let acorns = 0;
let playersMoney = 0;
let acornsPerClick = 1;
let acornCost = 1;
let sellInterval = 1000;
let sellIntervalId = null;
let sellingStatus = false;

function updateAcorns() {
    document.getElementById("acornDisplay").innerText = `You have ${acorns} acorns.`;
};
function updateMoney() {
    document.getElementById("moneyDisplay").innerText = `you have $${playersMoney}`;
};
function addAcorn() {
    acorns += acornsPerClick;
    updateAcorns();
};
function sellOneAcorn() {
    if (acorns > 0 && sellingStatus == false) {
        acorns -= 1;
        playersMoney += acornCost;
        updateAcorns()
        updateMoney()
    }else {
        sellingStatus = !sellingStatus;
        window.clearInterval("sellIntervalId");
    }
    }
function sellAcorns() {
    sellIntervalId = window.setInterval("sellOneAcorn()", sellInterval, acorns > 0);
};
function advertiseShop() {
    sellInterval -= 100
}
function upgradeTrees() {
    acornsPerClick += 5
}