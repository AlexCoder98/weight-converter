class Button {
    constructor(selector) {
        this.button = document.querySelector(selector);
    }
}
class ConvertButton extends Button {
    constructor(selector) {
        super(selector);
    }
}
class ResetButton extends Button {
    constructor(selector) {
        super(selector);
    }
}
export const convertButton = new ConvertButton('[data-convert]');
export const resetButton = new ResetButton('[data-reset]');
