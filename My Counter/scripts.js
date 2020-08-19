var base = 0;
document.getElementById("base").innerHTML = base;

function increment() {
    return document.getElementById("base").innerHTML = base++;
}
function decrement() {
    return document.getElementById("base").innerHTML = base--;
}
