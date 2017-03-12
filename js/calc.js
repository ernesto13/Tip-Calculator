function calculate() {
// body...
var totalbill = parseFloat(document.getElementById("totalbill").value);
var percentbox = parseFloat(document.getElementById("percentbox").value) * 0.01;
var guest = parseFloat(document.getElementById("party").value);
var totalTip = totalbill * percentbox; //tip percentage amount
var totalTipBill = (totalbill + totalTip) / guest; //for guest and total
var totalAmount = totalbill + totalTip; //total for check
if (guest >= 1) {
document.getElementById("partyGuest").innerHTML = "Each Guest Owes" + "<br>" + "<br> $" + parseFloat(totalTipBill).toFixed(2);
} else if (isNaN(guest)) {
document.getElementById("partyGuest").innerHTML = "";
} else(document.getElementById("partyGuest").innerHTML = "Looks like it's your treat");
if (isNaN(totalbill) || totalbill === "") {
alert("Please input bill amount");
} else if (isNaN(percentbox) || percentbox === "") {
alert("Input amount of tip percentage");
} else document.getElementById("totalAmt").innerHTML = "";
document.getElementById("tipPercent").innerHTML = "Tip Amount " + "<br>" + "<br> $" + parseFloat(totalTip).toFixed(2); //for tip amount
document.getElementById("totalAmt").innerHTML = "Total Bill Amount" + "<br>" + "<br> $" + parseFloat(totalAmount).toFixed(2); //for total
}
function btnClear() {
document.getElementById("totalbill").value = " ";
document.getElementById("percentbox").value = " ";
document.getElementById("party").value = "";
document.getElementById("tipPercent").innerHTML = " Don't be a cheap ass!, " + "<br>" + "<br>" + " tip some more. ";
document.getElementById("totalAmt").innerHTML = "";
document.getElementById("partyGuest").innerHTML = "";
}