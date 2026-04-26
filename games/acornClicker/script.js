let acorns = 0;
let money = 0;
let acornsPerClick = 1;
let moneyPerAcorn = 1;
let trees = 1;
let treeCost = 50;
let isSelling = false;

function updateAcorns() {
    document.getElementById("acornDisplay").innerText = `You have ${acorns} acorns.`;
};
function updateMoney() {
    document.getElementById("moneyDisplay").innerText = `you have $${money}`;
}
function addAcorn() {
    if(isSelling == false){
        acorns += acornsPerClick;
        updateAcorns();
    }
};
function sellOneAcorn() {
    if(acorns > 0) {
        acorns -= 1;
        money += moneyPerAcorn;
        updateAcorns();
        updateMoney();
    } else {
        stopSelling();
    }
};
let sellInterval;
function sellAcorns() {
    if(isSelling == false) {
        isSelling = true;
        console.log("hello world");
        sellInterval = window.setInterval(sellOneAcorn, 1000);
     }
};
function stopSelling() {
    isSelling = false;
    clearInterval(sellInterval);
};