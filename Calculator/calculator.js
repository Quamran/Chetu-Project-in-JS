function clearScreen() {
    document.getElementById('screen').value = "";
}

function display(value) {
    document.getElementById('screen').value += value;
}
function calculate(value) {
    var x = document.getElementById('screen').value
    var result = eval(x)


    document.getElementById('screen').value = result;


}