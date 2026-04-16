let acorns = 0;
let acornsPerClick = 1;
function addAcorn() {
    acorns += acornsPerClick;
    document.getElementById("acornDisplay").innerText = `You have ${acorns} acorns.`
}
function upgrade() {
    acornsPerClick *= Math.ceil(Math.random())*10
}