import { weightUnits } from "./helpers/weight-units.js";
import { inputs } from "./inputs.js";
import { convertButton, resetButton } from "./button.js";
import { calculation } from "./calculation.js";
class WeightConverter {
    constructor(data, selector) {
        this.selectTags = document.querySelectorAll(selector);
        this.data = data;
        this.fromWeightValue = '';
        this.toWeightValue = '';
        this.selectTags.forEach(selectTag => {
            for (const unit of this.data) {
                const option = document.createElement('option');
                if (data.indexOf(unit) === 0) {
                    option.setAttribute('disabled', '');
                    option.setAttribute('selected', '');
                }
                option.setAttribute('value', unit);
                option.textContent = unit;
                selectTag.appendChild(option);
            }
            selectTag.addEventListener('change', () => this.selectWeightUnit(selectTag.id, selectTag.value));
        });
        convertButton.button.addEventListener('click', this.convertWeight.bind(this));
        resetButton.button.addEventListener('click', this.reset.bind(this));
    }
    reset() {
        inputs.fromInput.value = '';
        inputs.toInput.value = '';
    }
    displayResult(result) {
        const resultToDisplay = result > 1 ? result.toFixed(2) : result.toString();
        inputs.toInput.value = resultToDisplay;
    }
    selectWeightUnit(id, value) {
        if (id === 'weight-from') {
            this.fromWeightValue = value;
            inputs.fromInput.placeholder = value.toLowerCase();
        }
        else if (id === 'weight-to') {
            this.toWeightValue = value;
            inputs.toInput.placeholder = value.toLowerCase();
        }
    }
    convertWeight() {
        const { fromWeightValue, toWeightValue } = this;
        if (!fromWeightValue || !toWeightValue) {
            alert('Select a weight unit');
            return;
        }
        else {
            if (inputs.fromInput.value.length === 0) {
                alert('Input cannot be empty!');
                return;
            }
            else {
                const fromWeight = parseFloat(inputs.fromInput.value);
                const result = calculation.makeCalculation(fromWeightValue, toWeightValue, fromWeight);
                this.displayResult(result);
            }
        }
    }
}
export const weightConverter = new WeightConverter(weightUnits, '[data-weight-selection]');
