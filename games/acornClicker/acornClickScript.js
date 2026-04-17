let acorns = 0;
let acornsPerClick = 1;
let upgradeCost = 50;
let autoclickCost = 600;

function updateAcorns() {
    document.getElementById("acornDisplay").innerText = `You have ${acorns} acorns.`;
}
function addAcorn() {
    acorns += acornsPerClick;
    updateAcorns()
}
function upgrade() {
    if(acorns >= upgradeCost) {
        acorns -= upgradeCost;
        acornsPerClick *= 5;
        upgradeCost *= 10;
        document.getElementById("upgradeButton").innerHTML = `upgrade: ${upgradeCost} acorns`;
        updateAcorns();
        console.log(upgradeCost)
    };
};
function autoclicker() {
    if (acorns >= autoclickCost){
        acorns-= autoclickCost;
        updateAcorns()
        autoclickCost *= 10;
        document.getElementById("autoClickButton").innerHTML = `autoclicker: ${autoclickCost} acorns`
        window.setInterval("addAcorn()", 1000);
    }
}