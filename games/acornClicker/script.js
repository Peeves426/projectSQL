let acorns = 0;
let money = 1000;
let moneyPerAcorn = 1;
let trees = 1;
let treeCost = 50;
let feralizerCost = 100;
let farmerCost = 500;
let farmerSpeed = 10000
let isSelling = false;

function updateAcorns() {
    document.getElementById("acornDisplay").innerText = `You have ${acorns} acorns.`;
};
function updateMoney() {
    document.getElementById("moneyDisplay").innerText = `you have $${money}`;
}
function addAcorn() {
    if(isSelling == false){
        acorns += trees;
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
        sellInterval = window.setInterval(sellOneAcorn, 1000);
     }
};
function stopSelling() {
    isSelling = false;
    clearInterval(sellInterval);
};
function addTree() {
    if(money >= treeCost) {
        trees += 1;
        money -= treeCost;
        updateMoney();
        treeCost = Math.ceil(Math.random() * 10) * treeCost;
        document.getElementById("treeButton").innerHTML = `Buy tree $${treeCost}`;
    };
};
function buyFertalizer() {
    if(money >= feralizerCost) {
        moneyPerAcorn += 5; 
        money -= feralizerCost;
        updateMoney();
        feralizerCost = Math.ceil(Math.random() * 10) * feralizerCost;
        document.getElementById("fertalizerButton").innerHTML = `Buy Fertalizer $${feralizerCost}`;
        
    }
}
let farmInterval
function hireFarmer() {
    if(money >= farmerCost) {
        farmerSpeed /= 2
        farmInterval = window.setInterval(addAcorn, farmerSpeed)
        money -= farmerCost;
        updateMoney();
        document.getElementById("farmerButton").innerHTML = `give farmer a raise $${farmerCost}`;
        
    }
}
