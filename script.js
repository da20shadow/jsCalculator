class Calculator{
    constructor(previous,current){
        this.previous = previous;
        this.current = current;
        this.clear();
    }
    clear(){
        this.current = "";
        this.previous = "";
        this.operators = undefined;
    }
    delete(){
        this.current = this.current.toString().slice(0, -1);
    }
    appendNumber(number){
        if(number === "." && this.current.includes(".")){
            return;
        }
        this.current = this.current.toString() + number.toString();
    }
    getOperation(operator){
        if(this.current === ""){
            return;
        }
        if(this.previous !== ""){
            this.compute();
        }
        this.operator = operations[operator];
        this.previous = this.current;
        this.current = "";
    }
    compute(){
        let computation;
        const prev = parseFloat(this.previous);
        const current = parseFloat(this.current);

        if(isNan(prev) || isNaN(current)){return;}

        switch(this.operation){
            case "+":
                computation = prev + current;
                break;
            case "-":
                computation = prev - current;
                break;
            case "*":
                computation = prev * current;
                break;
            case "/":
                computation = prev / current;
                break;
            default:
                    return;
        }
        this.current = computation;
        this.operation = undefined;
        this.previous = "";
    }
    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay;
        if (isNaN(integerDigits)) {
          integerDisplay = '';
        } else {
          integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
          return `${integerDisplay}.${decimalDigits}`
        } else {
          return integerDisplay
        }
      }
    updateDisplayedValue(){
        this.current.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.previous.innerText = `${this.getDisplayNumber(this.previous)} ${this.operation}`;
        }else{
            this.previous.innerText = "";
        }
    }
}

const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');

const clear = document.querySelector('[data-clear]');
const del = document.querySelector('[data-delete]');
const equals = document.querySelector('[data-equals]');

const previous = document.querySelector('[data-previous]');
const current = document.querySelector('[data-current]');

const calculator = new Calculator(previous, current);

numbers.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplayedValue()
    })
})

operators.forEach(button => {
    button.addEventListener("click", () => {
        calculator.getOperation(button.innerText);
        calculator.updateDisplayedValue();
    })
})

equals.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
  })
  
  clear.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })
  
  del.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })