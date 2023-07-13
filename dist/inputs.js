class Inputs {
    constructor(fromSelector, toSelector) {
        this.fromInput = document.getElementById(fromSelector);
        this.toInput = document.getElementById(toSelector);
        this.toInput.setAttribute('readonly', '');
    }
}
export const inputs = new Inputs('from', 'to');
