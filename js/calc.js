function calculate() {
// body...
var totalbill = parseFloat(document.getElementById("totalbill").value);
var percentbox = parseFloat(document.getElementById("percentbox").value) * 0.01;
var totalTip = totalbill * percentbox;
var totalAmount = totalbill + totalTip;
if (isNaN(totalbill) || totalbill === "") {
alert("Please input bill amount");
} else if (isNaN(percentbox) || percentbox === "")
alert("Input amount of tip percentage");
document.getElementById("tipPercent").innerHTML = "Tip Amount " + "<br>" + "<br> $" + parseFloat(totalTip).toFixed(2);
document.getElementById("totalAmt").innerHTML = "Total Bill amount" + "<br>" + "<br> $" + parseFloat(totalAmount).toFixed(2);
}
function btnClear() {
document.getElementById("totalbill").value = " ";
document.getElementById("percentbox").value = " ";
document.getElementById("tipPercent").innerHTML = " Don't be a cheap ass!, " + "<br>" + "<br>" + " tip some more. ";
document.getElementById("totalAmt").innerHTML = "";
}