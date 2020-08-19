
var button = document.getElementById("calc");

button.addEventListener('click', function() {
    var billAmount = document.getElementById("billAmount_1").value;
    var percentageTip = document.getElementById("percentageTip_1").value;

    var tipAmount = (percentageTip/100) * billAmount;
    document.getElementById("tipAmount_1").value = Math.floor(tipAmount);

    var total = billAmount + tipAmount;
    document.getElementById("total_1").value = Math.floor(total);
}
);
