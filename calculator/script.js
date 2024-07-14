let display = document.getElementById('display');
let buttons = document.querySelectorAll('button[type="button"]');

let calculator = {
    displayValue: '',
    firstOperand: '',
    operator: '',
    secondOperand: '',
    result: '',

    handleButtonPress: function(buttonValue) {
        switch (buttonValue) {
            case '=':
                this.calculateResult();
                break;
            case 'C':
                this.clearDisplay();
                break;
            default:
                this.updateDisplay(buttonValue);
        }
    },

    updateDisplay: function(buttonValue) {
        if (this.displayValue === '' && buttonValue === '0') {
            return;
        }

        if (this.operator === '') {
            this.firstOperand += buttonValue;
        } else {
            this.secondOperand += buttonValue;
        }

        this.displayValue = this.firstOperand + this.operator + this.secondOperand;
        display.value = this.displayValue;
    },

    calculateResult: function() {
        let result = eval(this.displayValue);
        this.displayValue = result;
        display.value = result;
        this.firstOperand = '';
        this.operator = '';
        this.secondOperand = '';
    },

    clearDisplay: function() {
        this.displayValue = '';
        this.firstOperand = '';
        this.operator = '';
        this.secondOperand = '';
        display.value = '';
    }
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.handleButtonPress(button.value);
    });
});