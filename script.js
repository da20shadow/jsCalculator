class Calculator {
    constructor(current,previous,firstNumbersArray,secondNumbersArray){
        this.current = current;
        this.previous = previous;
        this.firstNumbersArray = firstNumbersArray;
        this.secondNumbersArray = secondNumbersArray;
    }
    clear(){
        this.current.innerHTML = "";
        this.previous.innerHTML = "";
        this.firstNumbersArray = [];
        this.secondNumbersArray = [];
    }
    delete(){
        console.log("Will delete the last element!");

        if(this.firstNumbersArray.includes("*")){
            console.log("The first Array contains *")

            this.secondNumbersArray.pop();

            let c = this.previous.innerHTML;

            c = c.substring(0, c.length - 1);

            console.log(`This is the c ${c}`);

            this.previous.innerHTML = c.toString();
        }else{
            let deletedElement = this.firstNumbersArray.pop();
            console.log(`Last element >${deletedElement}< of the first array is deleted!`);

            let c = this.previous.innerHTML;

            c = c.substring(0, c.length - 1);

            console.log(`This is the c ${c}`);

            this.previous.innerHTML = c.toString();
        }
    }
    addNumber(number){

        if(this.firstNumbersArray.length == 0){
            this.clear();
            this.firstNumbersArray.push(number.toString());
            this.previous.innerHTML = number.toString();

        }else if (this.firstNumbersArray.length > 0 && this.firstNumbersArray.includes("*")
        || this.firstNumbersArray.includes("/") || this.firstNumbersArray.includes("-")
        || this.firstNumbersArray.includes("+")){

            let c = this.previous.innerHTML;

            this.secondNumbersArray.push(number.toString());

            this.previous.innerHTML = c.toString() + number.toString();
            console.log(`Added ${number}`);
        }else{

            let c = this.previous.innerHTML;
            this.previous.innerHTML = c.toString() + number.toString();
            console.log(`Added ${number}`);

            this.firstNumbersArray.push(number.toString());
        }
    }

    showResult(){

        console.log("Clicked Equals Button!");

        let firstNum = 0;
        let secondNum = 0;
        let operator = undefined;

        let firstIsDone = false;

        for (let num of this.firstNumbersArray){
        
            if(num.toString() === "*" || num.toString() === "/"
            || num.toString() === "+" || num.toString() === "-"){
                firstIsDone = true;
            }else{
                if(firstNum === 0){
                    firstNum = num.toString();
                }else{
                    firstNum += num.toString(); 
                }
            }
            if (firstIsDone){
                console.log(`First num is finished ${firstNum}`);
                break;
            }
        }
        for (let sNum of this.secondNumbersArray){
                if(secondNum === 0){
                    secondNum = sNum.toString();
                }else{
                    secondNum += sNum.toString(); 
                }
        }


        let result;

        if (this.firstNumbersArray.includes("*")){

            result = Number(firstNum) * Number(secondNum);

        }else if (this.firstNumbersArray.includes("/")){
            
            result = Number(firstNum) / Number(secondNum);

        }else if (this.firstNumbersArray.includes("+")){
           
            result = Number(firstNum) + Number(secondNum);

        }else if (this.firstNumbersArray.includes("-")){
            
            result = Number(firstNum) - Number(secondNum);

        }else{
            result = NaN;
        }

    
        this.current.innerHTML = result;

        console.log(`First Number = ${firstNum} Second Number = ${secondNum}
        And Result = ${result}`);

        this.firstNumbersArray = [];
        this.secondNumbersArray = [];
    }
}

//array
let firstNumbersArray = [];
let secondNumbersArray = [];

let current = document.querySelector("[data-current]");
let previous = document.querySelector("[data-previous]");

let calculator = new Calculator(current,previous,firstNumbersArray,secondNumbersArray);

let clearBtn = document.querySelector('[data-clear]');
clearBtn.addEventListener("click", function (){
    calculator.clear();
});

let numbersBtn = document.querySelectorAll('[data-number]');

numbersBtn.forEach(button => {
button.addEventListener("click", () => {
calculator.addNumber(button.innerText);
    })
});

let operatorsBtn = document.querySelectorAll("[data-operator]");

operatorsBtn.forEach(button => {
    button.addEventListener("click", () => {
        calculator.addNumber(button.innerText);
    })
})

let equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    calculator.showResult();
});

let del = document.querySelector("#del");
del.addEventListener("click", () => {
    calculator.delete();
})