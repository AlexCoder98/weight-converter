class Inputs {
    fromInput: HTMLInputElement;
    toInput: HTMLInputElement;

    constructor(fromSelector: string, toSelector: string) {
        this.fromInput = document.getElementById(fromSelector)! as HTMLInputElement;
        this.toInput = document.getElementById(toSelector)! as HTMLInputElement;
        this.toInput.setAttribute('readonly', '');
    }
}

export const inputs = new Inputs('from', 'to');