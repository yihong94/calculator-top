let currentValue = '';
let previousValue = '';
let operator = '';

document.addEventListener("DOMContentLoaded", function(){

    let numbers = document.querySelectorAll(".number");
    let clear = document.querySelector(".clear-btn");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".dot");
    let operator = document.querySelectorAll(".operator");


    let display = document.querySelector(".message");
    let previousScreen = document.querySelector(".current");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;

    }))

    operator.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
        
        

    }))

    clear.addEventListener("click", function(){
        currentValue = '';
        previousValue = '';
        operator = '';
        previousScreen.textContent = previousValue;
        currentScreen.textContent = currentValue;
    })

    equal.addEventListener("click", function(){
        if(currentValue != '' && previousValue !== ''){
            calculate()
        
            if (previousValue.length <= 8){
            previousScreen.textContent = previousValue;
            }else{
            previousScreen.textContent = previousValue.slice(0, 8) + "...";
        }
        
        }
        
    })

    decimal.addEventListener("click", function(){
        addDecimal();
    })

})

function handleNumber(num){
    if(currentValue.length <= 8){
        currentValue += num;
    }
    
}

function handleOperator(op){
    
        operator = op;
        previousValue = currentValue;
        currentValue = '';
        
    }


function calculate (){
    previousValue = Number(previousValue);
    currentValue = Number (currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    } else if(operator === "-"){
        previousValue -= currentValue;
    } else if(operator === "*"){
        previousValue *= currentValue;
    } else{
        previousValue /= currentValue;
    }
    

    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = currentValue.toString();

        
    }

function roundNumber(num){
    return Math.round(num * 10000000)/10000000
        
    }
    
function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue += '.';
    }
}

