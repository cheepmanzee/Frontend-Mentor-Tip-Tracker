const $billIn = document.getElementById('bill');
const $peopleIn = document.getElementById('people');
const $selectTip = document.querySelectorAll('.select__tip');
const $customTip = document.getElementById('custom');
const $tipAmount = document.querySelector('.total__amount .amount__amount');
const $tipTotal = document.querySelector('.total__total .amount__amount');
const $reset = document.getElementById('reset');

$billIn.addEventListener('input', billInpFunc);
$peopleIn.addEventListener('input', peopleInpFunc);
$selectTip.forEach(function(val){
    val.addEventListener('click', handleClick)
})
$customTip.addEventListener('input',tipInpFunc);
$reset.addEventListener('click', resetFunc);


$billIn.value = 0.0;
$peopleIn.value = 1;
$tipAmount.innerHTML = '$' + (0.0).toFixed(2);
$tipTotal.innerHTML = '$' + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

function billInpFunc() {
    billValue = parseFloat($billIn.value);
    calcTip();
}

function peopleInpFunc() {
    peopleValue = parseFloat($peopleIn.value);
    calcTip();
}

function tipInpFunc() {
    tipValue = parseFloat($customTip.value / 100);
    $selectTip.forEach(function(val){
        val.classList.remove('active-tip');
    })
    calcTip();
}

function resetFunc() {
    $billIn.value = 0.0;
    $peopleIn.value = 1;
    $customTip.value = '';
    $tipAmount.innerHTML = '$' + (0.0).toFixed(2);
    $tipTotal.innerHTML = '$' + (0.0).toFixed(2);
}

function handleClick(event) {
    $selectTip.forEach(function(val){
        val.classList.remove('active-tip');
        if (event.target.innerHTML == val.innerHTML) {
            val.classList.add('active-tip');
            tipValue = parseFloat(val.innerHTML)/100;
        }
    })
    calcTip();
}

function calcTip() {
    if (peopleValue >= 1) {
        let tipAmount = (billValue * tipValue) / peopleValue;
        let total = (billValue + tipAmount) / peopleValue;
        $tipAmount.innerHTML = '$' + tipAmount.toFixed(2);
        $tipTotal.innerHTML = '$' + total.toFixed(2);
    }
}